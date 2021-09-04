import React from 'react'
import Env from '../env.json';

function Theme_ReactJSX() {
    const blanks = (size:number) => {
        return String.fromCharCode(160).repeat(size);
    }
    interface ImportProps {
        starAs?:boolean
        whole?:{name:string,url?:string}[],
        destructured?:{name:string,url?:string}[],
        source:{name:string,url?:string}
    }
    const _Import: React.FC<ImportProps> = ({starAs,whole,destructured,source}) => {
        return (
            <div>
            <span className="body text-vscode_mauve-light">import </span>
            {starAs && <span className="body text-vscode_var-light"> * </span>}
            {starAs && <span className="body text-vscode_mauve-light"> as </span>}
            {whole && whole.map((value,index:number)=>{
                if(value.url){
                    return(
                    <a href={value.url} target="_blank" rel="noopener noreferrer">
                    <span key={index} className="body text-vscode_var-light rounded hover:bg-gray-600">{value.name}</span>
                    <span className="body text-white">{destructured ? (destructured.length>0 ? ', ':' '):('')}</span>
                    </a>
                    )
                }else{
                    return(
                    <>
                    <span key={index} className="body text-vscode_var-light">{value.name}</span>
                    <span className="body text-white">{destructured ? (destructured.length>0 ? ', ':' '):('')}</span>
                    </>
                    )
                }
            })}
            {destructured && destructured.length>0 && <span className="body text-white">&#123; </span>}
            {destructured && destructured.map((value,index:number)=>{
                if(value.url){
                    return(
                        <a href={value.url} target="_blank" rel="noopener noreferrer">
                        <span key={index} className="body rounded hover:bg-gray-600 text-vscode_var-light">{value.name}</span>
                        <span className="body text-white">{index>destructured.length-2 ? ' ':', '}</span>
                        </a>
                    )
                }else{
                    return(
                        <>
                        <span key={index} className="body text-vscode_var-light">{value.name}</span>
                        <span className="body text-white">{index>destructured.length-2 ? ' ':', '}</span>
                        </>
                    )
                }
                
            })}
            {destructured && destructured.length>0 && <span className="body text-white">&#125;</span>}
            <span className="body text-vscode_mauve-light"> from </span>
            {source.url ? (
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                <span className="body text-vscode_string-dark rounded hover:bg-gray-600">'{source.name}'</span>
                </a>
            ):(
                <span className="body text-vscode_string-dark">'{source.name}'</span>
            )}
            <span className="body text-white">;</span>
            </div>
        )
    }

    return (
    <div className="bg-vscode_bg max-w-full items-center">
        <div className="w-6/12 mx-auto border-2 p-4 rounded-lg">
            <_Import starAs whole={[{name:'BSc_in_Economics',url:Env.url_BSc_EG}]} source={{name:'University-of-Reims-Champagne-Ardenne',url:Env.url_URCA}}/>
            <_Import whole={[{name:'Data_Analysis',url:Env.url_data_analysis}]} destructured={[{name:'R',url:Env.url_R},{name:'Python',url:Env.url_Python},{name:'SPSS',url:Env.url_SPSS}]} source={{name:'Major/Academic-Career'}}/>
            <_Import destructured={[{name:'Full-stack_Web&Mobile'},{name:'Video_Game_Development'}]} source={{name:'Career-as-a-developer'}}/>
            <_Import destructured={[{name:'JavaScript'},{name:'TypeScript'}]} source={{name:'ECMAScript/2020'}}/>
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
