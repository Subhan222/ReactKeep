import React from 'react';
import './Note.css';
import { Button } from '@material-ui/core';


function Note(props){

let colr = ["cornflowerblue", "pink" , "salmon" , "orange", "aquamarine", "palevioletred"];

let ran=0;

ran = Math.floor(Math.random()*9);




    return(
        <>
            <div className='marg'  style={{backgroundColor: colr[ran]}}>
    
                    <h3>{props.tt.value}</h3>
                    <pre>{props.tt.memo}</pre>
                    <Button variant="text" className='minus' onClick={()=>{props.funk(props.id)}}>
                    <p>_</p>
                    </Button>

                
    
            </div>
        </>
    
    )
}

export default Note;