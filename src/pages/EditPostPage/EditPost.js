import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { editPost } from "../../action/postAction";

class EditPost extends React.Component{
    constructor(props){
        super();
        this.state = {
            title: props.posts[props.id].title,
            img: props.posts[props.id].img,
            description: props.posts[props.id].description,
            date: props.posts[props.id].date
        };
    }
    validateLine = () => {
        const {title, img, description, date} = this.state;
        if(!title || !img || !description || !date){
            alert('Error');
        } else {
            this.props.editPost(this.state, this.props.id);
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
                <ControlLabel style={{textAlign: 'center', fontSize: '40px'}}>{`Edit post: '${this.state.title}'`}</ControlLabel>
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
    store => ({
        posts: store.posts
    }),
    dispatch => ({
        editPost: (index, post) => dispatch(editPost(index, post))
    })
)(EditPost)