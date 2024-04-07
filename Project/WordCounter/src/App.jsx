import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [text, setText] = useState("");
  const [word, setWord] = useState([]);

  const textValue = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
    setWord(text.split(" "));
  };

  const upperCase = () => {
    setText(text.toUpperCase());
  };

  const lowerCase = () => {
    setText(text.toLowerCase());
  };

  const captlizeCase = () => {
    // setWord(word);
    let data = "";
    for (let i = 0; i < word.length; i++) {
      data += word[i] =
        word[i].charAt(0).toUpperCase() + word[i].slice(1) + " ";
    }
    setText(data);
    console.log(data);
  };

  return (
    <>
      <div className="w-full h-screen bg-slate-400 flex flex-col justify-center items-center gap-5">
        <div className="min-w-[70%] h-[400px] border overflow-hidden rounded-sm">
          <textarea
            value={text}
            className="w-full h-full resize-none focus:outline-none rounded-sm px-2 py-1 text-xl"
            onChange={textValue}
          ></textarea>
        </div>
        <div className="min-w-[500px] h-[50px] flex items-center justify-center gap-2">
          <button
            className="bg-green-400 px-2 py-1 text-xl font-semibold rounded-md"
            onClick={upperCase}
          >
            UpperCase
          </button>
          <button
            className="bg-yellow-300 px-2 py-1 text-xl font-semibold rounded-md"
            onClick={lowerCase}
          >
            LowerCase
          </button>
          <button
            className="bg-red-700 text-white px-2 py-1 text-xl font-semibold rounded-md"
            onClick={captlizeCase}
          >
            Captilize
          </button>
          {/* <button></button> */}
        </div>
        <div className="min-w-[600px] h-[50px] flex items-center justify-center gap-2">
          <p className="text-xl font-bold">Word Count Is : {word.length}</p>
          <p className="text-xl font-bold">
            Total Number Of Character : {text.length}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
