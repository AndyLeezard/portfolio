import React from 'react'
import Env from '../../env.json';
import { useHistory } from 'react-router-dom';
import { React_ImportProps, react_arrow, react_arrow_fin, react_component } from '../../global';

const Home_ReactTSX: React.FC = () => {
    const history = useHistory();
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
                    <span className="body text-white">{destructured ? (destructured.length>0 ? ', ':' '):(index<whole.length-1 ? ', ':'')}</span>
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
                        <>
                        <a href={value.url} target="_blank" rel="noopener noreferrer">
                        <span key={index} className="body rounded hover:bg-gray-600 text-vscode_var-light">{value.name}</span>
                        </a>
                        <span className="body text-white">{index>destructured.length-2 ? ' ':', '}</span>
                        </>
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
    <div className="max-w-full items-center">
        <div className="w-6/12 mx-auto border-2 p-4 rounded-lg">
            <p className="body text-vscode_comment-light">{"Current section : HOME".doubleSlash()}</p>
            <p className="body text-vscode_comment-light">{"Current theme : React with TypeScript".doubleSlash()}</p>
            <ImportComponent starAs whole={[{name:'BSc_in_Economics',url:Env.url_BSc_EG}]} source={{name:'University-of-Reims-Champagne-Ardenne',url:Env.url_URCA}}/>
            <ImportComponent whole={[{name:'Data_Analysis',url:Env.url_data_analysis}]} destructured={[{name:'R',url:Env.url_R},{name:'Python',url:Env.url_Python},{name:'SPSS',url:Env.url_SPSS}]} source={{name:'Career/Academic/Major'}}/>
            <ImportComponent whole={[{name:'Full-stack'}]} destructured={[{name:'Web'},{name:'Mobile'}]} source={{name:'Career/Professional/Dev'}}/>
            {react_arrow('Home')}
            {react_component("About_Me",()=>history.push('/about'))}
            {react_component("My_Works",()=>history.push('/about'))}
            {react_arrow_fin('Home')}
        </div>
    </div>
    )
}

export default Home_ReactTSX
