import React from 'react'
import Env from '../../env.json';
import { useHistory } from 'react-router-dom';
import { Csharp_usingProps, csharp_namespace, csharp_class, csharp_object, csharp_func, csharp_statement, cshartp_closure } from '../../global';

const Home_CsharpTSX: React.FC = () => {
    const history = useHistory();
    const ImportComponent: React.FC<Csharp_usingProps> = ({url,source}) => {
        const item = source.map((value,index:number)=>{
            return (
                <>
                <span key={index} className="body text-vscode_green">{value}</span>
                <span className="body text-white">{index<source.length-1 ? '.':''}</span>
                </>
        )})
        return (
            <div>
            <span className="body text-vscode_mauve">using </span>
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
        <div className="mainContainer">
            <p className="body text-vscode_comment">{"Current section : HOME".doubleSlash()}</p>
            <p className="body text-vscode_comment">{"Current theme : C# DotNet Core".doubleSlash()}</p>
            <ImportComponent url={Env.url_URCA} source={['University_of_Reims_Champagne-Ardenne','BSc_in_Economics']}/>
            <ImportComponent url={Env.url_URCA} source={['Career','Academic','Major','Data_Analysis']}/>
            <ImportComponent source={['Career','Professional','Dev','Full-stack']}/>
            {csharp_namespace(['Personal_Website'])}
            {csharp_class('Home')}
            {csharp_object({class:"Data_Analysis",obj:[{name:'R',url:Env.url_R},{name:'Python',url:Env.url_Python},{name:'SPSS',url:Env.url_SPSS}]})}
            {csharp_object({class:"Full_Stack",obj:[{name:'Web'},{name:'Mobile'}]})}
            <br/>
            {csharp_func({scope:["public","static","async"],class:"View",func:"Sections"})}
            {csharp_object({indent:1,class:"HttpClient",obj:[{name:'client'}],update:{operator:"=",scope:"new",class:"HttpClient"}})}
            {csharp_object({indent:1,class:"HttpResponse",obj:[{name:'response'}],update:{operator:"=",scope:"await",var:"client",class:"GetAsync",parameter:"@https://AndyLee_Dev.com"}})}
            {csharp_statement({kind:"if",indent:1,args:[{var:["response","IsSuccessStatusCode"]}]})}
            {csharp_object({indent:2,vartype:"string",obj:[{name:'content'}],update:{operator:"=",scope:"await",var:"response",class:"ReadAsStringAsync",extension:['Content']}})}
            {csharp_object({indent:2,class:"XmlDocument",obj:[{name:'document'}],update:{operator:"=",scope:"new",class:"XmlDocument"}})}
            {csharp_object({indent:2,class:"XmlNodeList",obj:[{name:'nodes'}],update:{operator:"=",var:"document",class:"SelectNodes",parameter:"@descendant::category",extension:['DocumentElement']}})}
            {csharp_statement({kind:"foreach",indent:2,args:[{class:"XmlNode",var:["node"],in:"nodes"}]})}
            {csharp_object({indent:3,vartype:"var",obj:[{name:'section'}],update:{operator:"=",var:"node",class:"SelectSingleNode",parameter:"@Section"}})}
            {csharp_statement({kind:"if",indent:3,args:[{var:["node"],operator:"==",},{var:["@About_Me"]}]})}
            {csharp_func({indent:4,func:"GoTo",parameter:"@About_Me",_onClick:()=>history.push('/about')})}
            {csharp_statement({closure:true,kind:"else if",indent:3,args:[{var:["node"],operator:"==",},{var:["@My_Works"]}]})}
            {csharp_func({indent:4,func:"GoTo",parameter:"@My_Works",_onClick:()=>history.push('/my_works')})}
            {cshartp_closure("}",3)}
            {cshartp_closure("}",2)}
            {cshartp_closure("}",1)}
            {cshartp_closure("}",0)}
            {cshartp_closure("}",-1)}
            {cshartp_closure("}",-2)}
        </div>
    )
}

export default Home_CsharpTSX
