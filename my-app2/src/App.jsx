import './App.css';
import NaoEMeuMundo from './Components/naoEMeuMundo';
import OlaMundo from './Components/olaMundo';

const condicional = (boolean) => {
  
    if (boolean === true) {
      return <OlaMundo/>
    }

  return <NaoEMeuMundo/>
  
}

const temPessoas = true;
const saudavel = true;



function App() {
  return (

    <div>
        {condicional(false)}
        {temPessoas &&(
          <div>
            <h1>Esse mundo tem pessoas!</h1> {/*Só sera rendereizado se a variavel temPessoas for 'true'*/}
          </div>
        )}


        {saudavel ?(
            <div><h1>Esse mundo é Saudavel</h1></div> 
          ):(
            <div><h1>Esse mundo não é Saudavel</h1></div>
          )
        }
    </div>

  );
}

export default App;
