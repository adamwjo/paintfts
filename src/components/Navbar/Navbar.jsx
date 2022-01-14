import React from 'react'

const Navbar = ({setView}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Paintfts</a>
            </div>
            <button onClick={() => setView("paintings")}>View Paintings</button>
            <button onClick={() => setView("home")}>Home</button>
        </nav>
    )
}

export default Navbar
