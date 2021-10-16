
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
const AddToDo = ({ onSubmit }) => {
    const [text, setText] = useState('');
    const handleSubmit = (event)=>{
        event.preventDefault();
        onSubmit(text);
        
      }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label ><b> Agregar actividad a la lista  de tareas: </b> </label>
            <br />
            <textarea  name="toDo"  onChange ={e =>setText(e.target.value)}  cols="30" rows="10"></textarea>
            <button style={{margin: "10px"}} className="btn btn-primary"> Submit </button>
            </form>
            
        </div>
    )
}

export default AddToDo
