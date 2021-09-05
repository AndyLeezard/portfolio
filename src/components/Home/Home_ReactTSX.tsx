import React from 'react'
import Env from '../../env.json';
import { React_ImportProps, react_arrow, react_arrow_fin } from '../../global';

const Home_ReactTSX: React.FC = () => {
    const blanks = (size:number) => {
        return String.fromCharCode(160).repeat(size);
    }
    const ImportComponent: React.FC<React_ImportProps> = ({starAs,whole,destructured,source}) => {
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
                    <span className="body text-white">{destructured ? (destructured.length>0 ? ', ':' '):(index<whole.length-1 ? ', ':'')}</span>
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
            <p className="body text-vscode_comment-light">{"Current section : PORTFOLIO".doubleSlash()}</p>
            <p className="body text-vscode_comment-light">{"Current theme : React with TypeScript".doubleSlash()}</p>
            <ImportComponent starAs whole={[{name:'BSc_in_Economics',url:Env.url_BSc_EG}]} source={{name:'University-of-Reims-Champagne-Ardenne',url:Env.url_URCA}}/>
            <ImportComponent whole={[{name:'Data_Analysis',url:Env.url_data_analysis}]} destructured={[{name:'R',url:Env.url_R},{name:'Python',url:Env.url_Python},{name:'SPSS',url:Env.url_SPSS}]} source={{name:'Career/Academic/Major'}}/>
            <ImportComponent whole={[{name:'Full-stack'}]} destructured={[{name:'Web'},{name:'Mobile'}]} source={{name:'Career/Professional/Dev'}}/>
            {react_arrow('Home')}
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
            {react_arrow_fin('Home')}
        </div>
    </div>
    )
}

export default Home_ReactTSX
