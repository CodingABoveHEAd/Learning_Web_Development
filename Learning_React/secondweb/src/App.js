import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';

function App() {
  let name="niloy";
  return (
  <div><Clock locale="bn-BD"/>{name}</div>
  );
}

export default App;
