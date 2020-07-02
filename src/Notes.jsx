import React, { useState } from "react";

import Button from '@material-ui/core/Button';

import DeleteIcon from '@material-ui/icons/Delete';

const Notes = (props)=>{

    const deleteFun = ()=>{

        props.onpress(props.id);
    }
   
    return(
                         <>

                         <div className="Notes" style={{backgroundColor:"rgb(224, 100, 197)",fontSize:"x-small",display:"" }} >
                            <h4 style={{padding:"5px" ,color:"rgb(68, 23, 23)"}}> # {props.value.text} </h4>

                            <p h style={{ padding:"5px" , color:"rgb(68, 23, 23)"}} >* {props.value.content} </p>

                            <DeleteIcon className="del" style={{ marginLeft:"25px" , color:"rgb(221, 80, 80)"}} onClick={deleteFun}>  </DeleteIcon>
                         </div>

                        </>);

}

export default Notes;