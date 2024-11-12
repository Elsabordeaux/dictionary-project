import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>
        <em>{props.meaning.partOfSpeech}</em>
      </h3>
      <p>{props.meaning.definition}</p>
      <p>
        <Example example={props.meaning.example} />
        <br />

        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
