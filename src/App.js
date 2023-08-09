
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [today, setToday]=useState(new Date())

  useEffect(() => {
  // use effect to update the title of the dom
  document.title=text
  // telling react to set a time out 

  setTimeout(()=>setCount(0),1000)
  setInterval(()=>{setToday(new Date())},1000)  


    // to stop the use effect from running each time we rerender we add an argument called array dependency
  },[text,count]);

  console.log("Component rendering ");

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={(e) => handleClick()}>
        I've being clicked {count} times
      </button>
      <br></br>
      <input
        type="text"
        placeholder="type away ..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />


      <div>
        {today.toString()}
      </div>
    </div>
  );
}

export default App;