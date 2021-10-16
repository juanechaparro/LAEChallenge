
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const FillCats = ({ handleCatFacts }) => {
    const [text, setText] = useState('');
    const handleSubmit = (event)=>{
        event.preventDefault();
        handleCatFacts(text);
      
      }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label >Numero de frases aleatorias de gatos: </label>
            <input  style={{width: "50px"}} name="cats"  onChange ={e =>setText(e.target.value)}  ></input>
            <button className="btn btn-primary"> Submit</button>
            </form>
            
        </div>
    )
}

export default FillCats
