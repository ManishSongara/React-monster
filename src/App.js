import './App.css'
import {React, useEffect, useState} from 'react'
import { CardList} from './componets/card-list/card-list.componet';
import { SearchBox } from "./componets/Search-Box/search-box.component";
function App(){
  const [monsters, setMonsters] = useState([]); //useState([''])
  const [searchField,setSearchField] = useState('a');
  useEffect(()=>{
      // Where we're fetching data from
    fetch('https://jsonplaceholder.typicode.com/users')
     // We get the API response and receive data in JSON format...
    .then(res => res.json())
     // ...then we update the users state
    .then((users)=>{setMonsters(users)});  
  },[]);
  
  const filterMonsters = monsters.filter( monster =>       
    monster.name.toLowerCase().includes(searchField.toLowerCase()));
  return(  
    <div className="App">
     <h1 className='h1A'>Monsters Rolodex</h1>
      <SearchBox   placeholder="search monster" handleChange={e => setSearchField(e.target.value)}/>
      <CardList Monsters={filterMonsters}/>
    </div>
  );
}

/*class App extends React.Component() {
  constructor(){
    super();
    this.state ={
      monsters:[]
    };  
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( (users) => this.setState({ monsters: users}));  
  
  }
  render(){
    return (
      <div className="App">
       { this.state.monsters.map(monster =>(
       <h1 key={monster.id}>{monster.name}</h1>
       ))}
      </div>
    );
  } 
}*/

export default App;
