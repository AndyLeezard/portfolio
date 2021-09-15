import { blanks } from '../global';

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
                        if(_value.includes('(')||_value.includes(')')){
                            let index_start = 0;
                            let index_end = 0;
                            for (let index = 0; index < _value.length; index++) {
                                if(index_start!==0 && index_end !==0){
                                    break;
                                }
                                if(_value[index] === '('){
                                    index_start = index;
                                }
                                if(_value[index] === ')'){
                                    index_end = index;
                                }
                            }
                            let _param = _value.substring(index_start+1,index_end)
                            return(
                                <span key={index} className="body text-vscode_function">
                                    {_value.substring(0,index_start+1)}
                                    <span className={`${_value.includes('@') ? 'text-vscode_string':'text-vscode_ivory'}`}>
                                        {_value.includes('@') ? (String.fromCharCode(34)+_param+String.fromCharCode(34)):_param}
                                        {(value.params && index<value.params.length-1) && <span className="text-vscode_ivory">,{blanks(1)}</span>}
                                    </span>
                                    {_value[index_end]}
                                </span>
                            )
                        }else{
                            return(
                                <span key={index} className={`${_value.includes('@') ? 'text-vscode_string':'text-vscode_ivory'}`}>{_value.includes('@') ? (String.fromCharCode(34)+_value.substr(1)+String.fromCharCode(34)):_value}{value.params && index<value.params.length-1 && <span className="text-vscode_ivory">,{blanks(1)}</span>}</span>
                            )
                        }
                    })}
                    <span className="text-vscode_ivory">)</span>
                </span>
            )})}
        </div>
    )
}