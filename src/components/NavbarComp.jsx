import React, { Component } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import CentrosCuadrados from './CentrosCuadrados';
import CongruencialLinealCombinado from './CongruencialLinealCombinado';
import Multiplicativo from './Multiplicativo';
import Congruencial from './Congruencial';
import CongruencialMixto from './CongruencialMixto';

export default class NavbarComp extends Component {
  render() {
    return (
        <Router>
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand >
                Generador de Números Aleatorios
                </Navbar.Brand>
                </Container>
            </Navbar>

            <Nav bg="dark" fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link as={Link} to={"/centros-cuadrados"}>Centros Cuadrados</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={"/congruencial"}>Congruencial</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={"/congruencial-mixto"}>Congruencial Mixto</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={"/multiplicativo"}>Multiplicativo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={"/congruencial-lineal-combinado"}>Congruencial Lineal Combinado</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
        <div>
            <Routes>
                <Route path="/centros-cuadrados"  element={<CentrosCuadrados/>}/>    
          
                <Route path="/congruencial" element={<Congruencial/>}> 
                    
                </Route>
                <Route path="/congruencial-mixto" element={<CongruencialMixto/>} > 
                    
                </Route>
                <Route path="/multiplicativo" element={<Multiplicativo/>}> 
                    
                </Route>
                <Route path="/congruencial-lineal-combinado" element={<CongruencialLinealCombinado/>}> 
                    
                </Route>
            </Routes>
        </div>
        </Router>

    )
  }
}
