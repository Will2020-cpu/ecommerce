import styled from 'styled-components';

const Componentes = {};


Componentes.Container = styled.div`
    background: url("/homepage-hero-bg.jpg");
    background-size:cover;
    background-position: 50%;
    background-repeat: no-repeat;
    filter:brightness(60%);
    position:absolute;
    bottom:0;
    top:0;
    left:0;
    right:0;
    width:100%;
    z-index:-1;
    min-height:100vh;
`



export default Componentes;