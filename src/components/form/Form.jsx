import "./Form.css";
import {useState} from "react";
import Button from "../buttons/button/Button";
import {useNavigate} from "react-router-dom";

const Form = () => {
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [subj, setSubject] = useState('');
    const navigate = useNavigate();

    const onChangeCountry = (value) => {
        setCountry(value.target.value);
    }
    const onChangeAddress = (value) => {
        setAddress(value.target.value);
    }
    const onChangePhone = (value) => {
        setPhone(value.target.value);
    }
    const onChangeSubject = (value) => {
        setSubject(value.target.value);
    }

    const onBack = () => {
        navigate('/');
    }

    return (
        <div className="form">
            <h3>Введите ваши данные</h3>
            <input className={"input"} type={"text"} placeholder={"Страна"} value={country} onChange={onChangeCountry} />
            <input className={"input"} type={"text"} placeholder={"Адрес"} value={address} onChange={onChangeAddress} />
            <input className={"input"} type={"tel"} placeholder={"Телефон"} value={phone} onChange={onChangePhone} />
            <select className={"select"} value={subj} onChange={onChangeSubject}>
                <option value={"physical"}>Физ. лицо</option>
                <option value={"legal"}>Юр. лицо</option>
            </select>
            <Button onClick={onBack}>Вернуться</Button>
        </div>
    );
}

export default Form;