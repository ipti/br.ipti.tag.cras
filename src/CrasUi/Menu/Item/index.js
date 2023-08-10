import { useNavigate, } from "react-router-dom"
import { Container, Text } from "./style";
import { Column, Padding, Row } from "../../styles/styles";
import LudzIcon from "../../Icon/icon";



const Item = ({ icon, path, text, active, funcActiv }) => {
    const history = useNavigate();

    const Event = () => {
        history(`${path}`);
        funcActiv()
    }

    return (
        <Container onClick={Event} active={active}>
            <Row style={{ height: "35px" }}>
                <Padding />
                <Text active={active}>
                    <Column id="center">
                        <LudzIcon size="1.2rem" icon={icon} />
                    </Column>
                    <Padding />
                    <Column id="center">
                        {text}
                    </Column>
                </Text>
            </Row>
        </Container>
    )
}

export default Item