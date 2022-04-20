import './App.css';
import Texto from './Components/Texto'; // Importando componentes  - O nome 'Texto' depois de import poderia ser qualquer nome.
import Button from './Components/Button';


const Anime = () => {
  return "Dragon Ball";
}

const saga = "Z";

const Sum = (a, b) => {
  alert(a + b);
}


function App() { //Normalmente o nome desta função seria App.
  return (
    <div className="App">
     
       <div>
          <h1>{`${Anime()} ${saga}`}</h1>
          <br/>
          <Texto> {/*Componente*/}
            <div><Button onClick = {()=>Sum(10,22)} name = 'renan'/></div> {/*Componente children */}
          </Texto>
        </div>
    </div>
  );
}

export default App; //O react usa este export para reconhecer o que sera renderizado.
