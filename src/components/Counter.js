import {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
    }

    componentDidMount() {
        console.log('MOUNTED!');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('SHOULD Component update Executed!');

        return nextState.count !== this.state.count
    }

    componentDidUpdate() {
        console.log('COUNTER UPDATED');
    }

    componentWillUnmount() {
        console.log('Counter will UNMOUNT!!!!');
    }

    decrement = () => this.setState({count: this.state.count - 1});

    reset = () => this.setState({count: 0});

    increment = () => this.setState({count: this.state.count + 1});

    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>

                <button onClick={this.decrement}>Decrement -</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.increment}>Increment +</button>
            </div>
        )
    }
}

export default Counter;
