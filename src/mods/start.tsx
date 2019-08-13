// @ts-ignore
import React from 'react';
import '../App.css';
import {Button} from 'antd';
import 'antd/dist/antd.css';
type props={
    onShow:boolean,
    onClose:()=>void,
};
export default class Start extends React.Component<props> {

    render() {
        const { onShow } = this.props;
        if (onShow) {
            return (
                <div className="App">
                    <div className="Text">
                        <div className="Title">
                            心理状态评测
                        </div>
                        <div className="describe">
                            <p>接下来我们要进行心理测评。</p>
                            <p>它的每一个项目均采取1～5级评分，具体说明如下：</p>
                            <p>没有：自觉并无该项问题（症状）</p>
                            <p>很轻：自觉有该问题，但发生得并不频繁、严重</p>
                            <p>中等：自觉有该项症状，其严重程度为轻到中度</p>
                            <p>偏重：自觉常有该项症状，其程度为中到严重</p>
                            <p>严重：自觉该症状的频度和强度都十分严重</p>
                            <p>作为自评量表，这里的“轻、中、重”的具体涵义应该由自评者自己去体会，不必做硬性规定</p>
                        </div>
                        <Button
                            type="danger"
                            onClick={this.props.onClose}
                        >
                            开始评测
                        </Button>
                    </div>
                </div>
            );
        }
        return null;
    }
}
