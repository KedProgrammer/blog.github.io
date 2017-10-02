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
        {this.state.data1.map((posts,index) =>
          <div className="sub">
            <div className="fotos"><img className="image-post" src={posts.post_image_url} /></div>
            <div className="votos">
              <img  src={arriba} className="image-fotos" onClick={() => this.aumentar(index)} />
              <span>{posts.votes}</span>
              <img className="image-fotos" onClick={() => this.disminuir(index)}  src={abajo}/>
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




aumentar(index){
   this.setState({
    data1: this.state.data1.map((post,i) => {
            if(index === i){
              post.votes  = post.votes + 1
            }
            return post
          })
      });


}

disminuir(index){
   this.setState({
    data1: this.state.data1.map((post,i) => {
            if(index === i){
              post.votes  = post.votes - 1
            }
            return post
          })
      });

}



 ascendente(array){
var votos = [];
var aux = [];
var length = array.length;
for(var i = 0;i < length; i++){
votos = this.sacar_votos(array);
aux[i] = array[votos.indexOf(Math.min(...votos))];
array.splice(votos.indexOf(Math.min(...votos)),1);
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





}


export default App;
