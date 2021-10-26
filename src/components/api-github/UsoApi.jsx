import React, { useEffect, useState } from "react";
import axios from "axios";


export default function UsoApi() {

    const [resposta, setResposta] = useState();
    const [usuario, setUsuario] = useState();
    const [botao, setBotao] = useState(true)
    

    useEffect(()=>{
        axios.get(`https://api.github.com/users/${usuario}`)
        .then((resp)=>{setResposta(resp.data)})
        .catch((erro)=>{console.log("error")});
    },[botao])
    return(

        <>
        <div>
            <img src={resposta?.avatar_url} alt="" />
            <h1>{resposta?.name}</h1>
            <p>{resposta?.bio}</p>
            <input type="text" onChange={(e)=>{setUsuario(e.target.value)}} />
            <button onClick={()=>{botao ? setBotao(false): setBotao(true)}}>clique</button>
        </div>
        </>
    );
}