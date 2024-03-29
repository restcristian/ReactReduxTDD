import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
    
    render() {
        const {title, desc} = this.props;
        if(!title){
            return null;
        }
        return (
            <div data-test= "listitem-component">
                <h2 data-test = "component-title">{title}</h2>
                <div data-test = "component-desc">{desc}</div>
            </div>
        );
    }
}

ListItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
};

export default ListItem;