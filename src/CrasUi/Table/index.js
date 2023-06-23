import Table, {
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableFooter,
} from "@kiwicom/orbit-components/lib/Table";


const CrasTable = () => {

    const heads = [
        {name: "Nome", items: [{name: "jonny", rg: "123456", cpf: "07178464"}]},
        {name: "RG/NIS", items: [{name: "jonny", rg: "123456", cpf: "07178464"}]},
        {name: "CPF", items: [{name: "jonny", rg: "123456", cpf: "07178464"}]},
    ]

    const body = [
        {name: "Nome",},
        {name: "RG/NIS",},
        {name: "CPF",},
    ]



    return (
        <Table>
            <TableHead>
                <TableRow>
                    {heads.map((item, index) => {
                        return(
                            <TableCell key={index}>{item.name}</TableCell>
                        )
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Content</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell>Content</TableCell>
                </TableRow>
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell>Footer</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}

export default CrasTable;