import React from "react";
import { useState,useEffect,useContext } from "react";
import axios from 'axios';
const AppContext=React.createContext();


const AppProvider=({children})=>{
    const [search,setSearch]=useState('');
    const [wait,setWait]=useState(true);
    const [data,setData]=useState([]);
    const [err,setErr]=useState(false);
    const [isLoading,setIsLoading]=useState(true);
    const [notFound,setNotFound]=useState('');
    const [noInternet,setNoInternet]=useState(false);



    const getData=(e)=>{
        e.preventDefault();
        setWait(!wait);
    }

    useEffect(()=>{
        const controller=new AbortController();
        const data=axios.get(`https://api.github.com/users/${search}`,
            {signal:controller.signal},
            {
                auth:{
                    username:process.env.USER_NAME,
                    password:process.env.PASSWORD
                }
            })
            .then((data)=>{
                setNotFound('')
                setData(data.data);
                setIsLoading(false);
            })
            .catch((err)=>{
                if(search!=='')setNotFound(err.response.status);
                if(err.response.status===0) setNoInternet(true);
                setIsLoading(false);
                setErr(true);
            })

            //eslint-disable-next-line react-hooks/exhaustive-deps

            return ()=>{
                return controller.abort();
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
            noInternet,
            setIsLoading
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