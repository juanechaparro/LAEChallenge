
import './App.css';
import Uuid from 'uuid/dist/v4'
import React,{useState, useEffect,useRef} from 'react'
import AddToDo from './Components/AddToDo'
import List from './Components/List';
import FillCats from './Components/FillCats';
import Filter from './Components/Filter';
function App() {

  const searchInput = useRef(null);
  const [ToDos, setToDos]  = useState([]);
  const [search, setSearch] = useState("");
   
  const handleSearch = () => {
        setSearch(searchInput.current.value);
   };
   const filteredToDos = ToDos.filter((toDo) => {
         return toDo.activity.toLowerCase().includes(search.toLowerCase());
       });
  const updateCats = (data) =>{
    let factsList = [];
    for (let i = 0 ; i< data.length; i++){
      let toDo ={
        activity: data[i].fact,
        id : Uuid(),
        checked: false
      }
      factsList.push(toDo);
    }
    setToDos([...ToDos, ... factsList])
  } 
  const handleCatFacts = (nFacts)=>{
   if (nFacts >0)
   {
    fetch(`https://catfact.ninja/facts?limit=${nFacts}`)
    .then((response) => response.json())
    .then((data) => updateCats(data.data))
   }
  }
  const onSubmit = (TD)=>{
    
      let toDo ={
        activity: TD,
        id : Uuid(),
        checked: false
      }
      setToDos([...ToDos, toDo] )
     

    
  }
 

  const remove = (TD)=>{
    setToDos(ToDos.filter(element => element !== TD))
  }
  const edit = (TDid)=>{
     let task = prompt('Ingrese la nueva descripcion para la actividas');
     const newToDos = ToDos.map((toDo)=>{
       if (toDo.id === TDid ){
         return{
           ...toDo,
           activity:task
         }
       }
       return toDo
     })
     setToDos(newToDos);
  }
  const check = (TDid)=>{
    const newToDos = ToDos.map((toDo)=>{
      if (toDo.id === TDid && !toDo.checked ){
        return{
          ...toDo,
          checked:true
        }
      }
      else if  (toDo.id === TDid && toDo.checked ){
        return{
          ...toDo,
          checked:false
        }
      }
      return toDo
    })
    setToDos(newToDos);
 }
  return (
    <div className="App">
       <h1>ToDo List</h1>
       <div className = "section1">
       <Filter
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <FillCats handleCatFacts ={handleCatFacts}/>
       </div>
     
      <AddToDo onSubmit={onSubmit}></AddToDo>
      <List ToDos= {filteredToDos} del ={remove} edit ={edit} check ={check}/>
     
    </div>
  );
}

export default App;
