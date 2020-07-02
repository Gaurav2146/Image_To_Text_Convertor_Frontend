import React from "react";
import { useState } from "react";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


const CreateNote = (props)=>{


const[val,updateval] = useState({

    text:"",
    content:""
})

const[demo,updatedemo] = useState(false);


    const update = (event)=>
    {

       const {name,value} = event.target;

       updateval((prevVal)=>{
                   
            return { ...prevVal, [name]:value }
       })

    }

    const submit = (event)=>{

        event.preventDefault();
 
          props.submit(val);

          updateval({text:"", content:""});
          
    }

    const demofun = (event)=>{

        event.preventDefault();
 
          updatedemo(true);
          
    }

    const demofun2 = (event)=>{

        event.preventDefault();
 
          updatedemo(false);
          
    }


 return(
      <>

                   <div   onDoubleClick={demofun2}  onClick={demofun} className="Gau"  style={{display:"flex" , justifyContent:"center",marginTop:"55px"}}>  
                  {demo?  <form>

                          <input  className="input1" type="text" name="text" placeholder="Tittle" onChange={update} value={val.text}/><br/>

                          <textarea autoComplete="on" className="input" rows="2" column="2" name="content" onChange={update} value={val.content} placeholder="Enter something"/>
                           <br/>

                           
                           <Button  variant="contained" color="primary"  onClick={submit}  className="button" startIcon={<SaveIcon />} >save notes  </Button>
                          
                       </form> : <p   style={{fontSize:"x-small",marginRight:"180px",textShadow:"0.5px 0.5px 0.5px black", fontWeight:"bolder",color:"brown"}}> Add to sticky notes ............................</p> }
                     </div>
      
</>

 );
}


export default CreateNote;