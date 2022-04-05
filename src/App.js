import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [inputPeso, cambiarInputPeso] = useState("");
  const [inputAltura, cambiarInputAltura] = useState("");
  const [imc, cambiarImc] = useState("");

  const validarDatos = (peso, altura) => {
    if(!isNaN(peso) && !isNaN(altura)) {
      return true;
    } else {
      return false;
    };
  }

  const calcularIMC = (e) => {
    e.preventDefault();
    if(validarDatos(inputPeso, inputAltura)) {
      let imc = inputPeso / Math.pow(inputAltura, 2)

      cambiarImc(`Tu imc es: ${imc.toFixed(2)}`);
    } else {
      cambiarImc("Por favor ingresa datos correctos")
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
            value={inputPeso}
            onChange={(e) => cambiarInputPeso(e.target.value)}
            placeholder="Ingresa tu peso"
          />

          <Input 
            type="text"
            value={inputAltura}
            onChange={(e) => cambiarInputAltura(e.target.value)}
            placeholder="Ingresa tu Altura"
          />
          <Button

          type="submit"
          onClick={calcularIMC}
          >
            Calcular IMC
          </Button>
        </FormularioApp>
        
        {imc !== "" && <IMC>{imc}</IMC>}
        
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
