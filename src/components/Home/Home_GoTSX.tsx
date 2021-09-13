import React from 'react'
import Env from '../../env.json';
import { useHistory } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { go_package, go_import, go_structure, br, closure } from '../../global';

const Home_CsharpTSX: React.FC = () => {
    const history = useHistory();
    const widthFallback = useMediaQuery('(max-width:800px)');

    return (
        <div className="mainContainer">
            <p className="body text-vscode_comment">{"Current section : HOME".doubleSlash()}</p>
            <p className="body text-vscode_comment">{"Current theme : Go".doubleSlash()}</p>
            {go_package("andy_lee")}
            {br}
            {go_import([
                {name:`${widthFallback ? (Env.university_fallback):(Env.university)}/BSc/Economics`,url:Env.url_university},
                {name:`${widthFallback ? (Env.major_target_fallback):(Env.major_target)}/${widthFallback ? (Env.major_fallback):(Env.major)}`},
                {name:`${widthFallback ? (Env.career_fallback):(Env.career)}/fullstack`}
            ])}
            {br}
            {go_structure('Personal_website',[
                {name:"About_Me",type:"section",json:"about_me"},
                {name:"Portfolio",type:"section",json:"portfolio"},
            ])}
            {closure('}',0)}
        </div>
    )
}

export default Home_CsharpTSX
