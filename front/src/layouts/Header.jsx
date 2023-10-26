import styled from "styled-components";
import imgLogo from '../assets/images/logo.png';
//import Login from "../pages/login/login"
import { Link } from 'react-router-dom';
//<ul><li><a href={login}>로그인</a></li></ul>


const Header = () => {
    return (
        <HeaderWrapper>
            <header className="header">
                <div className="topMenu">
                    <Container>
                    <ul>
                        <li><Link to="/login/login">로그인</Link></li>
                    </ul>
                    </Container>
                </div>
                <div className="headerArea">
                    <Container>
                        <div className="logo"><a href="/"><img src={imgLogo} alt="로고" /></a></div>
                        <div className="searchBox"><form>검색창</form></div>
                    </Container>
                    
                </div>
            </header>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    background: #f0f0f0;
    & ul {
        text-align:right;
    }
    & .topMenu {
        background: #232323;
        display: flex;
        justify-content: center;

        & li a {
            color: #fff;
            font-size: 1em;
            line-height:1em;
            padding:13px;
            display: block;
        }
        
    }
    & .headerArea {
        background: #f4efe8;
        display: flex;
        justify-content: center;
        align-items:center;
        height: 120px;
        
        > div {
            display: flex;
            align-items: center;

            > .searchBox {
                margin-left:auto;

                form {
                    background:#fff;
                    width:360px;
                    height:40px;
                    padding:0 15px;
                    border-radius: 20px;
                    font-size:1em;
                    line-height:40px;
                }
            }

            a {display: inline-block;}
        }
    }
`;

const Container = styled.div`
    width: 1120px;
`

export default Header