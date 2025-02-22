import './App.css';
import {useEffect} from "react";
import Header from "./components/header/Header";
import {useTelegram} from "./components/hooks/useTelegram";
import { Route, Routes } from "react-router-dom";
import Form from "./components/form/Form";
import ProductList from "./components/ProductList/ProductList";
import CloseButton from "./components/buttons/CloseButton/CloseButton";
import Button from "./components/buttons/button/Button";

function App() {

    const { telegram, onClose } = useTelegram();

    useEffect(() => {
        telegram.ready();
    }, []);


  return (
    <div className="App">
        <Routes>
            <Route index element={<ProductList />} />
            <Route path={"form"} element={<Form />} />
        </Routes>
        <Button onClick={onClose}>Закрыть</Button>
    </div>
  );
}

export default App;
