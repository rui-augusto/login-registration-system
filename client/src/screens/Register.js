import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Axios from 'axios';
import { AiOutlineUser } from 'react-icons/ai';

export const Register = () => {

    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({});

    const handleAddUser = (value) => {
        setNewUser((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));
    };

    const createUser = () => {
        let url = "http://localhost:3001";
        Axios.post(url + "/register", {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        }).then((res) => {
            console.log(res);
        });
        alert("Usuário criado com sucesso!");
        navigate('/');
    }

    return(
        <div className = "fullScreenArea">
            <div className = "mainContentArea">
                <div className = "upsideArea">
                    <AiOutlineUser className = "icons"/><br/>
                </div>
                <input 
                    type = "text" 
                    name = "name"
                    placeholder = "Nome"
                    className = "inputFormat"
                    onChange = {handleAddUser}
                    required
                />
                <input 
                    type = "e-mail" 
                    name = "email"
                    placeholder = "E-mail"
                    className = "inputFormat"
                    onChange = {handleAddUser}
                    required
                />
                <input 
                    type = "password"
                    name = "password" 
                    placeholder = "Senha"
                    className = "inputFormat"
                    onChange = {handleAddUser} 
                    required
                />
                <button className = "buttonFormat" onClick = {createUser}>Registrar</button><br/>
                <Link to = '/' className = "navigationLink">Já possuo conta</Link>
            </div>
        </div>
    );
}