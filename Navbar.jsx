import React from 'react'
import { Link } from "react-router-dom";


class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar bg-base-100">
            {/* <div className="flex-1">
              <a className="btn  normal-case text-xl">beranda</a>
            </div> */}
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
              <Link to="/"><li><a>Beranda</a></li></Link>
              <Link to="/tentangsaya"><li><a>About</a></li></Link>
              <Link to="/karya"><li><a>Menu</a></li></Link>
              <Link to="/kontak"><li><a>Kontak</a></li></Link>
              <Link to="/gallery"><li><a>Gallery</a></li></Link>
              </ul>
            </div>
          </div>

        )
    }
}

export default Navbar;