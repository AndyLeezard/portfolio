export enum langs {
    REACT='react',
    PYTHON='python',
    CSHARP='csharp',
    GO='go',
    R='r'
}

export enum objectTypes {
    VAR='text-vscode_var',
    FUNCTION='text-vscode_function',
    GREEN='text-vscode_green', //mostly classes
}

export interface Props_React_Import {
    starAs?:boolean
    whole?:{name:string,url?:string}[]
    destructured?:{name:string,url?:string}[]
    source:{name:string,url?:string}
}

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

export interface Props_Py_Import {
    source?:{name:string,url?:string}
    target:{name:string,url?:string}
    as?:{name:string,url?:string,is_a_function:boolean}
}

export const conditionalIndent = (widthFallback:boolean,_default:number,fallback:number):number => {
    if(widthFallback){
        return fallback
    }else{
        return _default
    }
}

export const blanks = (size:number) => {
    if(size<0){size=0;}
    return String.fromCharCode(160).repeat(size);
}

export const br = (<div className="textContainer"><br/></div>);

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

export const closure = (input:string,indent:number):JSX.Element => {
    return(
        <div className="textContainer">
        <span>{blanks(indent)}</span>
        <span className="body text-white">{input}</span>
        </div>
    )
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

export const go_package = (pkg:string):JSX.Element => {
    return (
        <div className="textContainer">
            <span className="body text-vscode_vartype">package</span>
            <span className="body text-vscode_ivory">{blanks(1)+pkg}</span>
        </div>
    )
}

export const go_import = (elements:{name:string,url?:string}[]):JSX.Element => {
    return (
        <>
        <div className="textContainer">
            <span className="body text-vscode_vartype">import{blanks(1)}</span>
            <span className="body text-vscode_ivory">(</span>
        </div>
        {elements.map((value,index:number)=>{
            if(value.url){
                return(
                    <div key={index} className="textContainer">
                        <span className="body">{blanks(4)}</span>
                        <a href={value.url} target="_blank" rel="noopener noreferrer">
                            <span className="body text-vscode_string rounded hover:bg-gray-600">{String.fromCharCode(34)+value.name+String.fromCharCode(34)}</span>
                        </a>
                    </div>
                )
            }else{
                return(
                    <div className="textContainer">
                        <span className="body text-vscode_string">{blanks(4)+String.fromCharCode(34)+value.name+String.fromCharCode(34)}</span>
                    </div>
                )
            }
        })}
        <div className="textContainer">
            <span className="body text-vscode_ivory">)</span>
        </div>
        </>
    )
}

export const go_structure = (type:string,elements:{name:string,type:string,json:string}[]):JSX.Element => {
    return(
        <>
        <div className="textContainer">
            <span className="body text-vscode_vartype">type</span>
            <span className="body text-vscode_green">{blanks(1)+type+blanks(1)}</span>
            <span className="body text-vscode_vartype">struct{blanks(1)}</span>
            <span className="body text-vscode_ivory">&#123;</span>
        </div>
        <div className="flex flex-col pl-4 items-start w-full">
        {elements.map((value,index:number)=>{
            return(
                <div key={index} className="flex justify-evenly text-left leading-none min-w-threefourth xl:min-w-half 2xl:min-w-athird">
                    <span className="body text-vscode_ivory w-4/12 overflow-x-hidden">{value.name}</span>
                    <span className="body text-vscode_green w-3/12 overflow-x-hidden">{value.type}</span>
                    <span className="body text-vscode_string w-5/12">{"`json:"+String.fromCharCode(34)+value.json+String.fromCharCode(34)+"`"}</span>
                </div>
            )
        })}
        </div>
        </>
    )
}

export const go_var_declare = (input:{name:string,type:string,mappedTag?:string}):JSX.Element => {
    return(
        <div className="textContainer">
            <span className="body text-vscode_vartype">var{blanks(1)}</span>
            <span className="body text-vscode_var">{input.name+blanks(1)}</span>
            {input.mappedTag ? (
                <>
                    <span className="body text-vscode_vartype">map</span>
                    <span className="body text-vscode_ivory">[<span className="text-vscode_green">{input.type}</span>]*{input.mappedTag.capitalize()}</span>
                </>
            ):(
                <span className="body text-vscode_vartype">{input.type+blanks(1)}</span>
            )}
        </div>
    )
}

export const go_func = (name:string,params:{name:string,type:string,isAddress?:boolean}[]):JSX.Element => {
    return(
        <div className="textContainer">
            <span className="body text-vscode_vartype">func{blanks(1)}</span>
            <span className="body text-vscode_function">{name}</span>
            <span className="body text-vscode_ivory">({
                params.map((value,index:number)=>{
                    return(
                        <span key={index} className="body text-vscode_ivory">{value.name+blanks(1)+`${value.isAddress ? '*':''}`+value.type}{index<params.length-1 && blanks(1)}</span>
                    )
                })
            }) &#123;</span>
        </div>
    )
}

export const go_object = (object:string[],operator:string,complement:string,indent:number,method?:JSX.Element):JSX.Element => {
    return(
        <div className="textContainer">
            <span>{blanks(indent)}</span>
            {object.map((value,index:number)=>{
                return(
                    <>
                        <span className="body text-vscode_var">{value}</span>
                        {index<object.length-1 && <span className="text-vscode_ivory">,{blanks(1)}</span>}
                    </>
                )
            })}
            <span className="body text-vscode_ivory">{blanks(1)+operator+blanks(1)}</span>
            {method? (
                <>
                    <span className="body text-vscode_ivory">{complement}.</span>
                    {method}
                </>
            ):(
                <span className="body text-vscode_ivory">{complement}</span>
            )}
        </div>
    )
}

export const go_statement = (condition:string,indent:number,args:JSX.Element):JSX.Element => {
    return(
        <div className="textContainer">
            <span>{blanks(indent)}</span>
            <span className="body text-vscode_mauve">{condition+blanks(1)}</span>
            {args}
            <span className="body text-vscode_ivory">{blanks(1)}&#123;</span>
        </div>
    )
}

export const go_method = (object:string,indent:number,methods:{name:string,params?:string[]}[]):JSX.Element => {
    return(
        <div className="textContainer">
            <span>{blanks(indent)}</span>
            <span className="body text-vscode_ivory">{object}.</span>
            {methods.map((value,index:number)=>{
                return (
                <span key={index} className="body">
                    <span className="text-vscode_function">{value.name.capitalize()}</span>
                    <span className="text-vscode_ivory">(</span>
                    {value.params && value.params.map((_value,index:number)=>{
                        return(
                            <span key={index} className={`${_value.includes('@') ? 'text-vscode_string':'text-vscode_ivory'}`}>{_value.includes('@') ? (String.fromCharCode(34)+_value.substr(1)+String.fromCharCode(34)):_value}{value.params && index<value.params.length-1 && <span className="text-vscode_ivory">,{blanks(1)}</span>}</span>
                    )})}
                    <span className="text-vscode_ivory">)</span>
                </span>
            )})}
        </div>
    )
}