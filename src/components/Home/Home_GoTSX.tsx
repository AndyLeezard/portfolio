import React from 'react'
import Env from '../../env.json';
import { useHistory } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Home_CsharpTSX: React.FC = () => {
    const history = useHistory();
    const widthFallback = useMediaQuery('(min-width:800px)');

    return (
        <div className="mainContainer">
            <p className="body text-vscode_comment">{"Current section : HOME".doubleSlash()}</p>
            <p className="body text-vscode_comment">{"Current theme : Go".doubleSlash()}</p>
        </div>
    )
}

export default Home_CsharpTSX
