import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultKeyword);
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data.meanings[0].definition);
    setDefinition(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = `dd83fab04t350832b43f1o8b985e5044`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imageApiKey = `dd83fab04t350832b43f1o8b985e5044`;
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${imageApiKey}`;

    axios.get(imageApiUrl).then(handlePexelsResponse);
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
        <Results definition={definition} photos={photos} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Searching...";
  }
}
