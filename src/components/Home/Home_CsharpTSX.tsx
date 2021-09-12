import React from 'react'
import Env from '../../env.json';
import { useHistory } from 'react-router-dom';
import { csharp_using, csharp_namespace, csharp_class, csharp_object, csharp_func, csharp_statement, br, cshartp_closure } from '../../global';
import useMediaQuery from '@material-ui/core/useMediaQuery';
    
const Home_CsharpTSX: React.FC = () => {
    const history = useHistory();
    const widthFallback = useMediaQuery('(max-width:800px)');
    interface ConditionalRenderParam{
        default:string
        fallback:string
        push:string[]
    }
    const conditionalAsArray = (input:ConditionalRenderParam):string[] => {
        let arr = Array();
        if(widthFallback){
            arr = [input.fallback];
        }else{
            arr = input.default.split('-')
        }
        for (let i = 0; i < input.push.length; i++) {
            arr.push(input.push[i])
        }
        return arr;
    }
    const conditionalIndent = (_default:number,fallback:number):number => {
        if(widthFallback){
            return fallback
        }else{
            return _default
        }
    }
    return (
        <div className="mainContainer">
            <p className="body text-vscode_comment">{"Current section : HOME".doubleSlash()}</p>
            <p className="body text-vscode_comment">{"Current theme : C# DotNet Core".doubleSlash()}</p>
            {csharp_using({url:Env.url_university,source:[`${widthFallback ? (Env.university_fallback):(Env.university)}`,'BSc','Economics']})}
            {csharp_using({url:Env.url_university,source:conditionalAsArray({default:Env.major,fallback:Env.major_fallback,push:[`${widthFallback ? (Env.major_target_fallback):(Env.major_target)}`]})})}
            {csharp_using({source:conditionalAsArray({default:Env.career,fallback:Env.career_fallback,push:['Full_stack']})})}
            {csharp_namespace(['Personal_Website'])}
            {csharp_class('Home',conditionalIndent(8,2))}
            {csharp_object({class:"Data_Analysis",obj:[{name:'R',url:Env.url_R},{name:'Python',url:Env.url_Python},{name:'SPSS',url:Env.url_SPSS}],indent:conditionalIndent(16,4)})}
            {csharp_object({class:"Full_Stack",obj:[{name:'Web'},{name:'Mobile'}],indent:conditionalIndent(16,4)})}
            {csharp_func({scope:["public","static","async"],class:"View",func:"Sections",indent:conditionalIndent(16,4)})}
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
