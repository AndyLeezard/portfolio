import React from 'react'
import Env from '../../env.json';
import { useHistory } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { go_package, go_import, go_structure, br, closure, go_var_declare, go_func, go_object, conditionalIndent, go_statement, go_method } from '../../global';

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
            {br}
            {go_var_declare({name:'sections',type:'section',mappedTag:'section'})}
            {br}
            {go_func('getUserInfoHandler',[
                {name:'w',type:'http.ResponseWriter'},
                {name:'r',type:'http.Request',isAddress:true},
            ])}
            {go_object(['vars'],':=','mux.',conditionalIndent(widthFallback,8,4),(
                <>
                    <span className="body text-vscode_function">Vars</span>
                    <span className="body text-vscode_ivory">(r)</span>
                </>
            ))}
            {go_object(['id','err'],':=','strconv.',conditionalIndent(widthFallback,8,4),(
                <>
                    <span className="body text-vscode_function">Atoi</span>
                    <span className="body text-vscode_ivory">(vars[
                        <span className="text-vscode_string">{String.fromCharCode(34)+"id"+String.fromCharCode(34)}</span>
                    ])</span>
                </>
            ))}
            {go_statement('if',conditionalIndent(widthFallback,8,4),(
                <>
                    <span className="body text-vscode_ivory">err != </span>
                    <span className="body text-vscode_vartype">{String.fromCharCode(160)}nil</span>
                </>
            ))}
            {go_method('w',conditionalIndent(widthFallback,16,8),[{name:'WriteHeader',params:['http.StatusBadRequest']}])}
            {go_method('fmt',conditionalIndent(widthFallback,16,8),[{name:'Fprint',params:['w','err']}])}
            <span className="body text-vscode_mauve">{String.fromCharCode(160).repeat(conditionalIndent(widthFallback,8,4))}return</span>
            {closure('}',conditionalIndent(widthFallback,8,4))}
            {go_object(['section','ok'],':=','sections[id]',conditionalIndent(widthFallback,8,4))}
            {go_statement('if',conditionalIndent(widthFallback,8,4),(<span className="body text-vscode_ivory">!ok</span>))}
            {go_method('w',conditionalIndent(widthFallback,16,8),[{name:'WriteHeader',params:['http.StatusOK']}])}
            {go_method('fmt',conditionalIndent(widthFallback,16,8),[{name:'Fprint',params:['w','@no section id:','id']}])}
            <span className="body text-vscode_mauve">{String.fromCharCode(160).repeat(conditionalIndent(widthFallback,8,4))}return</span>
            {closure('}',conditionalIndent(widthFallback,8,4))}
            {closure('}',0)}
        </div>
    )
}

export default Home_CsharpTSX
