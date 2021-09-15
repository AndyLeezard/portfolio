import React from 'react'
import Env from '../../env.json';
import { useHistory } from 'react-router-dom';
import { csharp_using, csharp_namespace, csharp_class, csharp_object, csharp_func, csharp_statement } from '../../library/csharp';
import { br, closure, conditionalIndent } from '../../global';
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
        let arr = [];
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
    return (
        <div className="mainContainer">
            <p className="body text-vscode_comment">{"Current section : HOME".doubleSlash()}</p>
            <p className="body text-vscode_comment">{"Current theme : C# DotNet Core".doubleSlash()}</p>
            {csharp_using({url:Env.url_university,source:[`${widthFallback ? (Env.university_fallback):(Env.university)}`,'BSc','Economics']})}
            {csharp_using({url:Env.url_university,source:conditionalAsArray({default:Env.major,fallback:Env.major_fallback,push:[`${widthFallback ? (Env.major_target_fallback):(Env.major_target)}`]})})}
            {csharp_using({source:conditionalAsArray({default:Env.career,fallback:Env.career_fallback,push:['Full_stack']})})}
            {csharp_namespace(['Personal_Website'])}
            {csharp_class('Home',conditionalIndent(widthFallback,8,2))}
            {csharp_object({indent:conditionalIndent(widthFallback,16,4),class:"Data_Analysis",obj:[{name:'R',url:Env.url_R},{name:'Python',url:Env.url_Python},{name:'SPSS',url:Env.url_SPSS}]})}
            {csharp_object({indent:conditionalIndent(widthFallback,16,4),class:"Full_Stack",obj:[{name:'Web'},{name:'Mobile'}],})}
            {csharp_func({indent:conditionalIndent(widthFallback,16,4),scope:["public","static","async"],class:"View",func:"Sections",})}
            {csharp_object({indent:conditionalIndent(widthFallback,24,6),class:"HttpClient",obj:[{name:'client'}],update:{operator:"=",scope:"new",class:"HttpClient"}})}
            {csharp_object({indent:conditionalIndent(widthFallback,24,6),class:"HttpResponse",obj:[{name:'response'}],update:{operator:"=",scope:"await",var:"client",class:"GetAsync",parameter:"@https://AndyLee_Dev.com"}})}
            {br}
            {csharp_statement({indent:conditionalIndent(widthFallback,24,6),kind:"if",args:[{var:["response","IsSuccessStatusCode"]}]})}
            {csharp_object({indent:conditionalIndent(widthFallback,32,8),vartype:"string",obj:[{name:'content'}],update:{operator:"=",scope:"await",var:"response",class:"ReadAsStringAsync",extension:['Content']}})}
            {csharp_object({indent:conditionalIndent(widthFallback,32,8),class:"XmlDocument",obj:[{name:'document'}],update:{operator:"=",scope:"new",class:"XmlDocument"}})}
            {csharp_object({indent:conditionalIndent(widthFallback,32,8),class:"XmlNodeList",obj:[{name:'nodes'}],update:{operator:"=",var:"document",class:"SelectNodes",parameter:"@descendant::category",extension:['DocumentElement']}})}
            {br}
            {csharp_statement({indent:conditionalIndent(widthFallback,32,8),kind:"foreach",args:[{class:"XmlNode",var:["node"],in:"nodes"}]})}
            {csharp_object({indent:conditionalIndent(widthFallback,40,10),vartype:"var",obj:[{name:'section'}],update:{operator:"=",var:"node",class:"SelectSingleNode",parameter:"@Section"}})}
            {csharp_statement({indent:conditionalIndent(widthFallback,40,10),kind:"if",args:[{var:["node"],operator:"==",},{var:["@About_Me"]}]})}
            {csharp_func({indent:conditionalIndent(widthFallback,48,12),func:"GoTo",parameter:"@About_Me",_onClick:()=>history.push('/about')})}
            {csharp_statement({indent:conditionalIndent(widthFallback,40,10),closure:true,kind:"else if",args:[{var:["node"],operator:"==",},{var:["@My_Works"]}]})}
            {csharp_func({indent:conditionalIndent(widthFallback,48,12),func:"GoTo",parameter:"@My_Works",_onClick:()=>history.push('/my_works')})}
            {closure("}",conditionalIndent(widthFallback,40,10))}
            {closure("}",conditionalIndent(widthFallback,32,8))}
            {closure("}",conditionalIndent(widthFallback,24,6))}
            {closure("}",conditionalIndent(widthFallback,16,4))}
            {closure("}",conditionalIndent(widthFallback,8,2))}
            {closure("}",0)}
        </div>
    )
}

export default Home_CsharpTSX
