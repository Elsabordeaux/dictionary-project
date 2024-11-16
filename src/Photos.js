import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4">
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={photo.photographer}
                >
                  <img
                    src={photo.src.landscape}
                    key={index}
                    className="img-fluid mb-3 rounded"
                    alt={photo.alt}
                  />{" "}
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
