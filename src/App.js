import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './posts.js';
import abajo from './abajo.png';
import arriba from './arriba.jpg';


class App extends Component {
  constructor(){
    super();
    this.state =  {
      data1: data,

      orden: "asc"

      orden: "desc"


    }
  }




  render() {
    return (
      <div className="main">
      <button onClick={() => this.put_orden("asc")}>  Ascendente </button>
      <button onClick={() => this.put_orden("desc")}> Descendente  </button>
        {this.state.data1.map((posts,index) =>
          <div className="sub">
            <div className="fotos"><img className="image-post" src={posts.post_image_url} /></div>
            <div className="votos">
              <img  src={arriba} className="image-fotos" onClick={() => this.votar(index,"up")} />
              <span>{posts.votes}</span>

              <img className="image-fotos" onClick={() => this.disminuir(index)}  src={abajo}/>

              <img className="image-fotos" onClick={() => this.votar(index,"down")}  src={abajo}/>



            </div>
            <div className="texto">
             <span className="titulo">{posts.title}</span>
            <span>{posts.description}</span>
            </div>

          </div>
          )}
     
      </div>
    )
  }




votar(index,orden){

var posts = this.state.data1.map((post,i) => {
            if(index === i){
              if (orden === "up"){
              post.votes  = post.votes + 1
              } else if(orden === "down"){
                post.votes  = post.votes - 1
              }
            }
            return post
          })

this.actualizar(posts)
  

}



actualizar(posts){

this.setState({

    data1: this.ordenar(posts)

  });


}


 ascendente(array){

 ordenar(array){

var votos = [];
var aux = [];
var length = array.length;
for(var i = 0;i < length; i++){
votos = this.sacar_votos(array);

aux[i] = array[votos.indexOf(Math.min(...votos))];
array.splice(votos.indexOf(Math.min(...votos)),1);

  if (this.state.orden === "asc"){
  aux[i] = array[votos.indexOf(Math.min(...votos))];
  array.splice(votos.indexOf(Math.min(...votos)),1);
  } else if(this.state.orden === "desc"){

    aux[i] = array[votos.indexOf(Math.max(...votos))];
    array.splice(votos.indexOf(Math.max(...votos)),1);

  }

}
return aux;
}




sacar_votos(array){
var aux = [];
var length = array.length;
for(var i = 0;i<length;i++){
aux[i] = array[i].votes


}
return aux
}


put_orden(orden){

  this.setState({
    orden: orden === "asc" ? "asc" : "desc"
  });

 prueba

  this.actualizar(this.state.data1)
}
return aux
}





}


export default App;
