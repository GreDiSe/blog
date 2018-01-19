import React from 'react';
import CurrentPost from './CurrentPost';
import initialState from '../../store/initialState';
import { connect } from 'react-redux'

class Container extends React.Component{
    render(){
        return (
            <div>
                {
                    initialState.map((cur, index) => {
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
    state => {
        console.log(state);
        return {state: state}
    },
    dispatch => ({

    })
)(Container);