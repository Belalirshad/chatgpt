import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const Openai = () => {
  const [data, setData] = useState(null);

  function handleButtonClick(buttonClick) {
    let payload;
    if (buttonClick === 1) {
      payload = {
        messages: "noun",
        index: 1,
      };
    }
    if (buttonClick === 2) {
      payload = {
        messages: "pronoun",
        index: 1,
      };
    }
    if (buttonClick === 3) {
      payload = {
        messages: "adjective",
        index: 1,
      };
    }

    axios
      .post("http://localhost:2000/api/v1/openai", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          console.log("ress", res.data);
          setData(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  function handleButtonClickExample(buttonClick) {
    let payload;
    if (buttonClick === 1) {
      payload = {
        messages: "noun",
        index: 2,
      };
    }
    if (buttonClick === 2) {
      payload = {
        messages: "pronoun",
        index: 2,
      };
    }
    if (buttonClick === 3) {
      payload = {
        messages: "adjective",
        index: 2,
      };
    }

    axios
      .post("http://localhost:2000/api/v1/openai", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          console.log("ress", res.data);
          setData(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  function handleButtonClickQuize(buttonClick) {
    let payload;
    if (buttonClick === 1) {
      payload = {
        messages: "noun",
        index: 3,
      };
    }
    if (buttonClick === 2) {
      payload = {
        messages: "pronoun",
        index: 3,
      };
    }
    if (buttonClick === 3) {
      payload = {
        messages: "adjective",
        index: 3,
      };
    }

    axios
      .post("http://localhost:2000/api/v1/openai", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          console.log("ress", res.data);
          setData(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  return (
    <>
      <div className="page">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            color: "white",
            background: "gray",
          }}
        >
          <h3>Parts of Speech</h3>
          <h3>Examples</h3>
          <h3>Quizes</h3>
        </div>
        <div
          style={{ borderBottom: "6px solid pink", marginBottom: "2rem" }}
        ></div>
        <div style={{display:"flex", justifyContent:"space-around"}}>
        <div className="button-container">
          <button className="button" onClick={() => handleButtonClick(1)}>
            Noun
          </button>
          <button className="button" onClick={() => handleButtonClick(2)}>
            Pronoun
          </button>
          <button className="button" onClick={() => handleButtonClick(3)}>
            Adjective
          </button>
        </div>

        
        <div className="button-container">
          <button className="button" onClick={() => handleButtonClickExample(1)}>
            Noun
          </button>
          <button className="button" onClick={() => handleButtonClickExample(2)}>
            Pronoun
          </button>
          <button className="button" onClick={() => handleButtonClickExample(3)}>
            Adjective
          </button>
        </div>
        <div className="button-container">
          <button className="button" onClick={() => handleButtonClickQuize(1)}>
            Noun
          </button>
          <button className="button" onClick={() => handleButtonClickQuize(2)}>
            Pronoun
          </button>
          <button className="button" onClick={() => handleButtonClickQuize(3)}>
            Adjective
          </button>
        </div>

        </div>
      </div>
      {data && data.length > 0
        ? data.map((e, index) => (
            <div className="card" key={index + 1}>
              <div className="card-content">
                <p>{e["message"]}</p>
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default Openai;
