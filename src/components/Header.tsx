import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const Header = () => {
    const widthFallback = useMediaQuery('(max-width:800px)');

    if(widthFallback){
        return (
            <div className="header">
                <IconButton>
                    <MenuIcon style={{fill:"#D4D4D4"}}/>
                </IconButton>
            </div>
        )
    }else{
        return (
            <div className="header">
                <h1 className='headerFont text-gray-200'>Home.exe</h1>
                <h1 className='headerFont text-gray-200'>About.exe</h1>
                <h1 className='headerFont text-gray-200'>MyWorks.exe</h1>
                <div className="absolute self-end mr-12 w-36 h-9 -right-0 flex flex-row items-center justify-evenly">
                    <img className="h-7" src={'svgs/usa.svg'}/>
                    <img className="h-7" src={'svgs/france.svg'}/>
                    <img className="h-7" src={'svgs/korea.svg'}/>
                </div>
            </div>
        )
    }
}

export default Header;