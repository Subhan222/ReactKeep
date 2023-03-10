import React from "react";
import "./Header.css";
import log from './Images/klog.png';


function Header(){

        let sym = ">"
    return(
        <>
            <div className="head">
                  <img src={log} alt="Logo"  />  
                  <h2 className="keep">Subhan Keep</h2>
                  <h2 className="keep1">{sym}</h2>
                  <h2 className="note">Notes</h2>


            </div>

        </>
    )
}


export default Header;








