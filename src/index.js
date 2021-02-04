import React from 'react';
import ReactDOM from 'react-dom';
import { Modulo1 } from './app.js'
import './app.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// var variable;

// function myFunction() {
//   variable = setInterval(ReactDOM.render, 1000);
// }

var segundos = 0;
let minutosUnidades = 0;
var minutosDecenas=0;
var horaUnidad=0;
var horaDecena=0;
function Index() {
  segundos++
  let segundosString=segundos.toString()
  let unidades=segundosString[segundosString.length-1]
  let decenas=0;
  if (segundos>9){
    decenas = segundosString[segundosString.length - 2];
  
  if (segundos==60){decenas=0};
  
  }
  

if (segundos>59&&minutosUnidades==9){
  minutosDecenas++
  if (minutosDecenas==6){minutosDecenas=0
  
    horaUnidad++
    if (horaUnidad==10){horaUnidad=0
    
      horaDecena++
      
      if(horaDecena==10){segundos=0
      decenas=0
    minutosDecenas=0
  minutosUnidades=0
horaUnidad=0
horaDecena=0}


    }
  
  
  
  
  }
}




  if (segundos > 59) {
    if (minutosUnidades<=9){
      
      
      minutosUnidades++

      if (minutosUnidades==10){minutosUnidades=0}

    segundos = 0;
    }else{minutosUnidades=0}
    
  }







  return (
    <div className="linea1">
      <div></div>
      <Modulo1 icon={<i class="far fa-clock"></i>} />
      {/* Esto es como un componente, por eso va en {} */}
      <Modulo1 value={horaDecena}/>
      <Modulo1 value={horaUnidad}/>
      <Modulo1 value={minutosDecenas}/>
      <Modulo1 value={minutosUnidades}/>
      <Modulo1 value={decenas}/>
      <Modulo1 value={unidades} />
    </div>
  );


}
setInterval(function () {
  ReactDOM.render(
    <Index />,

    document.getElementById("root")
  );
}, 1000

)




