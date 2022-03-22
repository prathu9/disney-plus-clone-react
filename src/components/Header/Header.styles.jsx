import styled from 'styled-components';

export const Nav = styled.nav`
    height:70px;
    background-color: #090b13;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;

    @media screen and (max-width: 768px){
        justify-content: space-between;
    }
`;

export const Logo = styled.img`
    width:80px;
`;

export const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left: 25px;
    align-items: center;
    > span{
        display:flex;
        align-items:center;
        padding: 0 12px;
        cursor:pointer;

        img{
            height:20px;
        }

        > span{
            font-size:13px;
            letter-spacing:1.42px;
            position:relative;

            &:after{
                content:"";
                height:2px;
                background-color:#fff;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform:scale(0);
                transform-origin:left center;
                transition: transform 250ms cubic-bezier(0.25,0.46, 0.45, 0.94) 0s;
            }

            &:hover:after{
                opacity:1;
                transform:scale(1);
            }
        }
    }

    @media screen and (max-width: 768px){
        display:none;
    }
`;

export const UserImg = styled.img``;

export const Login = styled.a`
    background-color:rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    cursor:pointer;

    &:hover{
        background-color: #f9f9f9;
        color: #000; 
        border:transparent;
    }
`;

export const DropDown = styled.div`
    position:absolute;
    top:48px;
    right:0;
    background-color: rgb(19,19,19);
    border: 1px solid rgba(151,151,151,0.34);
    border-radius: 4px;
    box-shadow: rgba(0 0 0/50%) 0px 0px 18px 0px;
    padding:10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity:0;
    z-index:2;
`;

export const SignOut = styled.div`
    position:relative;
    width:48px;
    height:48px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;

    ${UserImg}{
        border-radius: 50%;
        width:100%;
        height:100%;
    }

    &:hover{
        ${DropDown}{
            opacity:1;
            transition: opacity 1s;
        }
    }
`;