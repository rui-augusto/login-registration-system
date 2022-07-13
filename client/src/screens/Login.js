import React, { useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Axios from 'axios';
import { AiOutlineUser } from 'react-icons/ai';

import "../style/style.css";

export const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [userList, setUserList] = useState([]);
    
    useEffect(() => {
        let url = "http://localhost:3001";
        Axios.get(url + "/getUsers").then((res) => {
            setUserList(res.data);
        });
    }, []);
    
    const handleAddUser = (value) => {
        setUser((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));
    };

    const verifyUser = () => {
        userList.map((item, index) => {
            if (item.email === user.email &&
                item.password === user.password){
                    navigate(`/home/${item.id}`);
                }
            else { console.log("tente novamente"); }
        });
    }


    return (
        <div className = "fullScreenArea">
            <div className = "mainContentArea">
                <div className = "upsideArea">
                    <AiOutlineUser className = "icons"/><br/>
                </div>  
                <input 
                    type = "e-mail"
                    name = "email" 
                    placeholder = "E-mail"
                    className = "inputFormat"
                    onChange = { handleAddUser }
                    required
                />
                <input 
                    type = "password"
                    name = "password" 
                    placeholder = "Senha"
                    className = "inputFormat" 
                    onChange = { handleAddUser }
                    required
                />
                <button className = "buttonFormat" onClick = { verifyUser }>LOGIN</button><br/>
                <Link to = '/register' className = "navigationLink">Criar novo usuário</Link>
            </div>
        </div>
    );
}