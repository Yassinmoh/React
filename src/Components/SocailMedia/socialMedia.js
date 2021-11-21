import  {Component} from 'react';
import { Social, Icon, SocialParagraph, Span, SpanInfo,SocialMedia} from './socialMedia-style.js'
import axios from 'axios'
class SocailMedia extends Component {
    state={
        social:[]
    }

    componentDidMount() {
        axios.get('js/data.json').then((res) => {
            this.setState({social: res.data.social})
        })
    }
    render() {
        const {social}=this.state;
        const socialItems=social.map((socialItem) =>{
            return (
                <Social item={socialItem.id} key={socialItem.id} >
                <Icon className={socialItem.icon}></Icon>
                <SocialParagraph>
                    <Span>{socialItem.title}</Span>
                    <SpanInfo>{socialItem.body}</SpanInfo>
                </SocialParagraph>
            </Social>
            )
        })
        return (
                <SocialMedia>
                    {socialItems}
                </SocialMedia>
        )
    }
}
export default SocailMedia