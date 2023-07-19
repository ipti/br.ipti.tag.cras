import {Card} from "primereact/card";

const CrasCard = ({children, title}) => {
    return(
        <Card title={title}>
            {children}
        </Card>
    )
}

export default CrasCard;