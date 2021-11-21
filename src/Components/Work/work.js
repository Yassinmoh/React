import axios from 'axios';
import  {React,Component} from 'react';
import {WorkSection,WorkTitle,WorkSpan,Part,Icon,PartTitle,Line,PartDescription} from './work-style.js'
class Work extends Component {

    state ={
        works:[]
    };
    componentDidMount(){
        axios.get('js/data.json').then((res)=>{
            this.setState({works:res.data.works});
        })
    }
    
    render(){
        const {works} = this.state;
        const workslist=works.map(work =>{
            return (
                <Part first={work.id} key={work.id}>
                <Icon className={work.icon_name}></Icon>
                <PartTitle>{work.title}</PartTitle>
                <Line />
                <PartDescription>
                    {work.body}
                </PartDescription>
            </Part>

            )
        })
        return (
            <WorkSection>
                <div className="container">
                    <WorkTitle><WorkSpan>My</WorkSpan> Work</WorkTitle>
                    {workslist}
                </div>
            </WorkSection>
        )
    }
}
export default Work