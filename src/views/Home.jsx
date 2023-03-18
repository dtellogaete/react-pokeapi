import 'bootstrap/dist/css/bootstrap.min.css';

import {NavbarComp} from '../components/Navbar';
import {Col, Container} from 'react-bootstrap';

const Home = () => {
    return (
        <> 
            <NavbarComp/>
            <Container style = {{ display: 'flex'}} className="back">
                <Col className="text-center">
                    <h1 className="text-center">Bienvenido Maestro Pokemon</h1>   
                    <iframe src="https://giphy.com/embed/7ISIRaCMrgFfa" width="480" height="350" frameborder="0" class="giphy-embed" allowfullscreen title="Ash Ketchum and Pikachu from the Pokemon TV show"></iframe>
                </Col>                      
            </Container>                  
        </>
    );
}

export default Home;