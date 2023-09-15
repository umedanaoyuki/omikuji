import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [text, setText] = useState<string>("？");
    const buttonClick = () => {

        const number: number = Math.random();
        const omikujiNumber : number = Math.floor(number * 3);

        console.log(omikujiNumber);

        switch (omikujiNumber) {
            case 0:
                setText("大吉");
                break;
            case 1:
                setText("中吉");
                break;
            case 2:
                setText("凶");
                break;
            default:
                setText("エラー")
        }
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
