import React from 'react';

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
            <CallToActionLogoOne src="/images/cta-logo-one.svg"/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
            </Description>
            <CallToActionLogoTwo src="/images/cta-logo-two.png"/>
        </CallToAction>
    </LoginPageContainer>
  )
}

export default LoginPage