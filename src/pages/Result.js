import React, { useEffect,useState } from 'react';
// styled-componemt
import styled from 'styled-components';
import {Button,} from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ResultData } from "../assets/data/resultdata";
import KakaoShareBtn from "../component/KakaoShareBtn.js"

const Result = () => {
    const navigate = useNavigate();
    // get 요청으로 받아온 데이터 
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');
    const [resultData,setResultData] = useState({}); // 최종 도출 결과 데이터
    // console.log(mbti);

    useEffect(() => {
        const result = ResultData.find((s) => {return s.best === mbti});
        setResultData(result);
    },[mbti])
    // console.log('ㄴㅇㄴㅇ',resultData);

    return(
        <Wrapper>
            <Header > 예비집사 판별기 </Header>
            <Content>
            <Title > 결과보기 </Title>
            <LogoImage>
                <img alt="고양이사진" src={resultData.image} className="rounded-circle" width={350} height={350}></img>
            </LogoImage>
            <Desc>예비 집사님과 찰떡궁합인 고양이는 {resultData.name}입니다.</Desc>

            <ButtonGroup>
                <Button variant="outline-success" style={{fontSize: "20px"}}
                        onClick={() => navigate("/")}
                >테스트 다시하기</Button>
                <KakaoShareBtn/>
                
            </ButtonGroup>

            </Content>
        </Wrapper>
    );
}

export default Result; 

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
const ButtonGroup = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
`