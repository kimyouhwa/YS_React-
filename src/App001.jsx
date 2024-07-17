// import { ColoredMessage } from "./components/ColoredMessage";
// import { ColoredMessage2 } from "./components/ColoredMessage2";

//  export function App() {
//   const divStyle ={
//     border: "1px solid blue"
//   }
//   const aaa=()=>{  // aaa =()=>{} 화살표 함수 
//     alert('강아지');
//   }
//   const redStyle={
//     color : 'red',
//     backgroundColor :'yellow'
//   }
//   const pinkStyle={
//     color : 'pink',
//     fontSize : '20px'
//   }

//   return (   //divStyle 되돌려준다
//     <div style={divStyle}>
//       {console.log('test')}
      
//     <p style ={{color:'blue',fontSize:'32px'}}>안녕하세요</p>
//     {/* <p style ={redStyle}>반갑습니다.잘지내시죠?</p> */}
//     <ColoredMessage color='lime' message ='잘지내시죠?'/>
//     <ColoredMessage color='brown' message ='How do you do?'/>
//     <ColoredMessage2 color='blue'>잘지내나요?</ColoredMessage2>
//     <p style={pinkStyle}>잘지내고 있습니다</p>
//     <button onClick={aaa}>버튼</button>

//     </div>
//   );
// }
// //컴퍼넌트 component

// 깃허브 ----------------------------------------------------
// import { useForm } from "react-hook-form";

// function App() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const submitForm = (data) => {
//     console.log(data);
//   };

//   console.log(errors);
//---깃허브 로긴 박스 ---------------------------------------------
  return (
    <form autoComplete="off" onSubmit={handleSubmit(submitForm)}>
      <h3><bold>Login</bold></h3>
      <div>
        <label htmlFor="id">Username</label>
        <input
          type="text"
          id="id"
          {...register("id", { required: true, maxLength: 10 })}
        />
        {errors.id && <p>ERROR!!!</p>}
      </div>
      <div>
        <label htmlFor="pw">Password</label>
        <input
          type="password"
          id="pw"
          {...register("pw", { required: true, minLength: 5 })}
        />
        {errors.pw && <p>ERROR!!!</p>}
      </div>
      <button>Login</button>
    </form>
  );


export default App;