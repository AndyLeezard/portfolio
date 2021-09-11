import React from 'react'
import Env from '../../env.json';
import { useHistory } from 'react-router-dom';
// import { } from '../../global';

const Home_CsharpTSX: React.FC = () => {
    const history = useHistory();

    return (
    <div className="max-w-full items-center">
        <div className="w-6/12 mx-auto border-2 p-4 rounded-lg">
            <p className="body text-vscode_comment-light">{"Current section : HOME".commentSharp()}</p>
            <p className="body text-vscode_comment-light">{"Current theme : Python".commentSharp()}</p>
        </div>
    </div>
    )
}

export default Home_CsharpTSX
