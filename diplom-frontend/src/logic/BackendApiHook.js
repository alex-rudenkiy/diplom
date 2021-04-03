import {useEffect, useState} from "react";
import axios from 'axios';
import * as React from "react";
import { useHistory } from "react-router-dom";


const useBackendApi = () => {
    const baseUrl = "http://localhost:8090";
    //const [token, setToken] = useState(null);
    const history = useHistory();

/*    useEffect(() => {
        console.log(localStorage.getItem("token"));
        setToken(localStorage.getItem("token"));
        //localStorage.setItem('myData', data);
    },[]);*/

  /*  useEffect(() => {

        console.log("TOOKEN");
    }, [token])*/

    function getLocalToken(){
        return localStorage.getItem("token");
    }

    function checkAuth(){
        let token = getLocalToken();
        if(token === null){
            history.push('/login');
        }else{
            history.push('/profile');
        }
    }

    function authentication(data){
        console.log(data);
        axios.post(`${baseUrl}/token`, data)
            .then(res => {
                console.log(res.data);
                localStorage.setItem("token",res.data);
                let token =getLocalToken();
                if(token === null){
                    history.push('/login');
                }else{
                    history.push('/profile');
                }
            }).catch(e =>{

            if (e.response.status == 424) {
                localStorage.setItem("token",e.response.data);
                let token =getLocalToken();
                if(token === null){
                    history.push('/login');
                }else{
                    history.push('/profile');
                }
                //console.log('unauthorized, logging out ...');
            }

        })
    }

    async function registration(data) {
        console.log(data);
        let result = (await axios.post(`${baseUrl}/user`, data))
            /*.then(res => {
                console.log(res);
                localStorage.setItem("token", res);
            });*/
        localStorage.setItem("token", result.data);


        return result.data;
    }

    function fileUpload(data, file){
        var formData = new FormData();
        formData.append('file', file);
        formData.append('fileType',data.fileType);
        formData.append('token',data.token);
        return fetch('http://localhost:8090/file/', {
            method: 'POST',
            body: formData
        })
    }

    async function getUserInfo(id) {

        if (id === undefined) {
            const t = getLocalToken();
           console.log("t=",t);
            /*
             axios.get(`${baseUrl}/user?token=${t}`).catch((e)=>{
                 logout()
             } )*/

            return (await axios.get(`${baseUrl}/user?token=${t}`)).data;
        }
    }

    function logout(){
        localStorage.removeItem("token");
        history.push('/login');

    }


    return { authentication, registration, fileUpload, getUserInfo, checkAuth, logout };
}

//export const ApiContext = React.createContext(useBackendApi());

export default useBackendApi;
