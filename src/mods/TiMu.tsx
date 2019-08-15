import React from 'react';
import {Button, Radio} from 'antd';
import 'antd/dist/antd.css';
import {des} from './describe';
import './css/timu.css';
import _ from 'lodash';
import Result from './Result';

export default class TiMu extends React.Component {
    state = {
        arr: des,
        curPage:'TiMu',
    };
    changeValue = (e: any, describeId: any) => {
        const arr = [...this.state.arr];
        // const newArr = arr.map(a => {
        //     if (a.id === describeId) {
        //         a.value = e.target.value;
        //     }
        //     return a;
        // });
        //测试状态
        const newArr=arr.map(a=>{
            a.value=3;
            return a;
        });
        this.setState({
            arr: newArr,
        });
    };

    onCheckFinish(){
        if(_.find(this.state.arr,{value:0})!==undefined)
        {
            alert("还有题目未完成");
            return false;
        }
        return true;
    }
    onFinishClick(){
        if(this.onCheckFinish()) {
            this.setState({
               curPage:"Result",
            });
        }
        return;
    }
    render() {
        const {arr} = this.state;
        // console.log(arr);
        return (
            this.state.curPage==="TiMu"?(
            <div className="testPage">
                {
                    arr.map((describes) => (
                        <div>
                            <div>{describes.id}:{describes.describtion}</div>
                            <Radio.Group onChange={(e) => this.changeValue(e, describes.id)}>
                                <Radio value={1}>1</Radio>
                                <Radio value={2}>2</Radio>
                                <Radio value={3}>3</Radio>
                                <Radio value={4}>4</Radio>
                                <Radio value={5}>5</Radio>
                            </Radio.Group>
                        </div>
                    ))
                }
                <Button
                    type={"danger"}
                    onClick={this.onFinishClick.bind(this)}
                >
                    完成测试
                </Button>
            </div>
            ):(
                <Result
                    arr={this.state.arr}
                />
            )
        );
    }
}
