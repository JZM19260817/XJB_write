// @ts-ignore
import React from 'react';
import './App.css';
import Start from  './mods/start';
import 'antd/dist/antd.css';
import TiMu from './mods/TiMu'

class App extends React.Component {
    state={
        visible:true,
    };

    render() {
        return (
            <div>
                <script>window.parent.postMessage(object,'*');</script>
                {
                    this.state.visible?(
                        <Start
                            onShow={this.state.visible}
                            onClose={()=>this.setState({visible:false})}
                        />
                        ):(
                        <div>
                            <div style={{textAlign:"center",fontSize:"40px",color:"red"}}>症状自评量表SCL-90</div>
                            <div style={{textAlign:"center",fontSize:"16px"}}>1,2,3,4,5分别代表没有、很轻、中等、偏重、严重</div>
                            <TiMu />
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;
