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
                {
                    this.state.visible?(
                        <Start
                            onShow={this.state.visible}
                            onClose={()=>this.setState({visible:false})}
                        />
                        ):(
                        <div>
                            <div style={{textAlign:"center",fontSize:"30px"}}>评测题目</div>
                            <TiMu />
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;
