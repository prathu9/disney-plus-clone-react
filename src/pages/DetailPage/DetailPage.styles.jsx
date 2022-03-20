import styled from 'styled-components';

export const DetailContainer = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
`;

export const Background = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;

    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
`;

export const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 20vw;
    min-width: 200px;
    margin-top:60px;

    img{
        width: 100%;
        height:100%;
        object-fit: contain;
    }
`; 

export const Controls = styled.div`
    display:flex;
    align-items:center;
    flex-wrap:wrap;
`;

export const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding:0px 24px;
    margin-right: 22px;
    margin-bottom:20px;
    display: flex;
    align-items: center;
    height:56px;
    background-color: rgb(249, 249, 249);
    border:none;
    letter-spacing: 1.8px;
    cursor:pointer;
    text-transform:uppercase;

    &:hover{
        background: rgb(198, 198, 198);
    }
`;

export const TrailerButton = styled(PlayButton)`
    background-color: rgba(0,0,0,0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`;

export const AddButton = styled.button`
    margin-right:16px;
    width:44px;
    height:44px;
    min-width:44px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content: center;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.6);
    cursor:pointer;

    span{
        font-size:30px;
        color: white;
    }
`;

export const GroupWatchButton = styled(AddButton)`
    background-color: rgb(0,0,0);
`;

export const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`;

export const Description = styled.div`
    line-height: 1.4;
    font-size:20px;
    margin-top:16px;
    color:rgb(249, 249, 249);
    max-width:760px;
`;