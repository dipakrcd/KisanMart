import { myaxios } from "./Helper";

export const signUp=(user)=>{
    return myaxios.post("/api/user/signup",user)
    .then((response)=>response.json());
}

export const login=(email,password)=>{
return myaxios.get("/api/user/login")
}