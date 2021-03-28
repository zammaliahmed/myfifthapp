import  React,{Component}  from 'react';
import './App.module.css';
import Time from './Time';
import showProfile from './showProfile';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

class App extends Component{
   state={
     name:'Zammali Ahmed',
     img: '/images/image2.png',
     profession: 'Etudiant',
   }

  
componentDidUpdate(){
  // alert('changement')
  console.log('componentDidUpdate')
}
componentDidMount() {
  // alert('hello World')
   console.log('componentDidMount')
 }

render(){
  var   name =  this.state.name ;
function  Handleprofile(name){
           
  return alert(`This is me ${name}.`)
}
    
  
       return(
        <div  >

          <h1 > Hi the world I'm <span>{ this.state.name }</span></h1>
          <div>

          <img   src={ this.state.img }  style={{width:'200px',height:'200px'}}/>
          </div>
          <div  style={{ textAlign:'center',marginTop:'-00px' }} className="block__profile">
            <div>
            <p>
           {this.state.bio} 
            </p>
            <p>
                {this.state.profession}
            </p>
            </div>
          </div>
          <div>
          <button onClick={Handleprofile(name)} style={{ textAlign:'center',marginTop:'40px' }} >
              show profile
            </button>
          </div>
          <Time   />
          <showProfile />
        </div>
       )


  }
  
   
}
export default App;