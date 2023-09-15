import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [text, setText] = useState<string>("？");
    const buttonClick = () => {
        setText("ボタン押下");
    }

  return (
    <main>
      <section>
          <h1>今日の運勢</h1>
          <p className="pTag">{text}</p>
      </section>
        <button onClick={buttonClick}>おみくじを引く</button>
    </main>
  );
}

export default App;
