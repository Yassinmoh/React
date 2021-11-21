import React  from 'react';
import {HomeSection,HomeInformation,HomeTitle,HomeInfo,HomeDescription,HomeButton,DescriptionSpan} from './home-Style.js' 
const Home=()=>{
    return (
        <div>
            <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Yassin Mohamed</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDescription>
                        Iam a professional <DescriptionSpan>Web Developer</DescriptionSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDescription>
                    <HomeButton>Let's Begin</HomeButton>
                </HomeInformation>
            </div>
        </HomeSection>
        </div>
    )
}
export default Home