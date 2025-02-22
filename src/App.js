import './App.css';
import {useEffect} from "react";
import Header from "./components/header/Header";
import {useTelegram} from "./components/hooks/useTelegram";
import { Route, Routes } from "react-router-dom";
import Form from "./components/form/Form";
import ProductList from "./components/ProductList/ProductList";

function App() {

    const { telegram, onToggleButton } = useTelegram();

    useEffect(() => {
        telegram.ready();
    }, []);

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route index element={<ProductList />} />
            <Route path={"form"} element={<Form />} />
        </Routes>
    </div>
  );
}

export default App;
