import './App.css';
import {useEffect} from "react";
import Header from "./components/header/Header";
const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready();
    }, []);

  return (
    <div className="App">
        <Header/>
        <br/>
        <p>This is a website for memevoices Telegram bot</p>
    </div>
  );
}

export default App;
