import React from 'react'
import Nav1 from './Nav1.js'
import  './style.css'
function Header() {
    return (
        <div className="dheader">
            <div className="row">            
            <div className="col-7">
              <img src="/media/SpaceX-Logo.svg" alt="Space X SVG" />
            </div>
            <div className="col-5">
             <Nav1 />
            </div>
          </div>
        </div>
    )
}

export default Header
