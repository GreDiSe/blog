import React from 'react';
import { connect } from 'react-redux'
import { Grid, Row, Image, Col, Button, ButtonGroup } from 'react-bootstrap';
import  LinkButton from '../../Components/LinkButton';
import { removePost } from "../../action/postAction";


const DESCRIPTION = {
    margin: '0 0 10px 0',
    height: '122px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
};

class SelectedPost extends React.Component{
    render(){
        const {title, img, date, description } = this.props.state[this.props.id];
        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col lgOffset={1} lg={9}>
                            <h3 style={{textAlign: 'center'}}>{title}</h3>
                            <Image src={img} thumbnail />
                            <h5 style={DESCRIPTION}>{description}</h5>

                            <ButtonGroup style={{float: 'right'}}>
                                <Button
                                    bsStyle='danger'
                                    style={{
                                        height: '35px',
                                        width: '90px'
                                    }}
                                    onClick={() => {
                                        this.props.removePost(this.props.id)
                                        this.props.push('/')
                                    }}
                                >
                                    Удалить
                                </Button>
                                <LinkButton
                                    buttonName={"Редактировать"}
                                    linkTo={`/edit/${this.props.id}`}
                                    bsStyle={'warning'}
                                />

                            </ButtonGroup>

                            <h4 style={{float: 'left', margin: '10px'}}>{date}</h4>

                        </Col>
                    </Row>
                    <hr/>
                </Grid>
            </div>
        )
    }
}
export default connect(
    store => ({
        state: store.posts
    }),
    dispatch => ({
        removePost: index => dispatch(removePost(index))
    })
)
(SelectedPost)