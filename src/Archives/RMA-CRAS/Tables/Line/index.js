import { Paragraph, TableCell, TableRow } from "./style";

const Line = ({text, value, color}) => {
    return (
        <TableRow height="24pt">
            <TableCell bgColor={color}>
                <Paragraph className="s5" paddingTop="2pt" paddingLeft="7pt">
                    {text}
                </Paragraph>
            </TableCell>
            <TableCell width="64pt" bgColor={color}>
                <Paragraph className="s4" paddingTop="3pt" paddingLeft="21pt" paddingRight="19pt" textAlign="center">
                    {value}
                </Paragraph>
            </TableCell>
        </TableRow>
    )
}

export default Line;