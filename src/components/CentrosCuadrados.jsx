import React, { Component  } from "react";
import  { useState  } from "react";
import {
  InputGroup,
  FormControl,
  Container,
  Col,
  Row,
  Table,
  Button
} from "react-bootstrap";

export default class CentrosCuadrados extends Component {
    
  calculaCentrosCuadrados() {
    let seed = 3708;
    const numRandoms = 7;
    let results = [];
    let n = 0;

    for (let i = 0; i < numRandoms; i++) {
      let squareSeed = seed * seed;
      if (String(squareSeed).length < 8) {
        while (String(squareSeed).length < 8) {
             squareSeed = "" + 0 + squareSeed;
        }
      }
      const splitSeed = parseInt(String(squareSeed).substr(2, 4));
      const ri = splitSeed / 10000;
      results.push([i, seed, squareSeed, splitSeed, ri]);
      seed = splitSeed;
      
    }
    console.log(results);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Centros Cuadrados</h1>
        </div>

        <div>
          <Container>
            <Row>
              <Col>
                <InputGroup className="col-mb-8">
                  <InputGroup.Text id="basic-addon1">Semilla*</InputGroup.Text>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <InputGroup className="col-mb-8">
                  <InputGroup.Text id="basic-addon1">
                    Num. de randoms
                  </InputGroup.Text>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <Button
                  onClick={this.calculaCentrosCuadrados}
                  variant="primary"
                >
                  Primary
                </Button>{" "}
              </Col>
              <Col xs={8}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>n</th>
                      <th>Semilla</th>
                      <th>Generador</th>
                      <th>No. Aleatorio</th>
                      <th>Ri</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
