import React from 'react';
import {Button,Card} from 'antd';
type props={
    arr:any,
}
export default class Result extends React.Component<props>{
    state={
        resArr:this.props.arr,
    };
    render(){
        return(
            <div>
                <div>评测结果</div>
                
            </div>
        );
    };
}
