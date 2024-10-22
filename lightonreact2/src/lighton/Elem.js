

import React, { useContext } from "react";
import "./Elem.css"
import { kattContext } from "../context/kattContext";

export default function Elem (props){

    const { katt } = useContext(kattContext);

    /*function kattintas(){
        katt(props.jel)
           
    }*/

    return(
        <div className={`lampa ${props.jel?"fel":"le"}`} onClick={()=>katt(props.i)}></div>
    )
}