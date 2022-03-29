import React from 'react';

import {CTALogoOne, CTALogoTwo} from '../../asset-data';

import {LoginPageContainer,
    CallToAction,
    CallToActionLogoOne,
    SignUp,
    Description,
    CallToActionLogoTwo} from './LoginPage.styles';

function LoginPage() {
  return (
    <LoginPageContainer>
        <CallToAction>
            <CallToActionLogoOne src={CTALogoOne.default}/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
                Get a Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
            </Description>
            <CallToActionLogoTwo src={CTALogoTwo}/>
        </CallToAction>
    </LoginPageContainer>
  )
}

export default LoginPage