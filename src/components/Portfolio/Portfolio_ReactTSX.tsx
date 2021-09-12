import React from 'react'
import Env from '../../env.json';
import { useHistory } from 'react-router-dom';
import { react_arrow, react_arrow_fin, react_component, react_importComponent } from '../../global';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Portfolio_ReactTSX: React.FC = () => {
    const history = useHistory();
    const widthFallback = useMediaQuery('(min-width:800px)');
    
    return (
        <div className="mainContainer">
            <p className="body text-vscode_comment">{"Current section : HOME".doubleSlash()}</p>
            <p className="body text-vscode_comment">{"Current theme : React with TypeScript".doubleSlash()}</p>
            {react_importComponent({starAs:true,whole:[{name:'BSc_in_Economics',url:Env.url_BSc_EG}],source:{name:`${widthFallback ? (Env.university):(Env.university_fallback)}`,url:Env.url_university}})}
            {react_importComponent({whole:[{name:'Data_Analysis',url:Env.url_data_analysis}],destructured:[{name:'R',url:Env.url_R},{name:'Python',url:Env.url_Python},{name:'SPSS',url:Env.url_SPSS}],source:{name:'Career-Academic-Major'}})}
            {react_importComponent({whole:[{name:'Full_stack',}],destructured:[{name:'Web'},{name:'Mobile'}],source:{name:'Career-Professional-Dev'}})}
            {react_arrow('Home')}
            {react_component("About_Me",()=>history.push('/about'))}
            {react_component("My_Works",()=>history.push('/about'))}
            {react_arrow_fin('Home')}
        </div>
    )
}

export default Portfolio_ReactTSX
