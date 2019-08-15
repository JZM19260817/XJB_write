import React from 'react';
import {Button,Card} from 'antd';
import _ from 'lodash';
type props={
    arr:any,
}
export default class Result extends React.Component<props>{
    state={
        resArr:this.props.arr,
    };
    results(num:number){
        if(1<=num&&num<=1.5)
            return "该项指标状态良好";
        else if(1.5<num&&num<=2.5)
            return "该项指标有轻微症状";
        else if(2.5<num&&num<=3.5)
            return "该项指标需要关注";
        else if(3.5<num&&num<=4.5)
            return "该项指标较为严重";
        else
            return "该项指标非常严重";
    }
    bodyCheck(){
        let tmp=0;
        let bodyArr=[1,4,12,27,40,42,48,49,52,53,56];
        for(let i=0;i<bodyArr.length;i++) {
            let body=_.find(this.state.resArr,{id:bodyArr[i]});
            tmp+=body.value;
        }
        tmp=tmp/11;
        return this.results(tmp);
    }
    qiangpoCheck(){
        let tmp=0;
        let bodyArr=[3,9,10,28,38,45,46,51,55,65];
        for(let i=0;i<bodyArr.length;i++) {
            let body=_.find(this.state.resArr,{id:bodyArr[i]});
            tmp+=body.value;
        }
        tmp=tmp/10;
        return this.results(tmp);
    }
    renjiCheck(){
        let tmp=0;
        let bodyArr=[6,21,34,36,37,41,61,69,73];
        for(let i=0;i<bodyArr.length;i++) {
            let body=_.find(this.state.resArr,{id:bodyArr[i]});
            tmp+=body.value;
        }
        tmp=tmp/9;
        return this.results(tmp);
    }
    yiyuCheck(){
        let tmp=0;
        let bodyArr=[5,14,15,20,22,26,29,30,31,32,54,71,79];
        for(let i=0;i<bodyArr.length;i++) {
            let body=_.find(this.state.resArr,{id:bodyArr[i]});
            tmp+=body.value;
        }
        tmp=tmp/13;
        return this.results(tmp);
    }
    diduiCheck(){
        let tmp=0;
        let bodyArr=[11,24,63,67,74,81];
        for(let i=0;i<bodyArr.length;i++) {
            let body=_.find(this.state.resArr,{id:bodyArr[i]});
            tmp+=body.value;
        }
        tmp=tmp/6;
        return this.results(tmp);
    }
    jiaoluCheck(){
        let tmp=0;
        let bodyArr=[2,17,23,33,39,57,72,78,80,86];
        for(let i=0;i<bodyArr.length;i++) {
            let body=_.find(this.state.resArr,{id:bodyArr[i]});
            tmp+=body.value;
        }
        tmp=tmp/10;
        return this.results(tmp);
    }
    horCheck(){
        let tmp=0;
        let bodyArr=[13,25,47,50,70,75,82];
        for(let i=0;i<bodyArr.length;i++) {
            let body=_.find(this.state.resArr,{id:bodyArr[i]});
            tmp+=body.value;
        }
        tmp=tmp/7;
        return this.results(tmp);
    }
    pzCheck(){
        let tmp=0;
        let bodyArr=[8,18,43,68,76,83];
        for(let i=0;i<bodyArr.length;i++) {
            let body=_.find(this.state.resArr,{id:bodyArr[i]});
            tmp+=body.value;
        }
        tmp=tmp/6;
        return this.results(tmp);
    }
    jsCheck(){
        let tmp=0;
        let bodyArr=[7,16,35,62,77,84,85,87,88,90];
        for(let i=0;i<bodyArr.length;i++) {
            let body=_.find(this.state.resArr,{id:bodyArr[i]});
            tmp+=body.value;
        }
        tmp=tmp/10;
        return this.results(tmp);
    }
    elseCheck(){
        let tmp=0;
        let bodyArr=[19,44,59,60,64,66,89];
        for(let i=0;i<bodyArr.length;i++) {
            let body=_.find(this.state.resArr,{id:bodyArr[i]});
            tmp+=body.value;
        }
        tmp=tmp/7;
        return this.results(tmp);
    }
    render(){
        return(
            <div>
                <div>评测结果</div>
                <div id={'qt'}>躯体化评测结果:{this.bodyCheck()}</div>
                <div id={'qp'}>强迫症状评测结果:{this.qiangpoCheck()}</div>
                <div id={'rj'}>人际关系评测结果:{this.renjiCheck()}</div>
                <div id={'yy'}>抑郁评测结果:{this.yiyuCheck()}</div>
                <div id={'jl'}>焦虑评测结果:{this.jiaoluCheck()}</div>
                <div id={'dd'}>敌对评测结果:{this.diduiCheck()}</div>
                <div id={'kb'}>恐怖评测结果:{this.horCheck()}</div>
                <div id={'pz'}>偏执评测结果:{this.pzCheck()}</div>
                <div id={'js'}>精神病性评测结果:{this.jsCheck()}</div>
                <div id={'else'}>睡眠质量及饮食状况:{this.elseCheck()}</div>
                {/*<Button type="danger">确认</Button>*/}
                {/*<div>单击确认保存结果</div>*/}
            </div>
        );
    };
}
