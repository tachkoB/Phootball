
// Styles
import { Row } from "./styled"

/**
 * Renders the head table row
 */
const TableHead = () => {
    return (
        <Row>
            <div>Name</div>
            <div>Age</div>
            <div>Nationality</div>
            <div>Club</div>
            <div>Score</div>
            <div>Value</div>
        </Row>
    )
}

export default TableHead