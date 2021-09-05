import React from 'react'
import Env from '../../env.json';
import { useHistory } from 'react-router-dom';
import { Csharp_usingProps, csharp_namespace, csharp_class, csharp_object } from '../../global';

const Home_CsharpTSX: React.FC = () => {
    const history = useHistory();
    const ImportComponent: React.FC<Csharp_usingProps> = ({url,source}) => {
        const item = source.map((value,index:number)=>{
            return (
                <>
                <span key={index} className="body text-vscode_green-light">{value}</span>
                <span className="body text-white">{index<source.length-1 ? '.':''}</span>
                </>
        )})
        return (
            <div>
            <span className="body text-vscode_mauve-light">using </span>
            {url ? (
                <a className="rounded hover:bg-gray-600" href={url} target="_blank" rel="noopener noreferrer">
                    {item}
                </a>
            ):(
                item
            )}
            <span className="body text-white">;</span>
            </div>
        )
    }

    return (
    <div className="bg-vscode_bg max-w-full items-center">
        <div className="w-6/12 mx-auto border-2 p-4 rounded-lg">
            <p className="body text-vscode_comment-light">{"Current section : HOME".doubleSlash()}</p>
            <p className="body text-vscode_comment-light">{"Current theme : C# DotNet Framework".doubleSlash()}</p>
            <ImportComponent url={Env.url_URCA} source={['University_of_Reims_Champagne-Ardenne','BSc_in_Economics']}/>
            <ImportComponent url={Env.url_URCA} source={['Career','Academic','Major','Data_Analysis']}/>
            <ImportComponent source={['Career','Professional','Dev','Full-stack']}/>
            {csharp_namespace(['Personal_Website'])}
            {csharp_class('Home')}
            {csharp_object({class:"Data_Analysis",name:"test"})}
        </div>
    </div>
    )
}

export default Home_CsharpTSX
