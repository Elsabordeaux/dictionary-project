import "./App.css";
import logo from "./dictionary-icon-8.jpg";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header d-flex justify-content-center">
          <h1 className="title mt-5">DICTION</h1>
          <img src={logo} className="logo" alt="dictionary-logo" />
          <h1 className="title mt-5">RY</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="search" />
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
