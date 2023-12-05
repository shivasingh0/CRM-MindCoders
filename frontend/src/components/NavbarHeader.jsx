import React from 'react'

const NavbarHeader = () => {
    return (
        <>
            <div className="nav-header">
                <a href="index.html" className="brand-logo">
                    <img src="images/logo.png" />
                </a>
                <div className="nav-control">
                    <div className="hamburger">
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default NavbarHeader