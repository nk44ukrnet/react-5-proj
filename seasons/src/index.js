import React from 'react';
import ReactDOM from 'react-dom';
import SeassonDisplay from "./SeassonDisplay";
import Spinner from "./Spinner";

import Clock from "./clock";

class App extends React.Component {
 /*   constructor(props) {
        super(props);
        //this.state = {lat: null, errorMessage: ''};
    }*/
    state = {lat: null, errorMessage: ''}; //is equivalent above^^
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <SeassonDisplay lat={this.state.lat} />
        }
        return <Spinner message='Allow or deny your location detection...' />
    }

    render() {
        return (
            <div className="border red">
                <Clock />
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);