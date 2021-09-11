import React from 'react'
import Env from '../../env.json';
import { useHistory } from 'react-router-dom';
import { csharp_using, csharp_namespace, csharp_class, csharp_object, csharp_func, csharp_statement, br, cshartp_closure } from '../../global';

const Home_CsharpTSX: React.FC = () => {
    const history = useHistory();

    return (
        <div className="mainContainer">
            <p className="body text-vscode_comment">{"Current section : HOME".doubleSlash()}</p>
            <p className="body text-vscode_comment">{"Current theme : C# DotNet Core".doubleSlash()}</p>
            {csharp_using({url:Env.url_URCA,source:['University_of_Reims_Champagne-Ardenne','BSc_in_Economics']})}
            {csharp_using({url:Env.url_URCA,source:['Career','Academic','Major','Data_Analysis']})}
            {csharp_using({source:['Career','Professional','Dev','Full-stack']})}
            {csharp_namespace(['Personal_Website'])}
            {csharp_class('Home')}
            {csharp_object({class:"Data_Analysis",obj:[{name:'R',url:Env.url_R},{name:'Python',url:Env.url_Python},{name:'SPSS',url:Env.url_SPSS}]})}
            {csharp_object({class:"Full_Stack",obj:[{name:'Web'},{name:'Mobile'}]})}
            {csharp_func({scope:["public","static","async"],class:"View",func:"Sections"})}
            {csharp_object({indent:1,class:"HttpClient",obj:[{name:'client'}],update:{operator:"=",scope:"new",class:"HttpClient"}})}
            {csharp_object({indent:1,class:"HttpResponse",obj:[{name:'response'}],update:{operator:"=",scope:"await",var:"client",class:"GetAsync",parameter:"@https://AndyLee_Dev.com"}})}
            {br}
            {csharp_statement({kind:"if",indent:1,args:[{var:["response","IsSuccessStatusCode"]}]})}
            {csharp_object({indent:2,vartype:"string",obj:[{name:'content'}],update:{operator:"=",scope:"await",var:"response",class:"ReadAsStringAsync",extension:['Content']}})}
            {csharp_object({indent:2,class:"XmlDocument",obj:[{name:'document'}],update:{operator:"=",scope:"new",class:"XmlDocument"}})}
            {csharp_object({indent:2,class:"XmlNodeList",obj:[{name:'nodes'}],update:{operator:"=",var:"document",class:"SelectNodes",parameter:"@descendant::category",extension:['DocumentElement']}})}
            {br}
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
