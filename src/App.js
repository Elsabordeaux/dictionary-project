import "./App.css";
import logo from "./dictionary-icon-8.jpg";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="logo img-fluid" alt="dictionary-logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Elsabordeaux"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alana Jackson
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Elsabordeaux/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://alanas-dictionary-project.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
