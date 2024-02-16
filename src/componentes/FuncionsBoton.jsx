import { useState } from "react";
import BotonDous from "./BotonDous";
import {coresCss} from "../funcions/helpers"

export default function FuncionsBoton(){
    let [valor,setValor] = useState(0);

    const sumarValor =()=>{
        valor += 1;
        setValor(valor)
    }
    const resetValor =()=>{
        setValor(0)
    }
    const restarValor =()=>{
        valor -= 1;
        setValor(valor)
    }

    return(<>
    <div>Valor actual en función boton: {valor}</div>
    <BotonDous estilo = {coresCss(valor)} funcion = {sumarValor}  titulo = "sumarValor" />
    <BotonDous estilo = {coresCss(valor)} funcion = {resetValor}  titulo = "resetValor" />
    <BotonDous estilo = {coresCss(valor)} funcion = {restarValor} titulo = "restarValor"/>

    </>)
    
}
