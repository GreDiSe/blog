import React from 'react';
import SelectedPost from './SelectedPost'
import { connect } from 'react-redux'

class PostContainer extends React.Component{
    render(){
        return(
            <SelectedPost
                id={this.props.id}
                push={this.props.push}
            />
        )
    }
}
export default connect(
    (state, ownProps) => ({
        push: ownProps.history.push,
        id: ownProps.match.params.id
    })
)
(PostContainer)