import styled from 'styled-components'
import { BiShoppingBag, BiSearchAlt2 } from 'react-icons/bi'
import Link from 'next/link'


const NavBar = () => {
    return (
        <Container>
            <header>
                
                <nav role="navigation">
                    <div id="menuToggle">

                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>

                        <ul id="menu">
                            <a href="#"><li>Home</li></a>
                            <a href="#"><li>About</li></a>
                            <a href="#"><li>Info</li></a>
                            <a href="#"><li>Contact</li></a>
                            <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
                        </ul>
                    </div>
                </nav>
                <div className="logo"><h1>tienda</h1></div>
                <div className="right-section">
                    <div className="icons">
                        <span><BiSearchAlt2 /></span>
                        <span><BiShoppingBag /></span>
                    </div>
                    <div className="links">
                        <span><Link href="/"><a>Buscar</a></Link></span>
                        <span><Link href="/"><a>Bolsa[]</a></Link></span>
                    </div>
                </div>

            </header>
        </Container>
    )
}

export default NavBar


//Componentes
const Container = styled.div`
    min-height:40px;
    background-color:#fff;
    display:flex;
    width:100%;
    font-family: 'Courier Prime',monospace;
    
    
    header{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:15px;
        width:100%;

        .logo{
            font-family: 'Style Script',cursive;
        }

        .right-section{
            font-size: 0.875rem;
            a{
                text-decoration:none;
                color:#000;
                margin:5px;
            }

            .icons{
                display:flex;
                align-items:center;
                justify-content:center;
                @media(min-width:800px){
                    display:none;
                }
                span{
                    margin:2px;
                    color:#000;
                    font-size: 1.7rem;
                }
            }
            .links{
                @media(max-width:800px){
                    display:none;
                }
            }
        }
        
    }

    #menuToggle{
        display: block;
        z-index: 1;
        
        -webkit-user-select: none;
        user-select: none;
    }

    #menuToggle a{
        text-decoration: none;
        color: #232323;
        
        transition: color 0.3s ease;
    }

    #menuToggle a:hover{
        color: tomato;
    }


    #menuToggle input{
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        
        cursor: pointer;
        
        opacity: 0; 
        z-index: 2;
        
        -webkit-touch-callout: none;
    }


    #menuToggle span{
        display: block;
        width:33px;
        height: 2px;
        margin-bottom: 8px;
        position: relative;
        
        background: #000;
        border-radius: 3px;
        
        z-index: 1;
        
        transform-origin: 4px 0px;
        
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease;
    }

    #menuToggle span:first-child{
        transform-origin: 0% 0%;
    }

    #menuToggle span:nth-last-child(2){
        transform-origin: 0% 100%;
    }

    #menuToggle input:checked ~ span{
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
        background: #232323;
    }

    #menuToggle input:checked ~ span:nth-last-child(3){
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }

    #menuToggle input:checked ~ span:nth-last-child(2){
        transform: rotate(-45deg) translate(0, -1px);
    }


    #menu{
        position: absolute;
        width: 100%;
        height:100%;
        margin: -100px 0 0 -50px;
        padding: 50px;
        padding-top: 125px;
        
        background: #ededed;
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        /* to stop flickering of text in safari */
        
        transform-origin: 0% 0%;
        transform: translate(-100%, 0);
        
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    #menu li{
        padding: 10px 0;
        font-size: 22px;
    }

    #menuToggle input:checked ~ ul{
        transform: none;
    }
`
