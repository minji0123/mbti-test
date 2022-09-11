import React from 'react';
// styled-componemt
import styled from 'styled-components';
import PangImage from '../assets/cat-logo2.jpg'
import {Button,} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/question');
    }

    return(
        <Wrapper>
            <Header > 예비집사 판별기 </Header>
            <Content>
            <Title > 나에게 맞는 주인님은? </Title>
            <LogoImage>
                <img src={PangImage} className="rounded-circle" width={350} height={350}></img>
            </LogoImage>
            <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기!</Desc>
            <Button variant="outline-success" style={{fontSize: "20px"}}
                    onClick={handleClickButton}
            >시작하기</Button>
            </Content>
        </Wrapper>
    );
}

export default Home; 


const Wrapper = styled.div`
    height: 100vh;
    width:100%;
    font-family:"Cute Font";

`

const Header = styled.div`
    font-size: 40pt;
    display: flex;
    justify-content:center;
    align-items:center;
`
const Title = styled.div`
    font-size: 30pt;
    margin-top:40px;
    display: flex;
    justify-content:center;
    align-items:center;

`
const LogoImage = styled.div`
    margin-top:10px;

`
const Desc = styled.div`
    font-size: 20pt;
    margin-top:20px;
    margin-bottom:20px;

`
const Content = styled.div`
    font-size: 20pt;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`