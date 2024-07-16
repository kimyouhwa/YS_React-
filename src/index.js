import ReactDOM from 'react-dom/client';
import {App} from './App'

// const App = () => {
//   return (
//     <p>안녕하세요</p>
//   );
// }
// function App() {
//   const divStyle ={
//     border: "1px solid black"
//   }
//   return (
//     <div style={divStyle}>
//     <p>안녕하세요</p>
//     <p>반갑습니다.</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>
  </>
);