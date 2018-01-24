import React from 'react';
import { connect } from 'react-redux';
import { createPost } from "../../action/postAction";
import { ControlLabel, FormControl, FormGroup, Button } from 'react-bootstrap'

class AddContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            title: '',
            img: '',
            description: '',
            date: ''
        };
    }
    validateLine = () => {
        const {title, img, description, date} = this.state;
        if(!title || !img || !description || !date){
            alert('Error');
        } else {
            this.props.createPost(this.state);
            this.props.push('/')
        }

    };
    render(){
        return (
            <div style={
                {
                    width: '700px',
                    margin: 'auto'
                }}
            >
                <ControlLabel
                    style={{textAlign: 'center', fontSize: '40px'}}
                >
                    {`Add post: '${this.state.title}'`}
                </ControlLabel>

                <form>
                    <FormGroup
                        controlId="formBasicText"
                    >
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.title}
                            placeholder="Enter text"
                            onChange={value => this.setState({title: value.target.value})}
                        />
                        <ControlLabel>Image url</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.img}
                            placeholder="Enter text"
                            onChange={value => this.setState({img: value.target.value})}
                        />
                        <ControlLabel>Date</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.date}
                            placeholder="Enter text"
                            onChange={value => this.setState({date: value.target.value})}
                        />
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            value={this.state.description}
                            placeholder="Enter text"
                            onChange={value => this.setState({description: value.target.value})}
                            style={{height: '200px'}}
                        />
                    </FormGroup>
                </form>
                <Button
                    bsStyle='success'
                    style={{
                        height: '35px',
                        width: '106px'
                    }}
                    onClick={this.validateLine}
                >
                    Подтвердить
                </Button>
            </div>
        )
    }
}
export default connect(
    store => {},
    dispatch => ({
        createPost: post => dispatch(createPost(post))
    })
)(AddContainer)