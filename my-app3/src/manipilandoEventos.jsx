const showEvent = (e) => {  
    console.log('Evento disparado');
    console.log(e)
}




const Button = <button onClick={showEvent}>Mostrar Evento</button>
const handlerChange = (e) => {
    const {value} =  e.target
    console.log(value)
}

function app2 (){
    return (
        <div>
            <h1 id="algo">Algo</h1>
            <input onChange={handlerChange} />
            {Button}
        </div>
    )
}

export default app2;