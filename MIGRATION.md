# Migração — Remoção de `edcenso_city_fk`

## Por que mudou?

O sistema agora usa arquitetura **multi-tenant por banco de dados**: cada município tem sua própria database com a mesma codebase. O campo `edcenso_city_fk` era usado como filtro de segurança nas queries — com um banco por município, isso se torna redundante. O campo foi removido do token JWT, do objeto `user` e de 12 tabelas do banco.

---

## Mudanças que requerem ação

### 🔴 Crítico — Caminho para cidade nos templates de documentos quebrou

`attendance_unity` não tem mais o campo `edcenso_city` diretamente. A cidade agora está em `address → edcenso_city`.

**Arquivos afetados:**
- `src/Archives/Forwarding/archives.js`
- `src/Archives/BankForwarding/archives.js`
- `src/Archives/SecondCopyForwarding/archives.js`
- `src/Archives/RMA-CRAS/index.js`

**O que mudar:**

```diff
- unityAttendance?.edcenso_city?.name
+ unityAttendance?.address?.edcenso_city?.name

- unityAttendance?.edcenso_city?.edcenso_uf?.acronym
+ unityAttendance?.address?.edcenso_city?.edcenso_uf?.acronym

- unityAttendance?.edcenso_city?.cep_final
+ unityAttendance?.address?.edcenso_city?.cep_final
```

> **Atenção:** confirme com o backend que o endpoint que retorna a unidade de atendimento inclui `address → edcenso_city → edcenso_uf` na resposta. Sem esse include, os campos acima retornam `undefined`.

---

### 🟡 Mudança — Objeto `user` não tem mais `edcenso_city_fk`

O token JWT e as respostas de `POST /auth/login` e `GET /auth/me` não retornam mais `edcenso_city_fk`.

**Novo shape do objeto user:**

```diff
 {
   id: number,
   name: string,
   username: string,
   role: "ADMIN" | "SECRETARY" | "TECHNICIAN",
-  edcenso_city_fk: number | null,
   attendance_unity_fk: number | null
 }
```

Busque por `edcenso_city_fk` em todo o frontend e remova:

```bash
grep -r "edcenso_city_fk" src/
```

---

### 🟡 Mudança — Formulário de criação de usuário

O modelo `user` não tem mais `edcenso_city_fk`. Remova o campo do payload se o formulário enviar.

```diff
 {
   name: "...",
   username: "...",
   email: "...",
   password: "...",
   role: "TECHNICIAN" | "SECRETARY" | "ADMIN",
-  edcenso_city: 123
 }
```

---

## O que não precisa mudar

| Área | Motivo |
|------|--------|
| Formulários de família, atendimento, pessoa, técnico, unidade | Nunca enviaram `edcenso_city_fk` — o backend preenchia pelo token |
| Chamadas de listagem e busca (GET) | Filtro por cidade era no backend; agora o banco já delimita |
| `user.attendance_unity_fk` | Continua presente no token e no objeto user |
| `user.role` e sistema de permissões | Sem alteração — `hasPermission(user.role, Permission.X)` funciona igual |
| Token JWT e fluxo de autenticação | Estrutura igual, apenas sem `edcenso_city_fk` |
| Rotas protegidas (`SecretaryRoute`, `PermissionGuard`) | Lógica baseada em `role`, não em cidade |
| `GET /edcenso/city?edcenso_city_fk=X` | Endpoint de lookup de cidade por ID — não foi removido |
| Formulários de endereço | `address.edcenso_city_fk` foi mantido — endereço ainda referencia cidade |

---

## Resumo das alterações de API

| Endpoint | Alteração |
|----------|-----------|
| `POST /auth/login` | Resposta não inclui mais `edcenso_city_fk` no objeto `user` |
| `GET /auth/me` | Resposta não inclui mais `edcenso_city_fk` |
| `POST /user` · `PUT /user/:id` | Campo `edcenso_city` não deve mais ser enviado |
| `GET /attendance-unity` e similares | Cidade vem via `address.edcenso_city`, não mais diretamente |
| Todos os GETs de listagem | Sem alteração no contrato |
| Todos os POSTs de criação | Sem campos novos obrigatórios — cidade não precisa ser enviada |

---

## Checklist

- [ ] `Archives/Forwarding/archives.js` — atualizar caminho `edcenso_city` → `address.edcenso_city`
- [ ] `Archives/BankForwarding/archives.js` — idem
- [ ] `Archives/SecondCopyForwarding/archives.js` — idem
- [ ] `Archives/RMA-CRAS/index.js` — idem
- [ ] Confirmar include `address → edcenso_city → edcenso_uf` no endpoint de unidade de atendimento
- [ ] Remover qualquer uso de `user.edcenso_city_fk` nos componentes
- [ ] Remover campo `edcenso_city` do formulário de criação/edição de usuário
