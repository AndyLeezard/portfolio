export enum langs {
    REACT='react',
    PYTHON='python',
    CSHARP='csharp',
    GO='go',
    R='r'
}

export interface React_ImportProps {
    starAs?:boolean
    whole?:{name:string,url?:string}[],
    destructured?:{name:string,url?:string}[],
    source:{name:string,url?:string}
}

export interface Csharp_usingProps {
    url?:string
    source:string[]
}

const blanks = (size:number) => {
    return String.fromCharCode(160).repeat(size);
}

export const react_arrow = (name:string) => {
    return (
        <>
            <div className="textContainer">
                <br/>
                <span className="body text-blue-400">const </span>
                <span className="body text-vscode_function-light">{name}</span>
                <span className="body text-white">: &#60;</span>
                <span className="body text-vscode_green">React</span>
                <span className="body text-white">.</span>
                <span className="body text-vscode_green">FC</span>
                <span className="body text-white">&#62; = () </span>
                <span className="body text-blue-400">=&#62; </span>
                <span className="body text-white">&#123;</span>
            </div>
            <div className="textContainer">
                <span>{blanks(4)}</span>
                <span className="body text-vscode_mauve-light">return </span>
                <span className="body text-white">&#40;</span>
            </div>
            <div className="textContainer">
                <span>{blanks(8)}</span>
                <span className="body text-gray-200">&#60;</span>
                <span className="body text-blue-400">div</span>
                <span className="body text-gray-200">&#62;</span>
            </div>
        </>
    )
}

export const react_arrow_fin = (name:string) => {
    return(
        <>
            <div className="textContainer">
                <span className="body text-gray-200">{blanks(4)}&#60;</span>
                <span className="body text-gray-200">&#47;</span>
                <span className="body text-blue-400">div</span>
                <span className="body text-gray-200">&#62;</span>
            </div>
            <div className="textContainer">
                <span className="body text-white">&#41;</span>
                <span className="body text-white">&#125;</span>
            </div>
            <div className="textContainer">
                <br/>
                <span className="body text-vscode_mauve-light">export default </span>
                <span className="body text-vscode_function-light">{name}</span>
            </div>
        </>
    )
}

export const react_component = (name:string,_onClick:{():void}) => {
    return(
        <div className="hoverTextContainer">
            <span>{blanks(12)}</span>
            <div className="rounded hover:bg-gray-600 link" onClick={()=>_onClick()}>
                <span className="body text-gray-200">&#60;</span>
                <span className="body text-vscode_green">{name}</span>
                <span className="body text-gray-200">&#47;</span>
                <span className="body text-gray-200">&#62;</span>
            </div>
        </div>
    )
}

export const csharp_namespace = (name:string[]) => {
    const item = name.map((value,index:number)=>{
        return (
            <>
            <span key={index} className="body text-vscode_green-light">{value}</span>
            <span className="body text-white">{index<name.length-1 ? '.':''}</span>
            </>
    )})
    return (
        <>
            <br/>
            <span className="body text-blue-400">namespace </span>
            {item}
            <span className="body text-white"> &#123;</span>
        </>
    )
}

export const csharp_class = (name:string) => {
    return (
        <>
            <br/>
            <span>{blanks(8)}</span>
            <span className="body text-blue-400">public class </span>
            <span className="body text-vscode_green-light">{name}</span>
            <span className="body text-white"> &#123;</span>
        </>
    )
}

export const csharp_object = (obj_param:{scope?:string,vartype?:string,varIsArray?:boolean[],class?:string,name:string}) => {
    return (
        <>
            <br/>
            <span>{blanks(16)}</span>
            {obj_param.scope && <span className="body text-blue-400">{obj_param.scope} </span>}
            {obj_param.vartype && <span className="body text-blue-400">{obj_param.vartype} </span>}
            {(obj_param.varIsArray !== undefined) && <span className="body text-blue-400">{"[]".repeat(obj_param.varIsArray.length)} </span>}
            {obj_param.class && <span className="body text-vscode_green-light">{obj_param.class} </span>}
            <span className="body text-vscode_var-light">{obj_param.name}</span>
            <span className="body text-white">;</span>
        </>
    )
}