import React from 'react';
import { Grid, Row, Image, Col, Button } from 'react-bootstrap'

const description = {
    margin: '0 0 10px 0',
    height: '122px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
};

const containerImageHeader = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gridGap: '20px'
};

class CurrentPost extends React.Component{

    render(){
        return (
            <Grid>
                <Row className="show-grid">
                    <Col lgOffset={1} lg={9}>
                        <h3 style={{textAlign: 'center'}}>{this.props.title}</h3>
                        <div style={containerImageHeader}>
                            <Image src={this.props.img} thumbnail />
                            <h5 style={description}>{this.props.description}</h5>
                        </div>

                        <Button
                            bsStyle="success"
                            style={{float: 'right'}}
                        >
                            Подробнее
                        </Button>

                        <h4 style={{float: 'left', margin: '10px'}}>{this.props.date}</h4>

                    </Col>
                </Row>
                <hr/>
            </Grid>
        )
    }
}
export default CurrentPost