import React from 'react';
import CurrentPost from './CurrentPost';
import { connect } from 'react-redux'
import LinkButton from '../../Components/LinkButton'

class Container extends React.Component{
    render(){
        return (
            <div>
                <div style={{right: '10px', margin: '20px'}}>
                    <LinkButton
                        buttonName={"Добавить"}
                        linkTo={`/add`}
                        bsStyle={'danger'}
                    />
                </div>

                {
                    this.props.state.map((cur, index) => {
                        return (
                            <CurrentPost
                                key={index}
                                title={cur.title}
                                img={cur.img}
                                description={cur.description}
                                date={cur.date}
                                index={index}
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