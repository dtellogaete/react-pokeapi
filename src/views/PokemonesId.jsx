import 'bootstrap/dist/css/bootstrap.min.css';

import {NavbarComp} from '../components/Navbar';
import {Col, Container, ListGroup} from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import PokemonId from '../components/PokeApiId'

import {useParams, Link} from 'react-router-dom';

const PokemonesId = () => {  

    const { id } = useParams();
    const pokemons = PokemonId(id);  

    console.log(pokemons)

    return (
        <>
            <NavbarComp/>
            <Container style = {{ display: 'flex'}} className="back">
                <Col className="justify-content-center" style={{display:'flex', alignItems:'center'}} >                    
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pokemons.photo} />
                    <Card.Body>
                        <Card.Title>{id[0].toUpperCase()+id.slice(1)}</Card.Title>                    
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Hp: {pokemons.hp} | Speed: {pokemons.speed}</ListGroup.Item>
                        <ListGroup.Item>Attack: {pokemons.attack} | Special Attack: {pokemons.special_attack}</ListGroup.Item>
                        <ListGroup.Item>Defense: {pokemons.defense} | Special Defense: {pokemons.special_defense}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                    <Button className="justify-content-center" variant="danger" >
                    <Link  to="/pokemones" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                    Regresar 
                    </Link> 
                        
                    </Button>
                     
                    </Card.Body>
                    </Card>   
                </Col>                
            </Container>                          
        </>
    );
}

export default PokemonesId;