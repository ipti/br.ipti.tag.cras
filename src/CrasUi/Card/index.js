import { Padding } from "../styles/styles";
import { Card } from "./style";

const CrasCard = ({ children, title }) => {
    return (
        <Card>
            <Padding>

                <h3>{title}</h3>
                {children}
            </Padding>
        </Card>
    )
}

export default CrasCard;