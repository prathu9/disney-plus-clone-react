import styled from 'styled-components';

export const ViewersContainer = styled.div`
    margin-top:30px;
    display:grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap:25px;
    padding: 30px 0 26px;

    @media (max-width: 768px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

export const Wrap = styled.div`
    position:relative;
    border-radius:10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: 0px 26px 30px -10px rgba(0 0 0/69%), 
    0px 16px 10px -10px rgb(0 0 0/73%);
    cursor:pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    video{
        opacity:0;
        width:100%;
        height:100%;
        position:absolute;
        top:0px;
        left:0px;
        z-index:-1;
    }

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: 0px 40px 58px -16px rgb(0 0 0/80%),
        0px 30px 22px -10px rgb(0 0 0/72%);

        video{
            opacity:1;
        }
    }
`;