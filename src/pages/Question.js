import {useState} from "react"
import styled from 'styled-components';
import {ProgressBar,Button} from 'react-bootstrap';
import { QuestionData } from '../assets/data/questiondata';
import { useNavigate,createSearchParams } from "react-router-dom";


const Question = () => {
    const navigate = useNavigate();

    const [questionNo, setQuestionNo] = useState(0);

    const [totalScore, setTotalScore] = useState([
        {id:"EI",score:0},
        {id:"SN",score:0},
        {id:"TF",score:0},
        {id:"JP",score:0},
    ])
    // console.log(totalScore,'totalScore');

    const handleClickBtn = (no, type) => {

        const newScore = totalScore.map((s)=>{
            return s.id === type ? {id:s.id , score:s.score + no} : s
        })

        setTotalScore(newScore);

        // 문제가 다 끝났을 때 out of index 가 되기 때문에 예외처리를 해줘서
        // 페이지 이동이 되게 해야 한다.
        if(QuestionData.length !== questionNo + 1){
            // 다음문제로 넘어가게 +1 해줌
            setQuestionNo(questionNo+1);

        }else{
            // 집사 mbti 도출
            const mbti = newScore.reduce(
                (acc, curr) =>
                    acc +
                    (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)), // EI, TF 분리시킴
                    ""// 초기값
            )
            // console.log('mbti',mbti);
            // 결과 페이지로 이동
            navigate({
                pathname: "/result",
                search: `?${createSearchParams({// ~/resutl?mbti=ESTJ get 요청으로 데이터를 넘길 수 있음
                  mbti: mbti,
                })}`,
              });
        }
        
    }



    return(
        // <div  className='ele_center_whole'>
            <Wrapper >
                <ProgressBar striped variant="danger" now={(questionNo/QuestionData.length)*100 } className="mt_40"/>
                <Title > {QuestionData[questionNo].title} </Title>
                <ButtonGroup className="mt_20">
                    <Button 
                        variant="outline-success" 
                        className="left_btn"
                        onClick={() => handleClickBtn(1,QuestionData[questionNo].type)}
                    >{QuestionData[questionNo].answera}
                    </Button>

                    <Button 
                    variant="outline-success" 
                    className="right_btn"
                    onClick={() => handleClickBtn(0,QuestionData[questionNo].type)}
                    >{QuestionData[questionNo].answerb}
                    </Button>
                </ButtonGroup>
            </Wrapper>
        // </div>
    );
}

export default Question; 

const Wrapper = styled.div`
    height: 100vh;
    width:100%;
    font-family:'Cute Font';
    padding:25px;

`

const ButtonGroup = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
`
const Title = styled.div`
    font-size: 30pt;
    margin-top:40px;
    display: flex;
    justify-content:center;
    align-items:center;

`