import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';


export const Home = () => {
    
    const { id } = useParams();

    const [userList, setUserList] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        let url = "http://localhost:3001";
        Axios.get(url + "/getUsers").then((res) => {
            setUserList(res.data);
        });
    }, []);
    
    useEffect(() => {
        userList.map((item, index) => {
            if (item.id == id){
                setUserInfo(item);
            }
        });
    }, [userList]);


    return(
        <h1>Bem vindo, {userInfo.name}</h1>
    );
}