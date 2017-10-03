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

    }
  }




  render() {

    return (
      <div className="main">

        <div className="buttons">
          <span className="ordenar">Ordenar por: </span>
          <button onClick={() => this.put_orden("asc")} className={this.state.orden === "asc" ? "relleno" : ""}>  Ascendente </button>
          <button onClick={() => this.put_orden("desc")} className={this.state.orden === "desc" ? "relleno" : ""}> Descendente  </button>
        </div>
        {this.state.data1.map((posts,index) =>
          <div className="sub">
            <div className="fotos"><img className="image-post" src={posts.post_image_url} /></div>
            <div className="votos">
              <img  src={arriba} className="image-fotos" onClick={() => this.votar(index,"up")} />
              <span>{posts.votes}</span>
              <img className="image-fotos" onClick={() => this.votar(index,"down")}  src={abajo}/>


            </div>
            <div className="texto">
              <a href={posts.url} className="url">{posts.title}</a>
              <span>{posts.description}</span>
              <div className="image_container"><span className="autor">Escrito por: </span> <img className="autor_image" src={posts.writer_avatar_url} /> </div>
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








 ordenar(array){
    var votos = [];
    var aux = [];
    var length = array.length;
    for(var i = 0;i < length; i++){
      votos = this.sacar_votos(array);
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








  actualizar1(posts,orden){
    this.setState({
        data1: this.ordenar1(posts,orden)
      });
  }




  ordenar1(array,orden){
    var votos = [];
    var aux = [];
    var length = array.length;
    for(var i = 0;i < length; i++){
      votos = this.sacar_votos(array);
      if (orden === "asc"){
        aux[i] = array[votos.indexOf(Math.min(...votos))];
        array.splice(votos.indexOf(Math.min(...votos)),1);
      } else if(orden === "desc"){
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
    this.actualizar1(this.state.data1,orden)
  }
}


export default App;
