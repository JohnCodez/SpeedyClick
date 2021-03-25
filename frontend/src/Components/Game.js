import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import "../stylesheets/Game.css"

export default class Game extends Component {

    state = {
        boxes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    render() {
        return (
            <div className="game">
                <Container className="grid">
                <Row>
                    <Col sm={4}>1</Col>
                    <Col sm={4}>2</Col>
                    <Col sm={4}>3</Col>
                    <Col sm={4}>4</Col>
                </Row>
                <Row>
                    <Col sm={4}>5</Col>
                    <Col sm={4}>6</Col>
                    <Col sm={4}>7</Col>
                    <Col sm={4}>8</Col>
                </Row>
                <Row>
                    <Col sm={4}>9</Col>
                    <Col sm={4}>10</Col>
                    <Col sm={4}>11</Col>
                    <Col sm={4}>12</Col>
                </Row>
                <Row>
                    <Col sm={4}>13</Col>
                    <Col sm={4}>14</Col>
                    <Col sm={4}>15</Col>
                    <Col sm={4}>16</Col>
                </Row>
                
                </Container>
            </div>
        )
    }
}
