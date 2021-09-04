import React from 'react'

function Theme_ReactJSX() {
    const blanks = (size:number) => {
        return String.fromCharCode(160).repeat(size);
    }
    interface ImportProps {
        starAs?:boolean
        whole?:string[],
        destructured?:string[],
        source:string
    }
    const _Import: React.FC<ImportProps> = ({starAs,whole,destructured,source}) => {
        //const _whole = f_whole(whole);
        //const _destructured = f_destructured(destructured);
        return (
            <div className="textContainer">
                <span className="body text-vscode_mauve-light">import </span>
                {starAs && <span className="body text-vscode_var-light"> * </span>}
                {starAs && <span className="body text-vscode_mauve-light"> as </span>}
                {whole && whole.map((value:string,index:number)=>{
                    return(
                    <>
                    <span key={index} className="body text-vscode_var-light">{value}</span>
                    <span className="body text-white">{destructured ? (destructured.length>0 ? ', ':' '):('')}</span>
                    </>
                )})}
                {destructured && destructured.length>0 && <span className="body text-white">&#123; </span>}
                {destructured && destructured.map((value:string,index:number)=>{
                    return(
                        <>
                        <span key={index} className="body text-vscode_var-light">{value}</span>
                        <span className="body text-white">{index>destructured.length-2 ? ' ':', '}</span>
                        </>
                    )
                })}
                {destructured && destructured.length>0 && <span className="body text-white">&#125;</span>}
                <span className="body text-vscode_mauve-light"> from </span>
                <span className="body text-vscode_string-dark">'{source}'</span>
                <span className="body text-white">;</span>
            </div>
        )
    }
    return (
    <div className="bg-vscode_bg max-w-full items-center">
        <div className="w-6/12 mx-auto border-2 p-4 rounded-lg">
            <_Import starAs={true} whole={['BSc_in_Economics ']} source={'University-of-Reims-Champagne-Ardenne'}/>
            <div className="textContainer">
                <br/>
                <span className="body text-blue-400">const </span>
                <span className="body text-yellow-200">Portfolio</span>
                <span className="body text-white"> = () </span>
                <span className="body text-blue-400">=&#62; </span>
                <span className="body text-white">&#123;</span>
            </div>
            <div className="textContainer">
                <span>{blanks(4)}</span>
                <span className="body text-pink-500">return </span>
                <span className="body text-white">&#40;</span>
            </div>
            <div className="textContainer">
                <span>{blanks(8)}</span>
                <span className="body text-gray-200">&#60;</span>
                <span className="body text-blue-400">div</span>
                <span className="body text-gray-200">&#62;</span>
            </div>
            <div className="hoverTextContainer">
                <span>{blanks(12)}</span>
                <a href="https://amazone-demo.vercel.app/" target="_blank" rel="noopener noreferrer">
                <div className="rounded hover:bg-gray-600">
                    <span className="body text-gray-200">&#60;</span>
                    <span className="body text-vscode_green">E-Commerce</span>
                    <span className="body text-gray-200">&#47;</span>
                    <span className="body text-gray-200">&#62;</span>
                </div>
                </a>
            </div>
            <div className="hoverTextContainer">
                <span>{blanks(12)}</span>
                <div className="rounded hover:bg-gray-600">
                    <span className="body text-gray-200">&#60;</span>
                    <span className="body text-vscode_green">Trading simulator</span>
                    <span className="body text-gray-200">&#47;</span>
                    <span className="body text-gray-200">&#62;</span>
                </div>
            </div>
            <div className="hoverTextContainer">
                <span>{blanks(12)}</span>
                <div className="rounded hover:bg-gray-600">
                    <span className="body text-gray-200">&#60;</span>
                    <span className="body text-vscode_green">Social Media</span>
                    <span className="body text-gray-200">&#47;</span>
                    <span className="body text-gray-200">&#62;</span>
                </div>
            </div>
            <div className="hoverTextContainer">
                <span>{blanks(12)}</span>
                <div className="rounded hover:bg-gray-600">
                    <span className="body text-gray-200">&#60;</span>
                    <span className="font-testing subpixel-antialiased text-vscode_green">Messenger App</span>
                    <span className="body text-gray-200">&#47;</span>
                    <span className="body text-gray-200">&#62;</span>
                </div>
            </div>
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
                <span className="body text-pink-500">export default </span>
                <span className="body text-yellow-200">Portfolio</span>
            </div>
        </div>
    </div>
    )
}

export default Theme_ReactJSX
