import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Notes from './Notes'

function App() {

  const [notes,updateNotes] = useState([]);

  const[demo,updatedemo] = useState(false);


  const addValue = (val)=>{
   
      updateNotes((prevVal)=>{

          return [...prevVal,val];

      })
  }

  const Delete = (id)=>{
   
    updateNotes((prevVal)=>{

       return prevVal.filter((input,index)=> index!=id)

    })
}

const demofun = (event)=>{

  event.preventDefault();

    updatedemo(false);
    
}

  return (
            <>
              <div  onDoubleClick={demofun}  style={{backgroundColor:"lightblue"}}> 
                 <Header/>
                 <div style={{minHeight:"490px",backgroundColor:"lightblue"}}>

                  <div className="Gau1" style={{backgroundColor:"lightblue"}}>
                     
                  <CreateNote  submit={addValue}/> 

                  </div>

                  <br/><br/><br/>
                          
                  <div className="note" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
                   {notes.map((data,index)=>{
                       
                     

                      return (
                      <>
                      <Notes   key={index}  id={index} value={data} onpress={Delete}/>
                     
                      </>
                      
                      )

                       }
                    
                       
                  
                   ) }
                   </div>

                    </div>      
                  

                <Footer/>
              </div>
            </>

          );
}

export default App;
