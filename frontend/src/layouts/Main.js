import { Sidebar } from '../components/generals/Sidebar'
import { Row, Col, Container } from 'reactstrap'

export const Main = (props) => {


    const renderSidebar = () => {
        return (
            <Col md={2}>
                <Sidebar />
            </Col>
        )
    }

    const renderContent = () => {
        return (
            <Col md={7}>
                {props.content()}
            </Col>
        )
    }

    const renderRight = () => {
        return (
            <Col md={3}>
                The right side
            </Col>
        )
    }

    return (
        <Container>
            <Row>
                {renderSidebar()}
                {renderContent()}
                {renderRight()}
            </Row>
        </Container>
    )
}
