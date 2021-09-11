import React from 'react'
import Env from '../../env.json';
import { useHistory } from 'react-router-dom';
import { react_arrow, react_arrow_fin, react_component, importComponent } from '../../global';

const Home_ReactTSX: React.FC = () => {
    const history = useHistory();
    
    return (
        <div className="mainContainer">
            <p className="body text-vscode_comment">{"Current section : HOME".doubleSlash()}</p>
            <p className="body text-vscode_comment">{"Current theme : React with TypeScript".doubleSlash()}</p>
            {importComponent({starAs:true,whole:[{name:'BSc_in_Economics',url:Env.url_BSc_EG}],source:{name:'University-of-Reims-Champagne-Ardenne',url:Env.url_URCA}})}
            {importComponent({whole:[{name:'Data_Analysis',url:Env.url_data_analysis}],destructured:[{name:'R',url:Env.url_R},{name:'Python',url:Env.url_Python},{name:'SPSS',url:Env.url_SPSS}],source:{name:'Career-Academic-Major'}})}
            {importComponent({whole:[{name:'Full_stack',}],destructured:[{name:'Web'},{name:'Mobile'}],source:{name:'Career-Professional-Dev'}})}
            {react_arrow('Home')}
            {react_component("About_Me",()=>history.push('/about'))}
            {react_component("My_Works",()=>history.push('/about'))}
            {react_arrow_fin('Home')}
        </div>
    )
}

export default Home_ReactTSX
