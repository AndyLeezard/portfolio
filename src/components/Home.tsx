import React, { useState } from 'react'
import Theme_ReactTSX from './Portfolio/Portfolio_ReactTSX'
import Home_ReactTSX from './Home/Home_ReactTSX';
import { langs } from '../global';

interface LangProps {
    id:langs,
    content:{alt:string,imgsrc:string}[],
}

const Home: React.FC = () => {
    const [crntLang, setCrntLang] = useState(langs.REACT);
    console.log(crntLang);

    const LanguageComponent: React.FC<LangProps> = ({id,content}) => {
        const items = content.map((value,index)=>{return(<img key={index} className="w-6 h-6" src={value.imgsrc} alt={value.alt} title={value.alt}/>)})
        if(crntLang===id){
            return(
                <div className="h-10 min-w-8 rounded border border-vscode_green-light hover:bg-gray-500 link flex flex-row items-center justify-center space-x-1 p-1">
                    {items}
                </div>
            )
        }else{
            return(
                <div className="h-10 min-w-8 rounded hover:bg-gray-600 link flex flex-row items-center justify-center space-x-1 p-1" onClick={()=>setCrntLang(id)}>
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
        </div>
        <div className="bg-vscode_bg max-w-full items-center">
            <div className="w-6/12 mx-auto border-2 p-4 rounded-lg flex flex-row justify-center space-x-4">
                <LanguageComponent content={[{alt:'React',imgsrc:'/svgs/react.svg'},{alt:'Node.js',imgsrc:'/svgs/nodejs.svg'},{alt:'JavaScript&TypeScript',imgsrc:'/pngs/jsts.png'},{alt:'Next.JS',imgsrc:'/pngs/NextJS.png'},{alt:'Redux',imgsrc:'/pngs/redux.png'}]} id={langs.REACT}/>
                <LanguageComponent content={[{alt:'C#',imgsrc:'/pngs/csharp.png'}]} id={langs.CSHARP}/>
                <LanguageComponent content={[{alt:'Python',imgsrc:'/pngs/python.png'}]} id={langs.PYTHON}/>
                <LanguageComponent content={[{alt:'Go language',imgsrc:'/pngs/go.png'}]} id={langs.GO}/>
                <LanguageComponent content={[{alt:'R language',imgsrc:'/pngs/r.png'}]} id={langs.R}/>
            </div>
        </div>
        <div className="bg-vscode_bg max-w-full h-2"/>
        <div className="bg-gray-50">
            <Home_ReactTSX/>
        </div>
        <div className="thecontainer h-screen">
        </div>
    </div>
    )
}

export default Home;