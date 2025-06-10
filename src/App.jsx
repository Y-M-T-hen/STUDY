import React from "react";
import "./App.css";

function Uyg1() {

  const isimler = ["yusuf", "burak", "sevim", "ayse"]
  return (
    <div>
      {
        isimler.map((isim, index) => (
          <div key={index}
          style={
            {
              backgroundColor : "crimson",
              border: "solid black 2px",
              marginTop: "10px",
              textAlign: "center",
              width:"200px",
            }
          }
          >{isim}</div>
        )) 
      }
    </div>
  );
}

export default Uyg1;
