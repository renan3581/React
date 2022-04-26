import {useState} from 'react';
import Button from '../Button/button';

const Card = () => { 
    const [valor,setValor] = useState(0);
    function Adicionar (){
        setValor(valor + 1);
    }
    function Remover(){
        setValor(valor - 1);
    }

    return (
        <div className="card">
            <div className="card-header">
                Meu primeiro card
            </div>
            <div className="card-body">
                <Button
                    onClick={Adicionar}
                    className="btn btn-success"
                >
                    Adicionar
                </Button>
               
                <Button
                    onClick={Remover}
                    className="btn btn-danger"
                >
                    Remover
                </Button>
                <p>{valor}</p>
            </div>

        </div>
    )
}

export default Card;