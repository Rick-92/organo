import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador'
import './time.css'

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {

    const css = { backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, "0.6") }
    return (


        (colaboradores.length > 0) ? <section className='time' style={css}>
            <input onChange={evento => mudarCor(evento.target.value, time.id)} value={time.cor} type='color' className='input-color'></input>
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    console.log()
                    return <Colaborador
                        corDeFundo={time.cor}
                        key={indice}
                        colaborador={colaborador}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        aoDeletar={aoDeletar} />
                })}
            </div>
        </section>
            : ""
    )
}

export default Time