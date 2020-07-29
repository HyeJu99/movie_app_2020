import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor");
    }

    state = {
        count: 0,
    };
    add = () => {
        console.log("add");
        this.setState((current) => ({ count: current.count + 1 }));
    };
    minus = () => {
        console.log("minus");
        this.setState((current) => ({ count: current.count - 1 }));
    };

    componentDidMount() {
        console.log("component Mount");
    }
    componentDidUpdate() {
        console.log("component Update");
    }
    componentWillUnmount() {
        console.log("component Unmount");
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1>This number is: {this.state.count}😊</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>minus</button>
            </div>
        );
    }
}

export default App;
