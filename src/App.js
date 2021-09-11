import React from "react";
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            server_id: '',
            price: '',
            name: ''
        };

    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // Change code above this line
    }

    handleChange (event) {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    sayName(name, price){
        this.setState({
            name: name,
            price: price
        })

    }

    // handleClick (value) {
    //     console.log(value.target)
    //     this.setState({
    //         price: value.target.value
    //     })
    // }

    //   https://codepen.io/annandl_/pen/YzQVKjV

    render() {
        
        return (
            <div className="body">                
                <h1 className="text">Scylla Store</h1>
                <form className="form">
                    <p className="field required">
                        <label className="label required" htmlFor="name">USER ID</label>
                        <input className="text-input" type="text" id="user_id" value={this.state.user_id} name="user_id"  onChange={this.handleChange} placeholder="USER ID" required/>
                    </p>

                    <p className="field required">
                        <label className="label required" htmlFor="name">SERVER ID</label>
                        <input className="text-input" type="text" id="server_id" value={this.state.server_id} name="server_id"  onChange={this.handleChange} placeholder="SERVER ID" required/>
                    </p>

                    {/* <div className="field">
                        <label className="label">Sport?</label>
                        <ul className="checkboxes">
                        <li className="checkbox">
                            <input className="checkbox-input" id="choice-0" name="choice" type="checkbox" defaultValue={0} />
                            <label className="checkbox-label" htmlFor="choice-0">Football</label>
                        </li>
                        <li className="checkbox">
                            <input className="checkbox-input" id="choice-1" name="choice" type="checkbox" defaultValue={1} />
                            <label className="checkbox-label" htmlFor="choice-1">Basketball</label>
                        </li>
                        <li className="checkbox">
                            <input className="checkbox-input" id="choice-2" name="choice" type="checkbox" defaultValue={2} />
                            <label className="checkbox-label" htmlFor="choice-2">Volleyball</label>
                        </li>
                        <li className="checkbox">
                            <input className="checkbox-input" id="choice-3" name="choice" type="checkbox" defaultValue={3} />
                            <label className="checkbox-label" htmlFor="choice-3">Golf</label>
                        </li>
                        <li className="checkbox">
                            <input className="checkbox-input" id="choice-4" name="choice" type="checkbox" defaultValue={4} />
                            <label className="checkbox-label" htmlFor="choice-4">Swimming</label>
                        </li>
                        </ul>
                    </div> */}

                    <div className="field">
                        <label className="label">DIAMOND</label>
                        <ul className="options">
                        
                            {/* <li className="option">
                                <input className="option-input" id="option-0" name="option" type="radio" defaultValue={"Rp. 20,000"}  onClick={this.handleClick} onChange={this.handleChange}/>
                                <label className="option-label" htmlFor="option-0" name="tesss">86 Diamond</label>
                            </li> */}
                            <li className="option">
                                <input className="option-input" id="option-0" name="option" type="radio" onClick={(e) => this.sayName("86 Diamond", "Rp. 20,000")}/>
                                <label className="option-label" htmlFor="option-0" name="tesss">86 Diamond</label>
                            </li>
                            <li className="option">
                                <input className="option-input" id="option-1" name="option" type="radio" onClick={() => this.sayName("172 Diamond", "Rp. 38,000")} />
                                <label className="option-label" htmlFor="option-1">172 Diamond</label>
                            </li>
                            <li className="option">
                                <input className="option-input" id="option-2" name="option" type="radio" onClick={() => this.sayName("258 Diamond", "Rp. 57,000")} />
                                <label className="option-label" htmlFor="option-2">258 Diamond</label>
                            </li>
                            <li className="option">
                                <input className="option-input" id="option-3" name="option" type="radio" onClick={() => this.sayName("344 Diamond", "Rp. 78,000")} />
                                <label className="option-label" htmlFor="option-3">344 Diamond</label>
                            </li>
                            <li className="option">
                                <input className="option-input" id="option-4" name="option" type="radio" onClick={() => this.sayName("516 Diamond", "Rp. 115,000")} />
                                <label className="option-label" htmlFor="option-4">516 Diamond</label>
                            </li>
                            <li className="option">
                                <input className="option-input" id="option-5" name="option" type="radio" onClick={() => this.sayName("706 Diamond", "Rp. 155,000")} />
                                <label className="option-label" htmlFor="option-5">706 Diamond</label>
                            </li>
                            <li className="option">
                                <input className="option-input" id="option-6" name="option" type="radio" onClick={() => this.sayName("878 Diamond", "Rp. 188,000")} />
                                <label className="option-label" htmlFor="option-6">878 Diamond</label>
                            </li>
                            <li className="option">
                                <input className="option-input" id="option-7" name="option" type="radio" onClick={() => this.sayName("1050 Diamond", "Rp. 225,000")} />
                                <label className="option-label" htmlFor="option-7">1050 Diamond</label>
                            </li>
                        </ul>
                    </div>
                    <p className="field required half">
                        <label className="label required" htmlFor="name">PRICE DIAMOND</label>
                        <input className="text-input" type="text" id="server_id" value={this.state.price} name="server_id" onChange={this.handleChange} placeholder="Rp. " required disabled/>
                    </p>

                    {/* <p className="field">
                        <label className="label" htmlFor="about">About</label>
                        <textarea className="textarea" cols={50} id="about" name="about" rows={4} defaultValue={""} />
                    </p>
                    <p className="field half">
                        <label className="label" htmlFor="select">Position</label>
                        <select className="select" id="select">
                        <option selected value />
                        <option value="ceo">CEO</option>
                        <option value="front-end">Front-end developer</option>
                        <option value="back-end">Back-end developer</option>
                        </select>
                    </p> */}

                    <p className="field half">
                        <button type="submit" className="button" >
                            <a href={'https://api.whatsapp.com/send?phone=6282110222618&text=User%20ID%3A%20' + this.state.user_id + '%0D%0AServer%20ID%3A%20' + this.state.server_id + '%0D%0ADiamond%3A%20' + this.state.name + '%0D%0APrice%3A%20' + this.state.price + ''} target="_blank">ORDER NOW</a>
                        </button>
                        
                    </p>

                    <h5>*Proses 1 - 20 Menit</h5>
                </form>
            </div>

        );

    }
}

export default App