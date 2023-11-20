import Colaborador from '../Colaborador'
import './time.css'

const Time = (props,mudarCor) => {
         
        const css = {backgroundColor: props.corSecundaria}
    return (
    

             (props.colaboradores.length > 0) ? <section className='time' style={css}>
                <input onChange={evento => props.mudarCor(evento.target.value, props.nome)} value={props.corSecundaria} type='color' className='input-color'></input>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map( (colaborador,indice) =>  {
                console.log()
            return <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={props.aoDeletar}/>
            })}
            </div>
        </section>
        :""
    )
}

export default Time