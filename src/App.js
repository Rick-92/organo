import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';
import Time from './componentes/time';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [time,setTime] = useState([

    {
      id:uuidv4(),
      nome: 'Programação',
      cor: '#d9f7e9'
    },
    {
      id:uuidv4(),
      nome: 'Front-end',
      cor: '#E8F8FF'
    },
    {
      id:uuidv4(),
      nome: 'Data science',
      cor: '#F0F8E2'
    },
    {
      id:uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      id:uuidv4(),
      nome: 'UX e design',
      cor: '#FAE9F5'
    },
    {
      id:uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      id:uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    },
  ])
  const inicial = [
    {  
      
      id: uuidv4(),
      nome: "Ricardo",
      cargo: "Desenvolvedor fullstack ",
      imagem:"https://github.com/Rick-92.png",
      time: time[3].nome,
    },
  ]
  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  function deletarColaborador (id){ 
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id ))
    
  }

  function mudarCorDoTime (cor,id){
    setTime( time.map(time => {
      if(time.id === id ){
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
           id={time.id}
           cor={time.cor}
           colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
           aoDeletar={deletarColaborador}
          />
          )}
    </div>
  );
}

export default App;
