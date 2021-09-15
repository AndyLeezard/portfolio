import { blanks } from '../global';

export interface Props_Csharp_Using {
    url?:string
    source:string[]
}

export interface Props_Csharp_Statement {
    closure?:boolean,
    kind:string,
    indent?:number,
    args:{
        class?:string,
        var?:string[],
        in?:string,
        method?:string,
        operator?:string
    }[]
}

export const csharp_using = (input:Props_Csharp_Using) => {
    const item = input.source.map((value,index:number)=>{
        return (
            <>
            <span key={index} className="body text-vscode_green">{value}</span>
            <span className="body text-white">{index<input.source.length-1 ? '.':''}</span>
            </>
    )})
    return (
        <p className="textContainer">
        <span className="body text-vscode_mauve">using{blanks(1)}</span>
        {input.url ? (
            <a className="rounded hover:bg-gray-600" href={input.url} target="_blank" rel="noopener noreferrer">
                {item}
            </a>
        ):(
            item
        )}
        <span className="body text-white">;</span>
        </p>
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
        <>
        <br/>
        <div className="textContainer">
            <span className="body text-vscode_vartype">namespace{blanks(1)}</span>
            {item}
        </div>
        <p className="textContainer">
            <span className="body text-white"> &#123;</span>
        </p>
        </>
    )
}

export const csharp_class = (name:string,indent?:number) => {
    return (
        <>
        <div className="textContainer">
            <span>{blanks(indent ?? 0)}</span>
            <span className="body text-vscode_vartype">public class</span>
            <span className="body text-vscode_green">{blanks(1)+name}</span>
            <br/>
        </div>
        <p className="textContainer">
            <span>{blanks(indent ?? 0)}</span>
            <span className="body text-white">&#123;</span>
        </p>
        </>
    )
}

export const csharp_object = (obj_param:{_onClick?:any,indent?:number,scope?:string[],vartype?:string,class?:string,varIsArray?:boolean[],obj:{name?:string,url?:string}[],update?:{operator:string,scope?:string,class?:string,var?:string,parameter?:string,extension?:string[]}}) => {
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
                <span className="body text-white">{index<obj_param.obj.length-1 ? `,${blanks(1)}`:''}</span>
                </>
            )
        }else{
            return (
                <>
                <span key={index} className="body text-vscode_var">{value.name}</span>
                <span className="body text-white">{index<obj_param.obj.length-1 ? `,${blanks(1)}`:''}</span>
                </>
            )
        }
    })
    const rendering = (
        <>
        {obj_param.scope && obj_param.scope.map((value,index:number)=>{
            return(
                <span key={index} className="body text-vscode_vartype">{value+blanks(1)}</span>
            )
        })}
        {obj_param.vartype && <span className="body text-vscode_vartype">{obj_param.vartype}{(!obj_param.varIsArray) && blanks(1)}</span>}
        {obj_param.class && <span className="body text-vscode_green">{obj_param.class}{(!obj_param.varIsArray) && blanks(1)}</span>}
        {(obj_param.varIsArray !== undefined) && <span className="body text-white">{"[]".repeat(obj_param.varIsArray.length)+blanks(1)}</span>}
        {item}
        {obj_param.update && (
            <>
            <span className="body text-white">{blanks(1)+obj_param.update.operator+blanks(1)}</span>
            {obj_param.update.scope && (
                <span className="body text-vscode_vartype">{obj_param.update.scope+blanks(1)}</span>
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
                {/*<br className="flex lg:hidden"/>*/}
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
        <div className="textContainer">
            {obj_param._onClick ? (
                <>
                <span>{blanks(obj_param.indent ?? 0)}</span>
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
                <span>{blanks(obj_param.indent ?? 0)}</span>
                {rendering}
                <span className="body text-white">;</span>
                </>
            )}
        </div>
    )
}

export const csharp_func = (obj_param:{indent?:number,scope?:string[],class?:string,func:string,parameter?:string,_onClick?:{():void}}) => {
    const item = (
        <>
        {obj_param.scope && obj_param.scope.map((value,index:number)=>{
            return(
                <span key={index} className="body text-vscode_vartype">{value+blanks(1)}</span>
            )
        })}
        {obj_param.class && <span className="body text-vscode_green">{obj_param.class+blanks(1)}</span>}
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
            <div className="textContainer">
                <span>{blanks(obj_param.indent ?? 0)}</span>
                {obj_param._onClick ? (
                    <span className="rounded hover:bg-gray-600 link" onClick={()=>handleEvent()}>
                        {item}
                    </span>
                ):(
                    item
                )}
                {!(obj_param.scope || obj_param.class) && 
                    <span className="body text-white">;</span>
                }
            </div>
            <div className="textContainer">
                {(obj_param.scope || obj_param.class) && (
                    <>
                    <span>{blanks(obj_param.indent ?? 0)}</span>
                    <span className="body text-white">&#123;</span>
                    </>
                )}
            </div>
        </>
    )
}

export const csharp_statement = (obj_param:Props_Csharp_Statement):JSX.Element => {
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
                <span className="body text-vscode_green">{obj_param.args[index].class+blanks(1)}</span>
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
                <span className="body text-vscode_mauve">{blanks(1)}in</span>
                <span className="body text-vscode_var">{blanks(1)+obj_param.args[index].in}</span>
                </>
            )}
            {(obj_param.args[index].operator && obj_param.args[index].operator!=="!") && (
                <>
                <span className="body text-white">{blanks(1)+obj_param.args[index].operator+blanks(1)}</span>
                </>
            )}
            </>
        ): <></>                              
    }
    const iterate = () => {
        let res = [];
        for (let i = 0; i < obj_param.args.length; i++) {
            res.push(item(i))
        }
        return(
            res.map((value)=>{return value})
        )
    }
    return(
        <div className="textContainer">
        <span>{blanks(obj_param.indent ?? 0)}</span>
        {obj_param.closure && <span className="body text-white">&#125;</span>}
        <span className="body text-vscode_mauve">{obj_param.kind}</span>
        <span className="body text-white">(</span>
        {iterate()}
        <span className="body text-white">)&#123;</span>
        </div>
    )
}