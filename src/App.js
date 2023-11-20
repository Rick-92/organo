import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';
import Time from './componentes/time';

function App() {

  const [time,setTime] = useState([

    {
      nome: 'Programação',
      cor: '#d9f7e9'
    },
    {
      nome: 'Front-end',
      cor: '#E8F8FF'
    },
    {
      nome: 'Data science',
      cor: '#F0F8E2'
    },
    {
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      nome: 'UX e design',
      cor: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    },
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  function deletarColaborador (){
    console.log('deletando colaborador')
  }

  function mudarCorDoTime (cor,nome){
    setTime( time.map(time => {
      if(time.nome === nome ){
        time.cor = cor;
      }
      return time;
    }))
  }
  return (

    <div className="App">
      <Banner />
      <Formulario times={time.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {time.map((time,indice) => <Time 
          mudarCor={mudarCorDoTime}
           key={indice} 
           nome={time.nome} 
           cor={time.cor}
           colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
           aoDeletar={deletarColaborador}
          />
          )}
    </div>
  );
}

export default App;
