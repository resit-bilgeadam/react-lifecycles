import {useState, useEffect} from 'react';

function FunctionalUsers() {
    const [users, setUsers] = useState([]);
    const [showText, setShowText] = useState(false)

    const fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    const toggleText = () => setShowText(showText ? false : true)

    useEffect(() => {
        fetchUsers()
    }, [showText])

    return (
        <div>
            <h1>Functional Users</h1>

            <ul>
                {
                    users.map(user => <li key={user.id}>{user.name}</li>)
                }
            </ul>

            <button onClick={toggleText}>Toggle Text</button>

            {
                showText ? <p>Show/Hide this text</p> : null
            }
        </div>
    )
}

export default FunctionalUsers;
