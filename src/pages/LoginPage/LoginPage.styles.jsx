import styled from 'styled-components';

export const LoginPageContainer = styled.div`
    position:relative;
    height: calc(100vh - 70px);
    display:flex;
    justify-content: center;
    align-items:top;

    &:before{
        content:"";
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-image:url('/images/login-background.jpg');
        background-repeat:no-repeat;
        background-size: cover;
        background-position: top;
        z-index:-1;
        opacity: 0.7;
    }
`;

export const CallToAction = styled.div`
    min-width:320px;
    padding:80px 40px;
    width:70%;
    display:flex;
    align-items: center;
    flex-direction: column;
    margin-top:80px;
`;

export const CallToActionLogoOne = styled.img`
`;

export const SignUp = styled.a`
    width:100%;
    background-color:#0063e5;
    font-weight:bold;
    padding:17px 0;
    color:#f9f9f9;
    border-radius: 4px;
    text-align:center;
    font-size:19px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top:8px;
    margin-bottom:12px;

    &:hover{
        background: #0483ee;
    }
`;

export const Description = styled.p`
    font-size:11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`;

export const CallToActionLogoTwo = styled.img`
    width:90%;
`;