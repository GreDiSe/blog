import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import React from 'react';

const BUTTON_STYLE = {
    float: 'right',
    position: 'relative',
    height: '35px',
    lineHeight: '35px',
    width: '106px'
};

const LINK_STYLE = {
    textDecoration: 'none',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    color: 'white'
};

export default class LinkButton extends React.Component{
    render(){
        return(

            <Button
                bsStyle={this.props.bsStyle}
                style={BUTTON_STYLE}
            >

                <Link
                    to={this.props.linkTo}
                    style={LINK_STYLE}
                >

                    {this.props.buttonName}

                </Link>

            </Button>
        )
    }
}