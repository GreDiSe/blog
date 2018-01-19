import React from 'react';
import CurrentPost from './CurrentPost';
import initialState from '../../store/initialState';
import { Provider } from 'react-redux';
import store from '../../store/configurateState'

class Container extends React.Component{
    render(){
        return (
            <Provider store={store}>
                {initialState.map(cur => {
                    return (
                        <CurrentPost
                            title={cur.title}
                            img={cur.img}
                            description={cur.description}
                            date={cur.date}
                        />
                    )
                })}
            </Provider>
        )
    }
}
export default Container;