

import React from "react";
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            server_id: ''
        };

    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // Change code above this line
    }

    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleClick (value) {
        this.setState({
            tes: value.target.value
        })
        
      };

    render() {
        return (
            <div>
                <div className="form">
                    <input type="text" value={this.state.user_id} name="user_id"  onChange={this.handleChange} autoComplete="off" required />
                    <label htmlFor="text" className="label-name">
                        <span className="content-name">
                            User ID
                        </span>
                    </label>
                </div>
                <div className="form">
                    <input type="text" value={this.state.server_id}  name="server_id"  onChange={this.handleChange}  autoComplete="off" required />
                    <label htmlFor="text" className="label-name">
                        <span className="content-name">
                            Server ID
                        </span>
                    </label>
                </div>
                <div className="container">
                    <button className="btn btn1">Hover Me</button>
                    <button className="btn btn2">Hover Me</button>
                    <button className="btn btn3">Hover Me</button>
                    <button className="btn btn4">Hover Me</button>
                </div>
                <p>{this.state.tes}</p>

                <button value="123" onClick={this.handleClick}>Speak</button>

                <h1>USER ID: {this.state.user_id}</h1>
                <h1>SERVER ID: {this.state.server_id}</h1>
                <h4>Controlled Input:</h4>
                <p>{this.state.server_id}</p>
                <a href={'https://api.whatsapp.com/send?phone=62895330035795&text=User%20ID%3A%20' + this.state.user_id +'%0D%0AServer%20ID%3A%20' + this.state.server_id}>Hallo</a>
            </div>

        );

    }
}

export default App