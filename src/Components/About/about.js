import React  from 'react';
import {CreativeSection,CreativeInfo,InfoTitle,InfoDir,InfoDesc,InfoTitleSpan} from './about-style.js' 
const About=()=>{
    return (
        <div>
            <CreativeSection>
            <div class="container">
                <CreativeInfo>
                    <InfoTitle><InfoTitleSpan>This is</InfoTitleSpan> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </CreativeInfo>
            </div>
        </CreativeSection>
        </div>
    )
}
export default About