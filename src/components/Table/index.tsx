// Components
import TableRow from 'components/TableRow'

// Styles
import { Container } from './styled'

const mockData = {
    name: 'john', nationality: "Hr", age: 22, club: "Dinamo", photo: 'sda', score: 72, value: 23234
}
const mockDataS = {
    name: 'johnsasdasdasd', nationality: "Hrasdasd", age: 22, club: "Dinaasdasdasdasdasdmo", photo: 'sda', score: 72, value: 23234
}
const Table = () => {
    return (
        <Container>
            <div>
                <div>Photo</div>
                <div>Name</div>
                <div>Age</div>
                <div>Nationality</div>
                <div>Club</div>
                <div>Score</div>
                <div>Value</div>
            </div>
            <TableRow player={mockData} />
            <TableRow player={mockDataS} />
        </Container>
    )
}

export default Table