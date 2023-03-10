import React from 'react';
import { useState } from 'react';
import './Createnote.css';
import { Button } from '@material-ui/core';
import Note from './Note.jsx';
import Footer from './Footer';



function Createnote(){
    let [objj, setobj] = useState({
        value : "",
        memo : ""
    });
    let [arrr, setarr] = useState([]);
 
    let val, nam;
    
    let chnge = (event)=>{
        
        val = event.target.value;             
        nam = event.target.name;
        
       

        

            setobj((prev)=>{
                return {
                    ...prev,  [nam] : val 
                };
            })
            
    
        }



let clicked =()=>{
if(objj.value !== "" && objj.memo !== "")
{
    
    setarr((prev)=>{
        return [...prev , objj]
    })

    setobj((prev)=>{
        return{
        value : "",
        memo : ""
        }
    })

  }

}

let removed = (id)=>{

 setarr((prev)=>{


        return(
             prev.filter((value, index)=>{
                
                return id !== index;
            })
        )
 })


}

return(
    <>
        <div className="pcard">

            <div className="card">
                <input type="text" name="value"  placeholder="Title" value={objj.value} autoComplete="off" onChange={chnge}/>

                <textarea className="area" rows="50" col="" name="memo"  placeholder=" Write a note..." autoComplete="off" value={objj.memo} onChange={chnge}></textarea>

                <Button variant="text" onClick={clicked}>
                    <p>+</p>
                </Button>





            </div>

        </div>
            {/* =================================================== */}

            <div id = "main">

                <div id ="direc">

                    
                {arrr.map((va , index)=>{

                    

                        return( <Note
                        key ={index}
                        id = {index}
                        tt={va}
                        funk = {removed}
                        />)
                    

                 })            
                }
                </div>

             </div> 
    </>

)
}

export default Createnote;