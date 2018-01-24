import React from 'react';
import { connect } from 'react-redux'
import EditPost from './EditPost'

class EditContainer extends React.Component{
    render(){
        return(
            <EditPost
                id={this.props.id}
                push={this.props.push}
            />
        )
    }
}
export default connect(
    (store, ownProps) => ({
        push: ownProps.history.push,
        id: ownProps.match.params.id
    })
)(EditContainer)