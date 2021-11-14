import {Component} from 'react';

class Users extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.fetchUsers()
    }

    fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(data => this.setState({users: data}))
    }

    render() {
        return (
            <div>
                <h3>Users List</h3>

                {
                    this.state.users.length ?
                    <ul>
                        {
                            this.state.users.map(user => <li key={user.id}>{user.username}</li>)
                        }
                    </ul> :
                    <h1>...Loading</h1>
                }
            </div>
        )
    }
}

export default Users;
