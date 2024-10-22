
import Elem from "./Elem.js"
import "./Elem.css"


export default function Jatekter(props){

    /*function feltolt(jel){
        if (szam==0){
            jel="fel"
        }else{
            jel="le"
        }
    }*/
    function katt(jel){
        /*if (szam==0){
            jel="fel"
        }else{
            jel="le"
        }*/
        props.katt(jel)
    }

    return(
        <div className='jatekter'>
            {
                props.lista.map((jel, index)=>{
                    return(<Elem jel={jel} key={index} i={index}/>)
                })
            }
        </div>
    )
}