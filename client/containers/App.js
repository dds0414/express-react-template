/**
 * Created by yangbo on 17/1/3.
 */
"use strict";
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {add_number} from '../actions'

class App extends Component{
    render(){
        const {text, onButtonClick} = this.props;
        let input;
        return (
            <div>
                <h1>your input is:{text}</h1>
                <input ref={node => {
                    input = node
                }} type="text"/>
                <button onClick={()=>onButtonClick(input.value.trim())}>click</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProp) => ({
    text : state.reducers
});

const mapDispatchToProps = (dispatch, ownProp) => ({
    onButtonClick(v){
        dispatch(add_number(v))
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(App)