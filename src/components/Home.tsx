import React from 'react'
import Theme_ReactJSX from './Theme_ReactJSX'

const Home = () => {
    const decorateAsComment = (input:string) => {
        return "/* "+input+" */";
    }
    return (
    <div>
        <div className="thecontainer h-5">
        </div>
        <div className="thecontainer flex-col h-auto space-x-0 place-items-center p-4 text-left">
            <img className="w-32 h-32 rounded-lg mb-4" src="images/profile.jpg" alt="" width="384" height="512" />
            <h4 className="headerFont text-white">Andy Lee</h4>
            <h4 className="headerFont text-vscode_comment-light">{decorateAsComment("Freelance full-stack web/mobile app developper")}</h4>
            <h4 className="headerFont text-vscode_comment-light">{decorateAsComment("BSc in Economics - Majored in Economic Analysis using big data")}</h4>
        </div>
        <div className="bg-gray-50">
            <Theme_ReactJSX/>
        </div>
        <div className="thecontainer h-screen">
        </div>
    </div>
    )
}

export default Home;