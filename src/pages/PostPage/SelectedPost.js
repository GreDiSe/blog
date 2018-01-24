import React from 'react';
import { Grid, Row, Image, Col, Button, ButtonGroup } from 'react-bootstrap';


const description = {
    margin: '0 0 10px 0',
    height: '122px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
};

export default class SelectedPost extends React.Component{
    render(){
        return(
            <div>
                <h1>Here</h1>
                {/*<Grid>*/}
                    {/*<Row className="show-grid">*/}
                        {/*<Col lgOffset={1} lg={9}>*/}
                            {/*<h3 style={{textAlign: 'center'}}>{this.props.title}</h3>*/}
                            {/*<Image src={this.props.img} thumbnail />*/}
                            {/*<h5 style={description}>{this.props.description}</h5>*/}

                            {/*<ButtonGroup style={{float: 'right'}}>*/}
                                {/*<Button*/}
                                    {/*bsStyle="warning"*/}

                                {/*>*/}
                                    {/*Редактировать*/}
                                {/*</Button>*/}
                                {/*<Button*/}
                                    {/*bsStyle='danger'*/}
                                {/*>*/}
                                    {/*Удалить*/}
                                {/*</Button>*/}
                            {/*</ButtonGroup>*/}

                            {/*<h4 style={{float: 'left', margin: '10px'}}>{this.props.date}</h4>*/}

                        {/*</Col>*/}
                    {/*</Row>*/}
                    {/*<hr/>*/}
                {/*</Grid>*/}
            </div>
        )
    }
}