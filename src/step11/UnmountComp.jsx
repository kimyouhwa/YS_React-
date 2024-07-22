//파일명 :src/step11/UnmountComp.jsx
import{ useState , useEffect } from "react";

export function UnmountComp(){
  const[mounted, setMounted]=useState(true);
  useEffect(()=>{
    console.log('콤포넌트 마운딘됨');
    return()=>{
      comsole.log('콤포넌트 언마운팅전');

    }
  },{});

  const Dounmounting =() =>{

  }
}