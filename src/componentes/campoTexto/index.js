import './index.css'

const CampoTexto = ({aoAlterado,label,type = "text",valor,obrigatorio,placeholder})=> {

      const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
      }

        return(
                <div className={`campo campo-${type}`}>
                    <label>{label}</label>
                    <input 
                      type={type} 
                      value={valor} 
                      onChange={aoDigitado} 
                      required={obrigatorio} 
                      placeholder={placeholder}/>
                </div>


        )
}

export default CampoTexto