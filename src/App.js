import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [inputPeso, cambiarInputPeso] = useState("");
  const [inputAltura, cambiarInputAltura] = useState("");
  const [mensajeIMC, cambiarmensajeIMC] = useState("");

  const cambiarEstado = (e) => {
    if(e.target.name === "peso") {
      cambiarInputPeso(e.target.value.replace(/[^0-9.]/g, ''));
    } else if (e.target.name === "altura"){
      cambiarInputAltura(e.target.value.replace(/[^0-9.]/g, ''));
    }
  }

  const calcularIMC = (e) => {
    e.preventDefault();

    if(inputPeso !== '' && inputAltura !== '') {
      if(inputPeso === "0"){
        cambiarmensajeIMC("Por favor ingresa un peso mayor a 0");
        return;
      } else if(!/^[0-9][.][0-9]+$/.test(inputAltura)){
        cambiarmensajeIMC("Por favor ingresa la altura en metros");
        return;
      } else {
        let imc = inputPeso / Math.pow(inputAltura, 2)
        cambiarmensajeIMC(`Tu imc es: ${imc.toFixed(2)}`);
      } 
    } else {
      cambiarmensajeIMC("Por favor rellena todos los campos");
    }

    cambiarInputPeso("");
    cambiarInputAltura("");
  }
  
      

    

  return (
    <>
      <ContenedorApp>
        <Titulo className="">IMC Peso ideal</Titulo>
        <FormularioApp action="">
          <Input 
            type="text"
            name="peso"
            value={inputPeso}
            onChange={(e) => cambiarEstado(e)}
            placeholder="Ingresa tu peso"
          />

          <Input 
            type="text"
            name="altura"
            value={inputAltura}
            onChange={(e) => cambiarEstado(e)}
            placeholder="Ingresa tu Altura"
          />
          <Button

          type="submit"
          onClick={calcularIMC}
          >
            Calcular IMC
          </Button>
        </FormularioApp>
        
        {mensajeIMC !== "" && <IMC>{mensajeIMC}</IMC>}
        
      </ContenedorApp>
    </>
  );
}

const ContenedorApp = styled.div`
  width: 30%;
  margin-left:auto;
  margin-right: auto;
`

const FormularioApp = styled.form`
  display: flex;
  flex-direction: column;
  padding:1rem .8rem;
`

const Titulo = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  border: 0;
  outline: 0;
  padding:.8rem .6rem;
  border: 1px solid #000;

  margin-bottom: 1rem;
`

const Button = styled.button`
  padding-top:1rem;
  padding-bottom:1rem;
  cursor: pointer;
`

const IMC = styled.div`
  text-align: center;
  font-size:20px;
`

export default App;
