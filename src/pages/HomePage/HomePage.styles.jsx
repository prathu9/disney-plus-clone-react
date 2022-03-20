import Styled from 'styled-components';


export const Container = Styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.2vw + 5px);
    position:relative;
    overflow-x:hidden;
   
   &:before{
       content:"";
       position:absolute;
       top:0;
       left:0;
       bottom:0;
       right:0;
       background: url('/images/home-background.png') center center / cover no-repeat fixed;
       z-index:-1;
   }
`;