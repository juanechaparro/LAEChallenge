import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/List.css'
const List = ({ToDos, del, edit,check}) => {
    
   
   const handleClick = (TD)=>{

     del(TD)
   
   }
   const handleEdit = (TD)=>{
     edit(TD)
    }
    const handleCheck = (TDid)=>{
      check(TDid)
     }

    return (
        <div className="TDList" >
             <ul className="list-unstyled">
              {ToDos.map((toDo)=>{
                return (<li key ={toDo.id}
                >
                     <div className="ListItem list-group-item-action" >
                     <h5>{toDo.activity} </h5>
                   
                      
                      <div className = "buttons">
                      <button  className="btn btn-success" type= "button" onClick ={e=>handleCheck(toDo.id)} > Check </button> 
                      <button  className="btn btn-primary" type= "button" onClick ={e=>handleEdit(toDo.id)} > Editar </button> 
                      <button className ="btn btn-danger" type= "button" onClick ={e=>handleClick(toDo)} > Eliminar </button> 
                      </div>
                      
                      {toDo.checked ? '✅ check' : ''} 
                     </div>
                    

                </li>)

            })}
            </ul>
        </div>
    )
}

export default List

// 