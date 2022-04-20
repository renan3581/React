//Ex.: condicional jsx.
const condicional = (boolean) => {
  
    if (boolean === true) {
      return <OlaMundo/> //Componente.
    }

    //Não é necessario colocar o else.
      return <NaoEMeuMundo/> //Componente.
    
    //Caso não queira retornar nada, pode ser:
     //return null;
}


//Ex.: condicional HTML.
function App() {
    return (
        <div>
            {condiçao &&(
                <div>Olá Mundo</div> //Poderia ser um componente aki.
            )}
        </div>
    );
}
  

//Ex.: condicional if-else HTML.
function App2() {
    return (
        <div>
            {condiçao ?( //Condição = true.
                <div>Olá Mundo</div> 
            ):( //Condição = false.
                <div>Não é meu mundo</div>   
            )}
        </div>
    );
}


//Evitando que um componente seja renderizado.

function App3() {
    return (
        <div>
            {condiçao ?( //Condição = true.
                <div>Olá Mundo</div> 
            ):null}
        </div>
    );
}