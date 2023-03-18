import 'bootstrap/dist/css/bootstrap.min.css';


import {NavbarComp} from '../components/Navbar';
import {Col, Container} from 'react-bootstrap';

const NotFound = () => {
    return (
        <> 
            <NavbarComp/>
            <Container style = {{ display: 'flex'}} className="back">
                <Col className="text-center">
                    <h1 className="text-center">Página no encontrada</h1>                    
                    <img src="https://cdn.pixabay.com/photo/2016/08/15/00/50/pokeball-1594373_1280.png" alt='pokeball' width="360px"  height="405px"></img>                    
                </Col>                      
            </Container>                  
        </>
    );
}

export default NotFound;