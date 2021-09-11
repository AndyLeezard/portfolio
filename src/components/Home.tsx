import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import Home_CsharpTSX from './Home/Home_CsharpTSX';
import Home_ReactTSX from './Home/Home_ReactTSX';
import Home_PythonTSX from './Home/Home_PythonTSX';
import Home_GoTSX from './Home/Home_GoTSX';

import { langs } from '../global';

interface LangProps {
    id:langs,
    content:{alt:string,imgsrc:string}[],
}

const Home: React.FC = () => {
    const [crntLang, setCrntLang] = useState(langs.REACT);
    const dispatch = useDispatch();
    const { updateLang } = bindActionCreators(actionCreators,dispatch);
    const state = useSelector((state:State)=>state);
    
    console.log(crntLang);
    const langHandler = (input:langs) => {
        updateLang(input);
        setCrntLang(input);
        console.log("new lang : "+input);
    }

    const LanguageComponent: React.FC<LangProps> = ({id,content}) => {
        const items = content.map((value,index)=>{return(<img key={index} className={"h-7 w-7 hidden"+`${index>0 && ' md:block'}`} src={value.imgsrc} alt={value.alt} title={value.alt}/>)})
        if(crntLang===id){
            return(
                <div className="h-10 min-w-12 rounded border border-vscode_green-light hover:bg-gray-500 link flex flex-row items-center justify-center space-x-1 px-2">
                    {items}
                </div>
            )
        }else{
            return(
                <div className="h-10 min-w-12 rounded border border-opacity-50 border-gray-400 hover:bg-gray-600 link flex flex-row items-center justify-center space-x-1 px-2" onClick={()=>langHandler(id)}>
                    {items}
                </div>
            )
        }
    }

    return (
    <div>
        <div className="flex flex-col h-auto place-items-center pt-12 px-4">
            <img className="w-32 h-32 rounded-lg mb-4" src="images/profile.jpg" alt="Andy Lee" title="profile picture"/>
            <h4 className="headerFont text-white">Andy Lee</h4>
            <h4 className="frontFont text-vscode_comment-light">{"Freelance full-stack web/mobile app developper".commentBlock()}</h4>
            <h4 className="frontFont text-vscode_comment-light">{"BSc in Economics - Majored in Economic Analysis using big data".commentBlock()}</h4>
            <h4 className="frontFont text-vscode_comment-light">{`${state.lang}`.commentBlock()}</h4>
        </div>
        <div className="w-11/12 md:w-10/12 lg:w-6/12 mx-auto border-2 p-4 rounded-lg flex flex-row justify-center space-x-4 mb-2">
            <LanguageComponent content={[{alt:'React',imgsrc:'/svgs/react.svg'},{alt:'Node.js',imgsrc:'/svgs/nodejs.svg'},{alt:'JavaScript&TypeScript',imgsrc:'/pngs/jsts.png'},{alt:'Next.JS',imgsrc:'/svgs/nextjs.svg'},{alt:'Redux',imgsrc:'/svgs/redux.svg'}]} id={langs.REACT}/>
            <LanguageComponent content={[{alt:'C#',imgsrc:'/svgs/csharp.svg'},{alt:'.NetCore',imgsrc:'/svgs/netcore.svg'},{alt:'Blazor',imgsrc:'/svgs/blazor.svg'},{alt:'Unity',imgsrc:'/svgs/unity.svg'}]} id={langs.CSHARP}/>
            <LanguageComponent content={[{alt:'Python',imgsrc:'/svgs/python.svg'},{alt:'Django',imgsrc:'/svgs/django.svg'}]} id={langs.PYTHON}/>
            <LanguageComponent content={[{alt:'Go language',imgsrc:'/svgs/go.svg'}]} id={langs.GO}/>
            <LanguageComponent content={[{alt:'R language',imgsrc:"/svgs/r.svg"}]} id={langs.R}/>
        </div>
        <div>
            {crntLang===langs.REACT && <Home_ReactTSX/>}
            {crntLang===langs.CSHARP && <Home_CsharpTSX/>}
            {crntLang===langs.PYTHON && <Home_PythonTSX/>}
            {crntLang===langs.GO && <Home_GoTSX/>}
        </div>
    </div>
    )
}

export default Home;