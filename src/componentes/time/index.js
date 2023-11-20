import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador'
import './time.css'

const Time = (props) => {
         
        const css = {backgroundImage:'url(/imagens/fundo.png)' , backgroundColor:hexToRgba(props.cor, "0.6")}
    return (
    

             (props.colaboradores.length > 0) ? <section className='time' style={css}>
                <input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.cor} type='color' className='input-color'></input>
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map( (colaborador,indice) =>  {
                console.log()
            return <Colaborador corDeFundo={props.cor} key={props.indice} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={props.aoDeletar}/>
            })}
            </div>
        </section>
        :""
    )
}

export default Time