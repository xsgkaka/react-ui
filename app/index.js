/**
 * Created by xsg on 2016/8/29.
 */
"use strict"
import React, {Component} from "react"
import {render} from "react-dom"
import SideMenu from "./components/SideMenu"

class MainContainer extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <SideMenu></SideMenu>
        )
    }
}



render(
    <MainContainer />, document.getElementById("root")
)

