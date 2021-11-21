import React  from 'react';
import Footer from '../Footer/footer'
import {DropSection,DropTitle,Span,Form,Input,FormInput,InputText,InputEmail,InputExp,TextArea,InputSubmit} from './contact-style.js';
const Contact=()=>{
    return (
        <div>
            <DropSection>
                <div class="container">
                    <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                        <Form>
                            <FormInput>
                                <InputText type="text" placeholder="Your Name" />
                                <InputEmail type="email" placeholder="Your Email" />
                            </FormInput>
                                    <InputExp type="text" class="sub" placeholder="Your Subject" />
                                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                                    <InputSubmit type="submit" value="Send Message" />
                        </Form>
                </div>
            </DropSection>
            <Footer />
        </div>
    )
}
export default Contact