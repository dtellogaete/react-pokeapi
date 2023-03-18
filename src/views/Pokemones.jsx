import 'bootstrap/dist/css/bootstrap.min.css';

import {NavbarComp} from '../components/Navbar';
import {Col, Container, Form} from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import PokemonName from '../components/PokeApi'

import { useNavigate} from 'react-router-dom';
import { useState } from 'react';

const Pokemones = () => {

    const [id, setId] = useState('');
    const pokemons = PokemonName();
    const navigate = useNavigate();
    
    const searchPokemon = () => {
    navigate(`/pokemones/${id}`);
    };

    const handleChange = (event) =>{
        setId(event.target.value)       
    }  
    
    return (
        <>
            <NavbarComp/>
            <Container style = {{ display: 'flex'}} className="back">
                <Col className="justify-content-center" style={{display:'flex', alignItems:'center'}} >
                    <Card className="flex text-center" 
                        style={{padding: '10px', width: '500px',display:'flex', alignItems:'center' }} >                     
                        <Card.Body >
                            <Card.Title className="text-center" style={{padding: '10px'}}>
                                <h2>Selecciona un Pokemon</h2>
                            </Card.Title>
                            <Card.Text style={{paddingBottom: '10px'}}>
                            <img src="https://cdn.pixabay.com/photo/2016/08/15/00/50/pokeball-1594373_1280.png" alt='pokeball' width="180px"  height="202px"></img>
                            <Form.Select aria-label="Default select example" onChange={handleChange} >
                            <option>Pokemones</option>
                            {pokemons.map((name, index) => (
                            <option key={index} value={name}>{name[0].toUpperCase()+name.slice(1)}</option>
                            ))}                        
                            </Form.Select>
                            </Card.Text>
                            <Button className="justify-content-center" 
                                    variant="danger"
                                    onClick={searchPokemon()} >
                                Ver Detalle
                            </Button>
                        </Card.Body>
                    </Card>   
                </Col>                
            </Container>                          
        </>
    );
}

export default Pokemones;

