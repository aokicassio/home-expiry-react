import { Panel, Table } from 'rsuite';


const { Column, HeaderCell, Cell } = Table;

const ProductsTable = (props) => {
    
    return (
        <Panel header={props.heading} bordered>
            <p>{props.description}</p><br/>
            <Table autoHeight={true} data={props.products}>
                <Column flexGrow={2} hidden>
                    <HeaderCell>Id</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column flexGrow={3}>
                    <HeaderCell>Name</HeaderCell>
                    <Cell dataKey="name" />
                </Column>

                <Column flexGrow={3}>
                    <HeaderCell>Brand</HeaderCell>
                    <Cell dataKey="brand" />
                </Column>

                <Column flexGrow={2}>
                    <HeaderCell>Expiry Date</HeaderCell>
                    <Cell dataKey="expiryDate"/>
                </Column>

                <Column flexGrow={2} >
                    <HeaderCell>Status</HeaderCell>
                    <Cell dataKey="status"/>
                </Column>
            </Table>
        </Panel>
    );

}

export default ProductsTable;




