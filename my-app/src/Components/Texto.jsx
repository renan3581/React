import React from "react";

const texto = (props) =>{
    return (
        <div>
            <h1>Isso Ai!</h1>
            <div>{props.children}</div> {/*Sem isso o botão não sera renderizado */}
        </div>
    );
}

export default texto;