// import ('./Comment.css')
// export function App(){
//   return(
//     <>
//     <div class="wrapper">
//         <div class="image-container">
//             <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
//                 class="image"
//                 alt="Profile Image"
//             />
//         </div>
//         <div class="content-container">
//             <span class="name-text">홍길동</span>
//             <span class="comment-text">정말 재미있는 영화였음</span>
//         </div>
//     </div>
//     <div class="wrapper">
//         <div class="image-container">
//             <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
//                 class="image"
//                 alt="Profile Image"
//             />
//         </div>
//         <div class="content-container">
//             <span class="name-text">홍길동2</span>
//             <span class="comment-text">정말 감동적인 영화였음</span>
//         </div>
//     </div>
//     </>
//   );
// }
// 파일정보:src/step10/App.jsx
// 파일정보:src/step10/App.jsx
// import "./Comment.css"
import { CommentBoxList } from "./CommentBoxList";
// import { MemberList } from "../MenberList/MemberList";
import { MemberList } from "../MemberList/MemberList";
export function App(){
  return (
    <>  
      <MemberList/>
      <CommentBoxList/>
    </>
  );
}