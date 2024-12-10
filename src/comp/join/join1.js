import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Join() {

  const[id,setId] = useState('');
  const[pw,setPw]=useState('');
  const[hobby,setHobby] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>회원가입</h1>
      <span>아이디</span><br/>
      <input type='text' placeholder='id' value={id}
          onChange={
            e=> {            
            setId(e.target.value);
          }}/><br/>
        <span>비밀번호</span><br/>
        <input type='password' placeholder='pw' value={pw}
          onChange={
            e=> setPw(e.target.value)
          }/><br/>
        <span>성별</span><br/>
      <input 
        type="radio" 
        id="male" 
        name="gender" 
        value="male" 
        checked={gender === 'male'} 
        onChange={e => setGender(e.target.value)} 
      />
      <label htmlFor="male">남성</label>

      <input 
        type="radio" 
        id="female" 
        name="gender" 
        value="female" 
        checked={gender === 'female'} 
        onChange={e => setGender(e.target.value)} 
      />
      <label htmlFor="female">여성</label><br/>
        
      <span>생년월일</span><br/>
      <input 
        type='date' 
        value={birth}
        onChange={e => setBirth(e.target.value)}  // 생년월일 입력 처리
      /><br/>
      <span>취미</span><br/>
      <select onChange ={
        e=> {setHobby(e.target.value)}
      }>
        <option vlaue='game'>게임</option>
        <option value='exercise'>운동</option>
        <option value='fishing'>낚시</option>
      </select><br/>
      <input type='button' value='회원가입' onClick={
        () => {
          localStorage.setItem('join1', id);
          localStorage.setItem('join2', pw);
          localStorage.setItem('join3', birth);
          localStorage.setItem('join4', hobby);
          localStorage.setItem('join5', gender);


          setId('');
          setPw('');
          setBirth('');
          setHobby('');
          setGender('');
          navigate('/outjoin1');
        }
      }/>
    </div>
  );
}


