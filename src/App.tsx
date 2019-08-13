// @ts-ignore
import React from 'react';
import './App.css';
import Start from  './mods/start';
import 'antd/dist/antd.css';

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
                            111111
                    )
                }
            </div>
        );
    }
}

export default App;
