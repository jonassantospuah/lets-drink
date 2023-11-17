import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';


function App() {
  const [quantidade, setQuantidade] = useState('');
  const [teorAlcoolico, setTeorAlcoolico] = useState('');
  const [tempoBebendo, setTempoBebendo] = useState('');
  const [nivelBebado, setNivelBebado] = useState<string>('');
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const calcularNivelBebado = () => {
    const quantidadeFloat = parseFloat(quantidade);
    const teorAlcoolicoFloat = parseFloat(teorAlcoolico);
    const tempoBebendoInt = parseInt(tempoBebendo);

    if (isNaN(quantidadeFloat) || isNaN(teorAlcoolicoFloat) || isNaN(tempoBebendoInt)) {
      alert('Por favor, insira valores válidos.');
      return;
    }

    const resultado = (quantidadeFloat * teorAlcoolicoFloat) / tempoBebendoInt;

    

    if (resultado > 300 ) {
      setNivelBebado('Extremamente bebado cuidado !!!');
    } else if (resultado > 162) {
      setNivelBebado('Muito Bebado');
    } else if (resultado >= 161) {
      setNivelBebado('Bebado');
    }else if ( resultado < 160 && resultado > 80){ 
      setNivelBebado('Levemente Bebado');
    }else if ( resultado < 80 && resultado > 0 ){ 
      setNivelBebado('Praticamente sem efeitos do alcool');
    }else { 
      setNivelBebado('Nem bebeu');
    }

    setMostrarResultado(true);
  };

  return (
    <>
      <p className='text-5xl font-bold m-5'> Let's Drink </p>
      <Input label="Quantidade em (ml)" value={quantidade} onChange={setQuantidade} />
      <Input label="Teor alcoólico em (inteiro)" value={teorAlcoolico} onChange={setTeorAlcoolico} />
      <Input label="Tempo bebendo em (min)" value={tempoBebendo} onChange={setTempoBebendo} />

      <Button onClick={calcularNivelBebado} label="Calcular nível de embriaguez" />

      {mostrarResultado && (
        <div>
          <p>Nível de embriaguez: {nivelBebado}</p>
        </div>
      )}
    </>
  );
}

export default App;
