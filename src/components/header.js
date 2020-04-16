// jshint esversion:9 
import React,{ Component }from 'react';
import '../css/styles.css';
// import ReactDOM from 'react-dom';  


class Header extends Component {

    state = {
        keywords:'hello'
    }

    inputChangeHandler = (event) => {
        // console.log(event.target.value);
        this.setState({
            keywords: event.target.value
        });
    }


    render() {
        console.log(this.state.keywords);
        return (
            <header>
                <div className="logo">Logo</div>
                <input type="text" onChange={this.inputChangeHandler}/>
            </header>
        )
    }
};

export default Header;

