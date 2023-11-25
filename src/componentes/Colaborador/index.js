import { AiFillCloseCircle,AiFillHeart,AiOutlineHeart  } from "react-icons/ai";
import "./colaborador.css"

const Colaborador = ({ nome, cargo, imagem, corDeFundo, aoDeletar ,colaborador,aoFavoritar}) => {
    function favoritar (){
        aoFavoritar(colaborador.id)
    }

    return (<div className="colaborador">
        <AiFillCloseCircle 
        size={25} 
        className="deletar" 
        onClick={() => aoDeletar(colaborador.id)} 

        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome} />
        </div>
        <div className="rodape">
            <h4>{nome}</h4>
            <h5> {cargo}</h5>
            <div className="favotirar">
                {colaborador.favorito 
                ? <AiFillHeart size={"25px"} onClick={favoritar} color="FF0000"/> 
                : <AiOutlineHeart size={"15px"} onClick={favoritar}/>}

            </div>
        </div>

    </div>

    )
}

export default Colaborador