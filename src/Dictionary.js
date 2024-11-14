import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultKeyword);
  const [definition, setDefinition] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data.meanings[0].definition);
    setDefinition(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = `dd83fab04t350832b43f1o8b985e5044`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="shadow">
          <h3 className="text-center">
            What word would you like to search for?
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="search"
              autoFocus={true}
              onChange={handleWordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
        </section>
        <Results definition={definition} />
      </div>
    );
  } else {
    load();
    return "Searching...";
  }
}
