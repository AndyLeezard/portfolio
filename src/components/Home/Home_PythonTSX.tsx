import React from 'react'
import Env from '../../env.json';
import { useHistory } from 'react-router-dom';
import { py_importComponent, py_def_declare, py_def_body, blanks } from '../../global';
import useMediaQuery from '@material-ui/core/useMediaQuery';
    
const Home_CsharpTSX: React.FC = () => {
    const history = useHistory();
    const widthFallback = useMediaQuery('(max-width:800px)');

    return (
        <div className="mainContainer">
            <p className="body text-vscode_comment">{"Current section : HOME".commentSharp()}</p>
            <p className="body text-vscode_comment">{"Current theme : Python".commentSharp()}</p>
            {py_importComponent({target:{name:'Personal website'},as:{name:'render',is_a_function:false}})}
            <p className="body text-vscode_comment">{"Portfolio / experience / education".commentSharp()}</p>
            {py_importComponent({source:{name:`${widthFallback ? (Env.university_fallback):(Env.university)}`,url:Env.url_university},target:{name:'Economics'},as:{name:'BSc',is_a_function:false}})}
            {py_importComponent({target:{name:'Data_Analysis'},as:{name:`${widthFallback ? (Env.major_fallback):(Env.major)}`,is_a_function:false}})}
            {py_importComponent({target:{name:'Full_stack'},as:{name:'Career-Professional-Dev',is_a_function:false}})}
            <br/>
            <p className="body text-vscode_function">@render</p>
            {py_def_declare({name:'view_sections',params:['req']})}
            <p className="body text-vscode_string">{blanks(4)+" renders the selected section ".comment_py()}</p>
            {py_def_body({
                return:true,
                indent:4,
                args:(
                    <>
                        <span className="body text-vscode_function">render</span>
                        <span className="body text-white">(</span>
                        <span className="body text-vscode_var">req</span>
                        <span className="body text-white">,</span>
                        <span className="body text-vscode_string">'AndyLee_Dev.html'</span>
                        <span className="body text-white">, &#123;</span>
                        <span className="body text-vscode_string">'current_section'</span>
                        <span className="body text-white">:</span>
                        <span className="body text-vscode_var">req</span>
                        <span className="body text-white">.section</span>
                        <span className="body text-white">)</span>
                    </>
                )
            })}
        </div>
    )
}

export default Home_CsharpTSX
