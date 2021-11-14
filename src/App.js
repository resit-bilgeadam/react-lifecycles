import {useState} from 'react';
import Counter from './components/Counter';
import Users from './components/Users';
import FunctionalCounter from './components/FunctionalCounter';
import FunctionalUsers from './components/FunctionalUsers';

function App() {
  const [showCounter, setShowCounter] = useState(true);

  const toggleCounter = () => setShowCounter(showCounter ? false : true)


  return (
    <div className='container'>
      <h1>React Lifecycles</h1>

      <button onClick={toggleCounter}>Toggle Counter</button>

      <hr />

      <Users />

      <hr />

      <FunctionalUsers />

      <hr />

      {
        showCounter ? <FunctionalCounter/> : null
      }

      <hr/>

      {
        showCounter ? <Counter /> : null
      }
    </div>
  );
}

export default App;
