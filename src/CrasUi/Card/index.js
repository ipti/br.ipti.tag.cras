import { Padding } from "../styles/styles";
import { Card } from "./style";

const CrasCard = ({ children }) => {
    return (
        <Card>
            <Padding>
                {children}
            </Padding>
        </Card>
    )
}

export default CrasCard;