import React from "react";
import "./Footer.css";

function Footer() {

    let year = new Date();


 return(<>

 <div className="end">

    <p className="ft">Copyright © {year.getUTCFullYear()}</p>
 </div>

 </>);   
}

export default Footer;