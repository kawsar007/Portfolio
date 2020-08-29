import React from 'react';
import './skills.css';
import Navbar from '../Header';
import { Progress } from 'reactstrap';
import { Row, Col } from 'reactstrap';

export default function Skills() {
    return (
        <>
            <Navbar/>
           
        <div className="container">
        <Row>
            
            <Col sm="12">
            <h2 className="header">Skills</h2>
                    <div className="text-left">HTML</div>
                    <Progress className="progress" value={80} />
                    <div className="text-left">CSS</div>
                    <Progress value={60} />
                    <div className="text-left">JavaScript</div>
                    <Progress value={70} />
                    <div className="text-left">React</div>
                    <Progress value={75} />
                    <div className="text-left">Node Js</div>
                    <Progress value={35} />   
                    <div className="text-left">Material Ui</div>
                    <Progress value={50} /> 
                    <div className="text-left">Redux</div>
                    <Progress value={70} /> 
            </Col>
        </Row>
        </div>
        </>
    )
}
