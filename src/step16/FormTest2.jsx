import {useState} from 'react'
//321페이지
export function FormTest2(){
  const [value, setValue] = useState('123');

  const handleChange = (event)=>{
    setValue(event.target.value);
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    alert('입력값: '+value);
  }
  return (
    <form  onSubmit={handleSubmit}>
      <label>요청사항:
        <textarea value={value} onChange={handleChange}>{value}
        </textarea>
      </label>
      
      <button type="submit">제출</button>
    </form>
  );
}