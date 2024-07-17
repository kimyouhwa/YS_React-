import { ColoredMessage } from "./components/ColoredMessage";
import { ColoredMessage2 } from "./components/ColoredMessage2";

 export function App() {
  const divStyle ={
    border: "1px solid blue"
  }
  const aaa=()=>{  // aaa =()=>{} 화살표 함수 
    alert('강아지');
  }
  const redStyle={
    color : 'red',
    backgroundColor :'yellow'
  }
  const pinkStyle={
    color : 'pink',
    fontSize : '20px'
  }

  return (   //divStyle 되돌려준다
    <div style={divStyle}>
      {console.log('test')}
      
    <p style ={{color:'blue',fontSize:'32px'}}>안녕하세요</p>
    {/* <p style ={redStyle}>반갑습니다.잘지내시죠?</p> */}
    <ColoredMessage color='lime' message ='잘지내시죠?'/>
    <ColoredMessage color='brown' message ='How do you do?'/>
    <ColoredMessage2 color='blue'>잘지내나요?</ColoredMessage2>
    <p style={pinkStyle}>잘지내고 있습니다</p>
    <button onClick={aaa}>버튼</button>

    </div>
  );
}
//컴퍼넌트 component

