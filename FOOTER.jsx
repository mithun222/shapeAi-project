import React from "react";
var currYear= new Date().getFullYear();

function Footer() {
  return <div>
    <footer>
      <p>copyright @ {currYear}</p>
    </footer>
  </div>
}

export default Footer;