const students =[ // 배열값을 객체로 설정 
  {id:1, name:'홍길동', job:'백수'},
  {id:2, name:'강감찬',job:'행정가'},
  {id:3, name:'이순신',job:'군인'},
]
  //출력
  
  export function ListTest4(){
  return(
    <ul style={{listStyle:'none'}}>
      {
        students.map((student)=>{
          return <li key={student}>{student.id}.{student.name}{student.job}</li>
        })
      }
    </ul>
    
  );
}
//샘 코드 