import React  from 'react';
import {ProfileSkillsSection,ProfileSec,ProfileListUl,ProfileListLi,ProfileItemSpan,SkillsDiv,SkillsDescription,SkillsBar,SkillsBarTitle,SkillsBarPercentage,SkillsBarParent,SkillsBarParentSpan,SkillsBarParentSpanSp1,SkillsBarParentSpanSp2,SkillsBarParentSpanSp3,ProfileTitle,SkillsTitle,ProfileTitleSpan,SkillsTitleSpan} from './profile-style'
const Profile=()=>{
    return (
        <div>
            <ProfileSkillsSection>
            <div class="container">
                <ProfileSec>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileListUl>
                        <ProfileListLi>
                            <ProfileItemSpan>Name</ProfileItemSpan>
                            Yassin Mohamed
                        </ProfileListLi>
                        <ProfileListLi>
                            <ProfileItemSpan>Birthday</ProfileItemSpan>
                            15/8/1995
                        </ProfileListLi>
                        <ProfileListLi>
                            <ProfileItemSpan>Address</ProfileItemSpan>
                            Egypt - Qena
                        </ProfileListLi>
                        <ProfileListLi>
                            <ProfileItemSpan>Phone</ProfileItemSpan>
                            010 258 4521
                        </ProfileListLi>
                        <ProfileListLi>
                            <ProfileItemSpan>Email</ProfileItemSpan>
                            yassin_mo@outlook.com
                        </ProfileListLi>
                        <ProfileListLi>
                            <ProfileItemSpan>Website</ProfileItemSpan>
                            <span className="web">www.yassin.org</span>
                        </ProfileListLi>
                    </ProfileListUl>
                </ProfileSec>
                
                <SkillsDiv>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDescription>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDescription>
                    <SkillsBar>
                        <SkillsBarTitle>Bootstrap</SkillsBarTitle>
                        <SkillsBarPercentage>100%</SkillsBarPercentage>
                        <SkillsBarParent>
                            <SkillsBarParentSpanSp1></SkillsBarParentSpanSp1>
                        </SkillsBarParent>
                    </SkillsBar>
                    
                    <SkillsBar>
                        <SkillsBarTitle>CSS3</SkillsBarTitle>
                        <SkillsBarPercentage>90%</SkillsBarPercentage>
                        <SkillsBarParent>
                            <SkillsBarParentSpanSp2></SkillsBarParentSpanSp2>
                        </SkillsBarParent>
                    </SkillsBar>
                    
                    <SkillsBar>
                        <SkillsBarTitle>Photoshop</SkillsBarTitle>
                        <SkillsBarPercentage>80%</SkillsBarPercentage>
                        <SkillsBarParent>
                            <SkillsBarParentSpanSp3></SkillsBarParentSpanSp3>
                        </SkillsBarParent>
                    </SkillsBar>
                </SkillsDiv>
                
            </div>
        </ProfileSkillsSection>
        </div>
    )
}
export default Profile