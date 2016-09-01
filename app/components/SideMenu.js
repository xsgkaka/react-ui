/**
 * Created by xsg on 2016/8/30.
 * 界面侧边栏
 */
"use strict"

import "./SideMenu.css"

import React, {Component} from "react"
import MainContent from "./MainContent"

class SideMenu extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id="layout">
                <a href="#menu" id="menuLink" className="menu-link">
                    <span></span>
                </a>
                <div id="menu">
                    <div className="pure-menu pure-menu-open">
                        <a className="pure-menu-heading" href="#">react-pure-ui</a>
                        <ul>
                            <Item itemName={"我的工作台"} isActived={true}/>
                            <Item itemName={"待办事项"} isActived={false}/>
                            <Item itemName={"信息维护"} isActived={false}/>
                        </ul>
                    </div>
                </div>
                <div id="main">
                    <MainContent/>
                </div>
            </div>
        )
    }
}

class Item extends Component{
    constructor(props){
        super(props)

    }
    render(){
        const {itemName, isActived} = this.props
        return (
            <li className={isActived?"menu-item-divided pure-menu-selected":"pure-menu-item"} ><a href="#">{itemName}</a></li>
        )
    }
}

Item.defaultProps = {
    itemName:"",
    isActived:false
}
Item.propTypes = {
    itemName:React.PropTypes.string.isRequired,
    isActived:React.PropTypes.bool.isRequired
}

export  default SideMenu



