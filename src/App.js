import logo from './logo.svg';
import './App.css';
import { MyFirstState } from './components/MyFirstState';
import { ExerciseComponent } from './components/ExerciseComponent';


function App() {

  const date = new Date();
  const yearNow = date.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>The react state</h1>
        <MyFirstState />

        <ExerciseComponent year={yearNow} />
      </header>
    </div>
  );
}

export default App;
