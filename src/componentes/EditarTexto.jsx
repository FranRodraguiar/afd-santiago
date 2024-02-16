import { useState } from "react";

export default function EditarTexto(){
    const [boleano,setBoleano] = useState(true);
    const [firstName,setName] = useState("Cambia o nome");

    return(<>
        <input readOnly = {boleano} value={firstName} onChange={(e)=> setName(e.target.value)} />
        <button onClick={()=>{setBoleano(!boleano)}}>Cambiar estado</button>
    </>)
}
