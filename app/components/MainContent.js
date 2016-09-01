/**
 * Created by xsg on 2016/8/30.
 */
"use strict"
import "./MainContent.css"

import React, {Component} from "react"
import MyBacklogs from "./MyBacklogs"

class MainContent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id="MainContent">
                <div className="MainContentHeader">
                    <span className="MainContentHeader-title">My Workbench</span>
                </div>
                <div className="MainContent-main">
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-1-2" style={{padding:10}}>
                            <MyBacklogs title="待完成"/>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-2" style={{padding:10}}>
                            <MyBacklogs title="我的日程"/>
                        </div>
                    </div>
                </div>
                <div className="MainContent-main">
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-1-2" style={{padding:10}}>
                            <MyBacklogs title="已完成"/>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-2" style={{padding:10}}>
                            <MyBacklogs title="已过期"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export  default  MainContent