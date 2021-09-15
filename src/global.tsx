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

export const closure = (input:string,indent:number):JSX.Element => {
    return(
        <div className="textContainer">
        <span>{blanks(indent)}</span>
        <span className="body text-white">{input}</span>
        </div>
    )
}