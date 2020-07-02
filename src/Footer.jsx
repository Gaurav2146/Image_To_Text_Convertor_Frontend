import React from "react";
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer = ()=>{

    return(

<>
<footer  style={{clear:"both",padding:"5px",textAlign:"center",backgroundColor:"lightblue",borderRadius:"5px"}}>

<h4 style={{ fontSize:"small",color:"brown"}}> Copyright <CopyrightIcon style={{ fontSize:"small",color:"brown"}}/> {new Date().getFullYear()}</h4>

</footer>

</>);

}

export default Footer;