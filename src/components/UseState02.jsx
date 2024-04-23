import { useState } from "react";

export const UseState02 = () => {
    const [ valor, setValor ] = useState(0);

    function aumentar(){
        setValor(valor => valor + 1)
    }

    function diminuir(){
        setValor(valor => valor -1)
    }

    function diminuir_valor(a){
        setValor(valor => valor - a)
    }

    return (
        <>
            <h2>O uso de useState no React!</h2>
            <p>Valor:  {valor}</p>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={() => diminuir_valor(100)}>Diminuir+</button>
        </>
    )
}