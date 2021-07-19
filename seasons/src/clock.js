import React from   'react';

class Clock extends React.Component {
    state = {time: new Date().toLocaleTimeString()}
    componentDidMount() {
        setInterval(()=>{
            this.time = new Date().toLocaleTimeString();
            return this.setState({
                time: this.time
            })
        }, 1000)
    }

    render() {
        return (
            <div className="time">
                The time is: {this.state.time}
            </div>
        )
    }
}

export default Clock;