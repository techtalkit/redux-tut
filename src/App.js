import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
      <User data={{name:'anil',age:34}} />
    </div>
  );
}

export default App;
