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
    if(size<0){size=0;}
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
            <br/>
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
            <br/>
            <span>{blanks(8)}</span>
            <span className="body text-white">&#123;</span>
        </>
    )
}

export const csharp_object = (obj_param:{_onClick?:any,indent?:number,scope?:string[],vartype?:string,class?:string,varIsArray?:boolean[],obj:{name?:string,url?:string}[],update?:{operator:string,scope?:string,class?:string,var?:string,parameter?:string,extension?:string[]}}) => {
    let _indent = 8 * (obj_param.indent ?? 0)
    const mapped = (input:string[]|undefined) => {
        return input?.map((value,index)=> {
            return(
                <>
                <span className="body text-white">.</span>
                <span key={index} className="body text-vscode_var-light">{value}</span>
                </>
            )
        })
    }
    const item = obj_param.obj.map((value,index:number)=>{
        if(value.url){
            return (
                <>
                <a className="rounded hover:bg-gray-600" href={value.url} target="_blank" rel="noopener noreferrer">
                <span key={index} className="body text-vscode_var-light">{value.name}</span>
                </a>
                <span className="body text-white">{index<obj_param.obj.length-1 ? ', ':''}</span>
                </>
            )
        }else{
            return (
                <>
                <span key={index} className="body text-vscode_var-light">{value.name}</span>
                <span className="body text-white">{index<obj_param.obj.length-1 ? ', ':''}</span>
                </>
            )
        }
    })
    const rendering = (
        <>
        {obj_param.scope && obj_param.scope.map((value,index:number)=>{
            return(
                <span key={index} className="body text-blue-400">{value} </span>
            )
        })}
        {obj_param.vartype && <span className="body text-blue-400">{obj_param.vartype}{(!obj_param.varIsArray) && ' '}</span>}
        {obj_param.class && <span className="body text-vscode_green-light">{obj_param.class}{(!obj_param.varIsArray) && ' '}</span>}
        {(obj_param.varIsArray !== undefined) && <span className="body text-white">{"[]".repeat(obj_param.varIsArray.length)} </span>}
        {item}
        {obj_param.update && (
            <>
            <span className="body text-white"> {obj_param.update.operator} </span>
            {obj_param.update.scope && (
                <span className="body text-blue-400">{obj_param.update.scope} </span>
            )}
            {(obj_param.update.class && !obj_param.update.var) && (
                <>
                <span className="body text-vscode_green-light">{obj_param.update.class}</span>
                <span className="body text-white">()</span>
                </>
            )}
            {(obj_param.update.var && !obj_param.update.class) && (
                <span className="body text-vscode_var-light"> {obj_param.update.var}</span>
            )}
            {(obj_param.update.class && obj_param.update.var) && (
                <>
                <span className="body text-vscode_var-light">{obj_param.update.var}</span>
                {obj_param.update.extension && mapped(obj_param.update.extension)}
                <span className="body text-white">.</span>
                <span className="body text-vscode_function-light">{obj_param.update.class}</span>
                {obj_param.update.parameter ? (
                    <>
                    <span className="body text-white">(</span>
                    {obj_param.update.parameter.includes('@') ? (
                        <span className="body text-vscode_string-light">"{obj_param.update.parameter.substr(1)}"</span>
                    ):(
                        <span className="body text-vscode_var-light">{obj_param.update.parameter}</span>
                    )}
                    <span className="body text-white">)</span>
                    </>
                ):(
                    <span className="body text-white">()</span>
                )}
                </>
            )/* in this case it's a method */}
            </>
        )}
        </>
    )
    return (
        <>
            {obj_param._onClick ? (
                <>
                <br/>
                <span>{blanks(16 + _indent)}</span>
                {typeof obj_param._onClick === "string" ? (
                    <a className="rounded hover:bg-gray-600" href={obj_param._onClick} target="_blank" rel="noopener noreferrer">
                        {rendering}
                    </a>
                ):(
                    <span className="rounded hover:bg-gray-600 link" onClick={()=>obj_param._onClick()}>
                        {rendering}
                    </span>
                )}
                <span className="body text-white">;</span>
                </>
            ):(
                <>
                <br/>
                <span>{blanks(16 + _indent)}</span>
                {rendering}
                <span className="body text-white">;</span>
                </>
            )}
        </>
    )
}

