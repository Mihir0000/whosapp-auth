import React,{useState,createContext} from "react";

export const Context=createContext<any>({});

export const ContextProvider=(props:any)=>{
    const [userName,setUserName]=useState("")
    const [secret,setSecret]=useState("")

    const value={
        userName,
        setUserName,
        secret,
        setSecret
    }

    return <Context.Provider value={value}>{props.children}</Context.Provider>
}
