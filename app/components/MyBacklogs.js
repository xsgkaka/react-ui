/**
 * Created by xsg on 2016/8/31.
 * 我的待办
 */
"use strict"

import React, {Component} from "react"
import "./MyBacklogs.css"
class MyBacklogs extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:this.props.title
        }

    }
    render(){
        return(
            <div className="workbench-panel">
                <div className="workbench-panel-header">
                    <span>{this.state.title}</span>
                </div>
                <table className="pure-table pure-table-horizontal workbench-panel-table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>标题</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <BacklogItem num={1} title={"这是一条待办"}/>
                    <BacklogItem num={2} title={"这是一条待办"}/>
                    <BacklogItem num={3} title={"这是一条待办"}/>
                    <BacklogItem num={4} title={"这是一条待办"}/>
                    <BacklogItem num={5} title={"这是一条待办"}/>
                    </tbody>
                </table>
                <div className="pageToolContainer">
                    <a className="pure-button" href="#">«</a>
                    <a className="pure-button" href="#">2</a>
                    <a className="pure-button" href="#">3</a>
                    <a className="pure-button" href="#">4</a>
                    <a className="button-secondary pure-button" href="#">5</a>
                    <a className="pure-button" href="#">»</a>
                </div>
            </div>
        )
    }
}

class BacklogItem extends Component{
    constructor(props){
        super(props)

    }
    render(){

        return (
            <tr>
                <td>{this.props.num}</td>
                <td>{this.props.title}</td>
                <td><a className="pure-button pure-button-primary">处理</a></td>
            </tr>
        )
    }
}
BacklogItem.propTypes = {
    num:React.PropTypes.number.isRequired,
    title:React.PropTypes.string.isRequired
}
export  default  MyBacklogs

