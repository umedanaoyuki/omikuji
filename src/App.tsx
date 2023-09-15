import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [text, setText] = useState<string>("？");
    const buttonClick = () => {

        const result: string[] = ["大吉", "中吉", "凶"]

        const number: number = Math.random();
        const omikujiNumber : number = Math.floor(number * result.length);

        console.log(omikujiNumber);


        setText(result[omikujiNumber]);
    }

  return (
    <main>
      <section>
          <h1>今日の運勢</h1>
          <p>{text}</p>
      </section>
        <button onClick={buttonClick}>おみくじを引く</button>
    </main>
  );
}

export default App;
