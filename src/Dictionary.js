import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    console.log(response.data.meanings[0].definition);
    setDefinition(response.data);
  }

  function search(event) {
    event.preventDefault();

    const apiKey = `dd83fab04t350832b43f1o8b985e5044`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleWordChange} />
        <input type="submit" />
      </form>
      <Results definition={definition} />
    </div>
  );
}
