import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookDetails extends Component{
    render() {
        if(!this.props.active_book) {
            return (<div>Select a book from the list</div>)
        }
        return(<div>
            <h3>Details for:</h3>
            <div>{this.props.active_book.title}</div>
        </div>);
    }
}

function mapStateToProps(state){
    return {
        active_book:state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetails);