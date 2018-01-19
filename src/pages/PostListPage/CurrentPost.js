import React from 'react';
import { Grid, Row, Image, Col, Button, ButtonGroup } from 'react-bootstrap'

const btn = {
    width: '200px',
    float: 'right'
};

class CurrentPost extends React.Component{

    render(){
        return (
            <Grid>
                <Row className="show-grid">
                    <Col lgOffset={3} lg={6}>
                        <h3 style={{textAlign: 'center'}}>{this.props.title}</h3>
                        <Image src={this.props.img} thumbnail />
                        <h5 style={{margin: '17px 0'}}>{this.props.description}</h5>

                        <ButtonGroup style={{float: 'right'}}>
                            <Button
                                className={'btn'}
                                bsStyle="danger"
                            >
                                Удалить
                            </Button>

                            <Button
                                className={'btn'}
                                bsStyle="warning"
                            >
                                Редактировать
                            </Button>



                            <Button
                                className={'btn'}
                                bsStyle="success"
                            >
                                Подробнее
                            </Button>

                        </ButtonGroup>

                        <h4 style={{float: 'left', margin: 0}}>{this.props.date}</h4>

                    </Col>
                </Row>
                <hr/>
            </Grid>
        )
    }
}
export default CurrentPost