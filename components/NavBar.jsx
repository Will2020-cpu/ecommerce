import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BiShoppingBag, BiSearchAlt2 } from 'react-icons/bi'
import Link from 'next/link'


const NavBar = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);
    return (
        <Container scrollY={scrollY}>
            <header>
                <div className="left-section">
                    <div className="links">
                        <span><Link href="/"><a>Shop</a></Link></span>
                        <span><Link href="/"><a>Hacer una orden</a></Link></span>
                        <span><Link href="/"><a>Sobre nosotros</a></Link></span>
                        <span><Link href="/"><a>Estilos </a></Link></span>
                    </div>

                    <nav className="nav-mobile" role="navigation">
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
                </div>

                <div className="logo"><h1>tienda</h1></div>
                <div className="right-section">
                    <div className="icons">
                        <span><BiSearchAlt2 /></span>
                        <span><BiShoppingBag /></span>
                    </div>
                    <div className="links">
                        <span><Link href="/"><a>Ingresar</a></Link></span>
                        <span><Link href="/"><a>Registrarse</a></Link></span>
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
    background-color:transparent;
    display:flex;
    width:100%;
    color :${props => props.scrollY > 0 ? "#000" : "#fff"};
    font-family: 'Courier Prime',monospace;
    
    
    header{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:10px 20px;
        width:100%;
        font-size: 0.99rem;
        position:sticky;
        top:0;
            a{
                text-decoration:none;
                color :${props => props.scrollY > 0 ? "#000" : "#fff"};
                margin:5px 10px;
                letter-spacing:-2px;
            }

        .logo{
            font-family: 'Style Script',cursive;
            flex-shrink:1;
        }

        .left-section{
            .links{
                display:none;

            }
            @media(min-width:1100px){
                .nav-mobile{
                    display:none;
                }
                .links{
                    display:flex;
                }
            }
        }


        .right-section{
            .icons{
                display:flex;
                align-items:center;
                justify-content:center;
                @media(min-width:800px){
                    display:none;
                }
                span{
                    margin:2px;
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
        
        background:${props => props.scrollY > 0 ? "#000" : "#fff"};
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
