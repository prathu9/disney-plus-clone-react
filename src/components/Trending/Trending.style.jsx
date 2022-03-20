import styled from 'styled-components';

export const TrendingContainer = styled.div`
    padding: 0 0 26px;
`;

export const Content = styled.div`
    display:grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 25px;
    gap:25px;

    @media screen and (max-width: 768px){
        grid-template-columns: repeat(2, minmax(0, 1fr)); 
    }
`;

export const Wrap = styled.div`
    position:relative;
    padding-top: 56.25%;
    border-radius:10px;
    overflow:hidden;
    cursor:pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: 0px 26px 30px -10px rgb(0 0 0/69%),
    0px 16px 10px -10px rgb(0 0 0/73%);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        object-fit:cover;
    }

    &:hover{
        transform: scale(1.05);
        box-shadow: 0px 40px 58px -16px rgb(0 0 0/80%),
        0px 30px 22px -10px rgb(0 0 0/72%);
        border-color: rgba(249, 249, 249, 0.8);
    }
`;

