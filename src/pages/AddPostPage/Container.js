import React from 'react';
import { connect } from 'react-redux';
import AddPost from './AddPost';

class AddContainer extends React.Component{
    render(){
        return(
            <AddPost
                push={this.props.push}
            />
        )
    }
}
export default connect(
    (store, ownProps) => ({
        push: ownProps.history.push
    })
)(AddContainer)