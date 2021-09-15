import React from 'react'
import Env from '../../env.json';
import { useHistory } from 'react-router-dom';
//import {  } from '../../global';
import useMediaQuery from '@material-ui/core/useMediaQuery';
    
const Home_RTSX: React.FC = () => {
    const history = useHistory();
    const widthFallback = useMediaQuery('(max-width:800px)');

    return (
        <div className="mainContainer">
            <p className="body_markdown text-vscode_comment">{"Current section : HOME".commentSharp()}</p>
            <p className="body_markdown text-vscode_comment">{"library Current theme : R Studio (Markdown: Monokai)".commentSharp()}</p>
            
        </div>
    )
}

export default Home_RTSX
