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