export const csharp_func = (obj_param:{indent?:number,scope?:string[],class?:string,func:string,parameter?:string,_onClick?:{():void}}) => {
    let _indent = 8 * (obj_param.indent ?? 0)
    const item = (
        <>
        {obj_param.scope && obj_param.scope.map((value,index:number)=>{
            return(
                <span key={index} className="body text-blue-400">{value} </span>
            )
        })}
        {obj_param.class && <span className="body text-vscode_green-light">{obj_param.class} </span>}
        {obj_param.func && <><span className="body text-vscode_function-light">{obj_param.func}</span></>}
        {obj_param.parameter ? (
                <>
                <span className="body text-white">(</span>
                {obj_param.parameter.includes('@') ? (
                    <span className="body text-vscode_string-light">"{obj_param.parameter.substr(1)}"</span>
                ):(
                    <span className="body text-vscode_var-light">{obj_param.parameter}</span>
                )}
                <span className="body text-white">)</span>
                </>
            ):(
                <span className="body text-white">()</span>
        )}
        </>
    )
    const handleEvent = () => {
        if(obj_param._onClick){
            obj_param._onClick();
        }
    }
    return (
        <>
            <br/>
            <span>{blanks(16 + _indent)}</span>
            {obj_param._onClick ? (
                <span className="rounded hover:bg-gray-600 link" onClick={()=>handleEvent()}>
                    {item}
                </span>
            ):(
                item
            )}
            {(obj_param.scope || obj_param.class) ? (
                <>
                <br/>
                <span>{blanks(16)}</span>
                <span className="body text-white">&#123;</span>
                </>
            ):(
                <span className="body text-white">;</span>
            )}
        </>
    )
}

export const csharp_statement = (obj_param:{closure?:boolean,kind:string,indent?:number,args:{class?:string,var?:string[],in?:string,method?:string,operator?:string}[]}) => {
    let _indent = 8 * (obj_param.indent ?? 0)
    const mapped = (input:string[]|undefined) => {
        return input?.map((value,index)=> {
            return(
                <>
                {value.includes('@') ? (
                    <span key={index} className="body text-vscode_string-light">"{value.substr(1)}"</span>
                ):(
                    <span key={index} className="body text-vscode_var-light">{value}</span>
                )}
                <span className="body text-white">{index<input.length-1 ? '.':''}</span>
                </>
            )
        })
    }
    const item = (index:number) => {
        return (obj_param.args[index].var) ? (
            <>
            {obj_param.args[index].operator==="!" && (
                <>
                <span className="body text-white">{obj_param.args[index].operator}</span>
                </>
            )}
            {obj_param.args[index].class && (
                <span className="body text-vscode_green-light">{obj_param.args[index].class} </span>
            )}
            {mapped(obj_param.args[index].var)}
            {obj_param.args[index].method && (
                <>
                <span className="body text-white">.</span>
                <span className="body text-vscode_function-light">{obj_param.args[index].method}</span>
                <span className="body text-white">()</span>
                </>
            )}
            {obj_param.args[index].in && (
                <>
                <span className="body text-vscode_mauve-light"> in</span>
                <span className="body text-vscode_var-light"> {obj_param.args[index].in}</span>
                </>
            )}
            {(obj_param.args[index].operator && obj_param.args[index].operator!=="!") && (
                <>
                <span className="body text-white"> {obj_param.args[index].operator} </span>
                </>
            )}
            </>
        ): <></>                              
    }
    const iterate = () => {
        let res = Array();
        for (let i = 0; i < obj_param.args.length; i++) {
            res.push(item(i))
        }
        return(
            res.map((value)=>{return value})
        )
    }
    return(
        <>
        <br/>
        <span>{blanks(16 + _indent)}</span>
        {obj_param.closure && <span className="body text-white">&#125;</span>}
        <span className="body text-vscode_mauve-light">{obj_param.kind}</span>
        <span className="body text-white">(</span>
        {iterate()}
        <span className="body text-white">)&#123;</span>
        </>
    )
}

export const cshartp_closure = (input:string,indent:number) => {
    return(
        <>
        <br/>
        <span>{blanks(16 + (8 * indent))}</span>
        <span className="body text-white">{input}</span>
        </>
    )
}