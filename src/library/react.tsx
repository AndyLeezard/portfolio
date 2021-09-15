import { br, blanks } from '../global';

export interface Props_React_Import {
    starAs?:boolean
    whole?:{name:string,url?:string}[]
    destructured?:{name:string,url?:string}[]
    source:{name:string,url?:string}
}

export const react_importComponent = (input:Props_React_Import) => {
    return (
        <div className="textContainer">
            <p>
                <span className="body text-vscode_mauve">import{blanks(1)}</span>
                {input.starAs && <span className="body text-vscode_var">*{blanks(1)}</span>}
                {input.starAs && <span className="body text-vscode_mauve">as{blanks(1)}</span>}
                {input.whole && input.whole.map((value,index:number)=>{
                    if(value.url){
                        return(
                        <a href={value.url} target="_blank" rel="noopener noreferrer">
                        <span key={index} className="body text-vscode_var rounded hover:bg-gray-600">{value.name}</span>
                        <span className="body text-white">{input.destructured ? (input.destructured.length>0 ? ',':''):(input.whole ? index<input.whole.length-1 && ',':'')}{blanks(1)}</span>
                        </a>
                        )
                    }else{
                        return(
                        <>
                        <span key={index} className="body text-vscode_var">{value.name}</span>
                        <span className="body text-white">{input.destructured ? (input.destructured.length>0 ? ',':''):(input.whole ? index<input.whole.length-1 && ',':'')}{blanks(1)}</span>
                        </>
                        )
                    }
                })}
                {input.destructured && input.destructured.length>0 && <span className="body text-white">&#123;{blanks(1)}</span>}
                {input.destructured && input.destructured.map((value,index:number)=>{
                    if(value.url){
                        return(
                            <>
                            <a href={value.url} target="_blank" rel="noopener noreferrer">
                            <span key={index} className="body rounded hover:bg-gray-600 text-vscode_var">{value.name}</span>
                            </a>
                            <span className="body text-white">{input.destructured && index>input.destructured.length-2 ? '':','}{blanks(1)}</span>
                            </>
                        )
                    }else{
                        return(
                            <>
                            <span key={index} className="body text-vscode_var">{value.name}</span>
                            <span className="body text-white">{input.destructured && index>input.destructured.length-2 ? '':','}{blanks(1)}</span>
                            </>
                        )
                    }
                })}
                {input.destructured && input.destructured.length>0 && <span className="body text-white">&#125;{blanks(1)}</span>}
                <span className="body text-vscode_mauve">from{blanks(1)}</span>
                {input.source.url ? (
                    <span className="body text-vscode_string rounded hover:bg-gray-600">
                    <a href={input.source.url} target="_blank" rel="noopener noreferrer">
                    '{input.source.name}'
                    </a>
                    </span>
                ):(
                    <span className="body text-vscode_string">'{input.source.name}'</span>
                )}
                <span className="body text-white">;</span>
            </p>
        </div>
    )
}

export const react_arrow = (name:string) => {
    return (
        <>
            {br}
            <p className="textContainer">
                <span className="body text-vscode_vartype">const</span>
                <span className="body text-vscode_function">{blanks(1)+name}</span>
                <span className="body text-white">: &#60;</span>
                <span className="body text-vscode_green">React</span>
                <span className="body text-white">.</span>
                <span className="body text-vscode_green">FC</span>
                <span className="body text-white">&#62; = ()</span>
                <span className="body text-white">:</span>
                <span className="body text-vscode_green">JSX</span>
                <span className="body text-white">.</span>
                <span className="body text-vscode_green">Element{blanks(1)}</span>
                <span className="body text-vscode_vartype">=&#62;{blanks(1)}</span>
                <span className="body text-white">&#123;</span>
            </p>
            <p className="textContainer">
                <span>{blanks(4)}</span>
                <span className="body text-vscode_mauve">return{blanks(1)}</span>
                <span className="body text-white">&#40;</span>
            </p>
            <p className="textContainer">
                <span>{blanks(8)}</span>
                <span className="body text-gray-200">&#60;</span>
                <span className="body text-vscode_vartype">div</span>
                <span className="body text-gray-200">&#62;</span>
            </p>
        </>
    )
}

export const react_arrow_fin = (name:string) => {
    return(
        <>
            <p className="textContainer">
                <span className="body text-gray-200">{blanks(4)}&#60;</span>
                <span className="body text-gray-200">&#47;</span>
                <span className="body text-vscode_vartype">div</span>
                <span className="body text-gray-200">&#62;</span>
            </p>
            <p className="textContainer">
                <span className="body text-white">&#41;</span>
                <span className="body text-white">&#125;</span>
            </p>
            {br}
            <p className="textContainer">
                <span className="body text-vscode_mauve">export default</span>
                <span className="body text-vscode_function">{blanks(1)+name}</span>
                <span className="body text-white">;</span>
            </p>
        </>
    )
}

export const react_component = (name:string,_onClick:{():void}) => {
    return(
        <div className="textContainer">
            <span>{blanks(12)}</span>
            <span className="hoverLink" onClick={()=>_onClick()}>
                <span className="body text-gray-200">&#60;</span>
                <span className="body text-vscode_green">{name}</span>
                <span className="body text-gray-200">&#47;</span>
                <span className="body text-gray-200">&#62;</span>
            </span>
        </div>
    )
}