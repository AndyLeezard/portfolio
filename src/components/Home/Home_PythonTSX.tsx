import React from 'react'
import Env from '../../env.json';
import { useHistory } from 'react-router-dom';
// import { } from '../../global';

const Home_CsharpTSX: React.FC = () => {
    const history = useHistory();

    return (
        <div className="mainContainer">
            <p className="body text-vscode_comment">{"Current section : HOME".commentSharp()}</p>
            <p className="body text-vscode_comment">{"Current theme : Python".commentSharp()}</p>
        </div>
    )
}

export default Home_CsharpTSX
