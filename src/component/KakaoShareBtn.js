import React from 'react';
import {Button,} from 'react-bootstrap';
const {Kakao} = window;

const KakaoShareBtn = () => {

    const url = "https://mmmbittest.netlify.app/"
    const resultUrl = window.location.href;
    
    console.log('ddd', url, resultUrl);


    React.useEffect(() => {
        Kakao.cleanup();
        Kakao.init('803540667654c12ed42b3fb9e6fbf9d3');
        console.log(Kakao.isInitialized());
    },[]);
    
    const shareKakao = () => {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '예비집사 판별기 결과',
          description: '예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 00입니다.',
          imageUrl:
            'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            androidExecutionParams: 'test',
          },
        },

        buttons: [
          {
            title: '나도 테스트 하러가기',
            link: {
              mobileWebUrl: url,
            },
          },

        ]
      });
    }

    return(
        <Button variant="outline-success" style={{fontSize: "20px", marginLeft:'20px'}}
        >카카오톡 공유하기</Button>
    )
}

export default KakaoShareBtn;