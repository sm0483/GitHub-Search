import React from "react";
import keys from '../config/Keys'
import { useState,useEffect,useContext } from "react";
import axios from 'axios';
const AppContext=React.createContext();


const AppProvider=({children})=>{
    const [search,setSearch]=useState('');
    const [wait,setWait]=useState(true);
    const [data,setData]=useState([]);
    const [err,setErr]=useState(false);

    const controller=new AbortController();


    const getData=(e)=>{
        e.preventDefault();
        setWait(!wait);
    }

    useEffect(()=>{
        const data=axios.get(`https://api.github.com/users/${search}`,
            {signal:controller.signal},
            {
                auth:{
                    username:keys.username,
                    password:keys.password
                }
            })
            .then((data)=>{
                setData(data.data);
            })
            .catch((err)=>{
                setErr(true);
            })

            return ()=>{
                controller.abort();
            }
        
    },[wait])

    return (
        <AppContext.Provider
        value={{
            search,
            setSearch,
            data,
            setData,
            getData
        }}
        >
            {children}
        </AppContext.Provider>

    )
}

const useGlobalContext=()=>{
    return useContext(AppContext);

}

export {AppContext,AppProvider,useGlobalContext}