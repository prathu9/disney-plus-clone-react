import Styled from 'styled-components';
import Slider from 'react-slick';

export const Carousel = Styled(Slider)`
    margin-top:20px;

    ul li button{
        &:before{
            font-size:10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color: #fff;
    }

    .slick-list{    
        overflow: visible;
    }

    button{
        z-index:1;
    }
`;

export const Wrap = Styled.div`
    cursor:pointer;

    img{
        border: 4px solid transparent;
        width:100%;
        height:100%;
        border-radius: 4px;
        box-shadow: 0px 26px 30px rgb(0 0 0 / 69%),
        0px 16px 10px -10px rgb(0 0 0/73%);
        transition-duration:300ms;

        &:hover{
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    } 
`;