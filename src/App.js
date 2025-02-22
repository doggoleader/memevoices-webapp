import './App.css';
import {useEffect} from "react";
import Header from "./components/header/Header";
import {useTelegram} from "components/hooks/useTelegram";

function App() {

    const { telegram, onToggleButton } = useTelegram();

    useEffect(() => {
        telegram.ready();
    }, []);

  return (
    <div className="App">
        <Header/>
        <br/>
        <p>This is a website for memevoices Telegram bot</p>
        <button onClick={onToggleButton}>Toggle Telegram Button</button>
    </div>
  );
}

export default App;
