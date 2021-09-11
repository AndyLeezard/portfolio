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

const br = (<div className="textContainer"><br/></div>);

export const importComponent = (input:React_ImportProps) => {
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
                <span className="body text-blue-400">const</span>
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
                <span className="body text-blue-400">=&#62;{blanks(1)}</span>
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
                <span className="body text-blue-400">div</span>
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
                <span className="body text-blue-400">div</span>
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

export const csharp_namespace = (name:string[]) => {
    const item = name.map((value,index:number)=>{
        return (
            <>
            <span key={index} className="body text-vscode_green">{value}</span>
            <span className="body text-white">{index<name.length-1 ? '.':''}</span>
            </>
    )})
    return (
        <div className="">
            <br/>
            <span className="body text-blue-400">namespace </span>
            {item}
            <br/>
            <span className="body text-white"> &#123;</span>
        </div>
    )
}

export const csharp_class = (name:string) => {
    return (
        <>
            <br/>
            <span>{blanks(8)}</span>
            <span className="body text-blue-400">public class </span>
            <span className="body text-vscode_green">{name}</span>
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
                <span key={index} className="body text-vscode_var">{value}</span>
                </>
            )
        })
    }
    const item = obj_param.obj.map((value,index:number)=>{
        if(value.url){
            return (
                <>
                <a className="rounded hover:bg-gray-600" href={value.url} target="_blank" rel="noopener noreferrer">
                <span key={index} className="body text-vscode_var">{value.name}</span>
                </a>
                <span className="body text-white">{index<obj_param.obj.length-1 ? ', ':''}</span>
                </>
            )
        }else{
            return (
                <>
                <span key={index} className="body text-vscode_var">{value.name}</span>
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
        {obj_param.class && <span className="body text-vscode_green">{obj_param.class}{(!obj_param.varIsArray) && ' '}</span>}
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
                <span className="body text-vscode_green">{obj_param.update.class}</span>
                <span className="body text-white">()</span>
                </>
            )}
            {(obj_param.update.var && !obj_param.update.class) && (
                <span className="body text-vscode_var"> {obj_param.update.var}</span>
            )}
            {(obj_param.update.class && obj_param.update.var) && (
                <>
                <span className="body text-vscode_var">{obj_param.update.var}</span>
                {obj_param.update.extension && mapped(obj_param.update.extension)}
                <span className="body text-white">.</span>
                <br className="flex lg:hidden"/>
                <span className="body text-vscode_function">{obj_param.update.class}</span>
                {obj_param.update.parameter ? (
                    <>
                    <span className="body text-white">(</span>
                    {obj_param.update.parameter.includes('@') ? (
                        <span className="body text-vscode_string">"{obj_param.update.parameter.substr(1)}"</span>
                    ):(
                        <span className="body text-vscode_var">{obj_param.update.parameter}</span>
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
        {obj_param.class && <span className="body text-vscode_green">{obj_param.class} </span>}
        {obj_param.func && <><span className="body text-vscode_function">{obj_param.func}</span></>}
        {obj_param.parameter ? (
                <>
                <span className="body text-white">(</span>
                {obj_param.parameter.includes('@') ? (
                    <span className="body text-vscode_string">"{obj_param.parameter.substr(1)}"</span>
                ):(
                    <span className="body text-vscode_var">{obj_param.parameter}</span>
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
                    <span key={index} className="body text-vscode_string">"{value.substr(1)}"</span>
                ):(
                    <span key={index} className="body text-vscode_var">{value}</span>
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
                <span className="body text-vscode_green">{obj_param.args[index].class} </span>
            )}
            {mapped(obj_param.args[index].var)}
            {obj_param.args[index].method && (
                <>
                <span className="body text-white">.</span>
                <span className="body text-vscode_function">{obj_param.args[index].method}</span>
                <span className="body text-white">()</span>
                </>
            )}
            {obj_param.args[index].in && (
                <>
                <span className="body text-vscode_mauve"> in</span>
                <span className="body text-vscode_var"> {obj_param.args[index].in}</span>
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
        <span className="body text-vscode_mauve">{obj_param.kind}</span>
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