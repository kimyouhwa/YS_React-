const animals =[
  '고양이','호랑이','기러기',
]
  
  export function ListTest3(){
  return(
    <ul>
      {animals.map(
        (animal,index)=>{
       return <li> {animal} </li>
      }
    )}
    </ul>
  );
}

