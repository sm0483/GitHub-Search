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
    const [isLoading,setIsLoading]=useState(true);
    const [notFound,setNotFound]=useState(false);

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
                console.log(data);
                setData(data.data);
                setIsLoading(false);
            })
            .catch((err)=>{
                setIsLoading(false);
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
            getData,
            err,
            isLoading,
            notFound,
            wait
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