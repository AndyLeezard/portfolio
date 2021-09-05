import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import Home_CsharpTSX from './Home/Home_CsharpTSX';
import Home_ReactTSX from './Home/Home_ReactTSX';
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
        const items = content.map((value,index)=>{return(<img key={index} className="h-7 w-7" src={value.imgsrc} alt={value.alt} title={value.alt}/>)})
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
        <div className="thecontainer h-8">
        </div>
        <div className="thecontainer flex-col h-auto space-x-0 place-items-center p-4 text-left">
            <img className="w-32 h-32 rounded-lg mb-4" src="images/profile.jpg" alt="Andy Lee"/>
            <h4 className="headerFont text-white">Andy Lee</h4>
            <h4 className="headerFont text-vscode_comment-light">{"Freelance full-stack web/mobile app developper".commentBlock()}</h4>
            <h4 className="headerFont text-vscode_comment-light">{"BSc in Economics - Majored in Economic Analysis using big data".commentBlock()}</h4>
            <h4 className="headerFont text-vscode_comment-light">{`${state.lang}`.commentBlock()}</h4>
        </div>
        <div className="bg-vscode_bg max-w-full items-center">
            <div className="w-6/12 mx-auto border-2 p-4 rounded-lg flex flex-row justify-center space-x-4">
                <LanguageComponent content={[{alt:'React',imgsrc:'/svgs/react.svg'},{alt:'Node.js',imgsrc:'/svgs/nodejs.svg'},{alt:'JavaScript&TypeScript',imgsrc:'/pngs/jsts.png'},{alt:'Next.JS',imgsrc:'/svgs/nextjs.svg'},{alt:'Redux',imgsrc:'/svgs/redux.svg'}]} id={langs.REACT}/>
                <LanguageComponent content={[{alt:'C#',imgsrc:'/svgs/csharp.svg'}]} id={langs.CSHARP}/>
                <LanguageComponent content={[{alt:'Python',imgsrc:'/svgs/python.svg'}]} id={langs.PYTHON}/>
                <LanguageComponent content={[{alt:'Go language',imgsrc:'/svgs/go.svg'}]} id={langs.GO}/>
                <LanguageComponent content={[{alt:'R language',imgsrc:"/svgs/r.svg"}]} id={langs.R}/>
            </div>
        </div>
        <div className="bg-vscode_bg max-w-full h-2"/>
        <div className="bg-gray-50">
            {crntLang===langs.REACT && <Home_ReactTSX/>}
            {crntLang===langs.CSHARP && <Home_CsharpTSX/>}
        </div>
        <div className="thecontainer h-screen">
        </div>
    </div>
    )
}

export default Home;