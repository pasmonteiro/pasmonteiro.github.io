import { BsLinkedin } from "react-icons/bs";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.png" className="App-logo" alt="logo" />
        <p>
          Pedro Monteiro | Software Developer
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/pasmonteiro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin size="4em" />
        </a>
      </header>
    </div>
  );
}

export default App;
