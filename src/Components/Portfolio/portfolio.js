import React,{useEffect,useState} from 'react';
import {PortfolioSection,PotfolioTitle,PotfolioTitleSpan,PotfolioList,PotfolioItem,BoxSectionItem,BoxImage,Overlay,OverlaySpan} from'./portfolio-Style.js'
import axios from 'axios';
const Portfolio=()=>{
    
    const [images , setImage]=useState([])
    useEffect(()=>{
        axios.get('js/data.json').then((response)=>{
            setImage(response.data.portfolio)
        })
    },[])

    const PortfolioList=images.map((item)=>{
        return(
            <BoxSectionItem key={item.id}>
            <BoxImage src={item.image}  />
            <Overlay>
                <OverlaySpan>
                    Show Image
                </OverlaySpan>
            </Overlay>
        </BoxSectionItem>
        )
    })
    return (
        <div>
            <PortfolioSection>
            <PotfolioTitle><PotfolioTitleSpan>My</PotfolioTitleSpan> Portfolio</PotfolioTitle>
            <PotfolioList>
                <PotfolioItem active ="1">All</PotfolioItem>
                <PotfolioItem>HTML</PotfolioItem>
                <PotfolioItem>Photoshop</PotfolioItem>
                <PotfolioItem>Wordpress</PotfolioItem>
                <PotfolioItem>Mobile</PotfolioItem>
            </PotfolioList>
            <div className="box">
                {PortfolioList}
            </div>
            
        </PortfolioSection>
        </div>
    )
}
export default Portfolio