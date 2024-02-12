//TRANSOFRMAR EL CODIGO
import React,{Component} from 'react';
import {render} from 'react-dom'

class App extends Component {
    render(){
        return(
        <h1>Hello World</h1>
        )
    }
};

//CREAMOS UN COMPONENTE QUE CREA UN H1 Y LO MONTAMOS DONDE ESTA EL ID APP HACIENDO DOM
render(<App/> , document.getElementById('app') )






