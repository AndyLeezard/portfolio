import { blanks } from '../global';

export interface Props_Py_Import {
    source?:{name:string,url?:string}
    target:{name:string,url?:string}
    as?:{name:string,url?:string,is_a_function:boolean}
}

export const py_importComponent = (input:Props_Py_Import):JSX.Element => {
    return (
        <div className="textContainer">
            <p>
                {input.source && 
                    <>
                    <span className="body text-vscode_mauve">from{blanks(1)}</span>
                    <span className="body text-vscode_green">{input.source.name.toLowerCase()+blanks(1)}</span>
                    </>
                }
                <span className="body text-vscode_mauve">import{blanks(1)}</span>
                {input.target.url ? (
                    <a href={input.target.url} target="_blank" rel="noopener noreferrer">
                    <span className="body text-vscode_green rounded hover:bg-gray-600">{input.target.name.toLowerCase()}</span>
                    </a>
                ):(
                    <span className="body text-vscode_green rounded hover:bg-gray-600">{input.target.name.toLowerCase()}</span>
                )}
                {input.as &&
                    <>
                    <span className="body text-vscode_mauve">{blanks(1)}as</span>
                    <span className={`body ${input.as.is_a_function ? ('text-vscode_function'):('text-vscode_green')}`}>{blanks(1)+input.as.name}</span>
                    </>
                }
            </p>
        </div>
    )
}

export const py_def_declare = (input:{name:string,params?:string[]}):JSX.Element => {
    return (
        <div className="textContainer">
            <p>
                <span className="body text-vscode_vartype">def{blanks(1)}</span>
                <span className="body text-vscode_function">{input.name}</span>
                <span className="body text-white">(
                    {input.params && input.params.map((value,index)=>{
                        return(<>
                        <span className="body text-vscode_var">{value}</span>
                        <span className="body text-white">{input.params && index<input.params.length-1 ? `,${blanks(1)}`:''}</span>
                        </>)
                    })}
                ):</span>
            </p>
        </div>
    )
}

export const py_def_body = (input:{return?:boolean,indent?:number,args:JSX.Element}):JSX.Element => {
    return (
        <div className="textContainer">
            <span>{blanks(input.indent ?? 0)}</span>
            <p>
                <span className="body text-vscode_vartype">return{blanks(1)}</span>
                {input.args}
            </p>
        </div>
    )
}