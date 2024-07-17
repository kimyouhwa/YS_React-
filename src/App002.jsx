// import { useForm } from "react-hook-form";

// export function App() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const submitForm = (data) => {
//     console.log(data);
//   };

//   console.log(errors);

//   return (
//     <form autoComplete="off" onSubmit={handleSubmit(submitForm)}>
//       <h3><bold>Login</bold></h3>
//       <div>
//         <label htmlFor="id">Username</label>
//         <input
//           type="text"
//           id="id"
//           {...register("id", { required: true, maxLength: 10 })}
//         />
//         {errors.id && <p>ERROR!!!</p>}
//       </div>
//       <div>
//         <label htmlFor="pw">Password</label>
//         <input
//           type="password"
//           id="pw"
//           {...register("pw", { required: true, minLength: 5 })}
//         />
//         {errors.pw && <p>ERROR!!!</p>}
//       </div>
//       <button>Login</button>
//     </form>
//   );
// }

// export default App;
// 지환
// 
// 목샘 로긴박스 ------------------------------------------//
// import {LoginBox} from './components/LoginBox';

// export function App(){
//   return (
//     <div>
//       <LoginBox></LoginBox>
//     </div>
//   );
// }

// import {LoginBox} from './components/LoginBox';
// export function App(){
//   return(
//     <div>
//       <LoginBox></LoginBox>
//     </div>
//   );
// }
//App2jsx_File 파일은 LoginBox 컴포넌트를 임포트하고 이를 렌더링하는 메인 애플리케이션 컴포넌트를 정의합니다.
// import {loginBox} from './component/LoginBox';
// export function  App(){
//   return(
//     <div>
//       <LoginBox></LoginBox>
//     </div>
//   );
// }