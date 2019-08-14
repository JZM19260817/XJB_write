import React from 'react';
import {Button, Radio} from 'antd';
import 'antd/dist/antd.css';
import {des} from './describe';
import './css/timu.css';

export default class TiMu extends React.Component {
    state = {
        arr: des,
    };
    changeValue = (e: any, describeId: any) => {
        const arr = [...this.state.arr];
        const newArr = arr.map(a => {
            if (a.id === describeId) {
                a.value = e.target.value;
            }
            return a;
        });
        this.setState({
            arr: newArr,
        });
    };

    render() {
        const {arr} = this.state;
        console.log(arr);
        return (
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
                <Button type={"danger"}>完成测试</Button>
            </div>
        );
    }
}
