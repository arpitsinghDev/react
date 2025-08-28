import { useState } from "react";

const TestAi = () => {
const [chat,setChat]=useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const value = e.target.elements.input.value;
    setChat(c=>[...c,value]);
    fetch("http://localhost:3000/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: value }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
         setChat(c=>[...c,data.message]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div>
      <div>{chat.map((e,i)=><div className="m2" key={i}>{e}</div>)}</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="input" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default TestAi;
