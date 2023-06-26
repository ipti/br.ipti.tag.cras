import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@kiwicom/orbit-components/lib/Table";
import { Column, Row } from "../styles/styles";


const CrasTable = ({items}) => {

  
    return (
        <Table>
            <Row>
                {items.map((item, index) => {
                    return (
                        <Column>
                            <TableHead>
                                <TableRow>
                                    <TableCell key={index}>{item.name}</TableCell>
                                </TableRow>
                            </TableHead>
                            {item.items.map((insider, index) => {
                                return (
                                    <TableBody>
                                        <TableCell>{insider.text}</TableCell>
                                    </TableBody>
                                )
                            })}
                        </Column>
                    )
                })}
            </Row>

            {/* <TableFooter>
                <TableRow>
                    <TableCell>Footer</TableCell>
                </TableRow>
            </TableFooter> */}
        </Table>
    )
}

export default CrasTable;