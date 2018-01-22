import React from 'react';
import CurrentPost from './CurrentPost';
import { connect } from 'react-redux'

class Container extends React.Component{
    render(){
        return (
            <div>
                {
                    this.props.state.map((cur, index) => {
                        return (
                            <CurrentPost
                                key={index}
                                title={cur.title}
                                img={cur.img}
                                description={cur.description}
                                date={cur.date}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
export default connect(
    state => ({
        state: state.posts
    })
)(Container);