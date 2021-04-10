import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link';

function Header() {
    return(
        <div>
        <AppBar className = "Header" position="static" style={{background: '#a9a9a9', position: 'absolute', left: '0px', top: '0px'}}>
            <Toolbar>
                <div className="HomeButton">
                    <button> 
                        <Link href="/">
                            <a>Back to Homepage</a>
                        </Link>
                    </button>
                </div>
                <Typography variant="title" color="inherit">
                Simple NavBar - react --::-- no search mechanism yet
                </Typography>
                <div className="SearchBar">
                    <input placeholder={"Search Box"} />
                    <button type="submit">Search</button>
                </div>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default Header;