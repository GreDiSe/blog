import React from 'react';
import SelectedPost from './SelectedPost'

export default class PostContainer extends React.Component{
    render(){
        return(
            <div>
                <h1>УХАДИ</h1>
                <SelectedPost
                    // title={this.props.title}
                    // img={this.props.img}
                    // description={this.props.description}
                    // date={this.props.date}
                />
            </div>
        )
    }
}
