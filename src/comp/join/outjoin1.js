import { useEffect, useState } from "react";

export default function OutJoin() {

    const[id,setId] = useState('');
    const[pw,setPw]=useState('');
    const[hobby,setHobby] = useState('');
    const [birth, setBirth] = useState('');
    const [gender, setGender] = useState('');


    function start() {
        const data1 = localStorage.getItem('join1');
        const data2 = localStorage.getItem('join2');
        const data3 = localStorage.getItem('join3');
        const data4 = localStorage.getItem('join4');
        const data5 = localStorage.getItem('join5');
        if(data1 !== '' && data1 !== 'null') {
            setId(data1);
        }
        if(data2 !== '' && data2 !== 'null') {
            setPw(data2);
        }
        if(data3 !== '' && data3 !== 'null') {
            setBirth(data3);
        }
        if(data4 !== '' && data4 !== 'null') {
            setHobby(data4);
        }
        if(data5 !== '' && data5 !== 'null') {
            setGender(data5);
        }
    }


    //처음 화면이 마운트 되었을 때 ( java 이벤트 헨들러: onLoad하고 비슷하다. )
    useEffect(() => {
        start();
    }, [])

    return (
        <div>
            <h1>출력</h1>
            아이디 : {id}<br/>
            비밀번호 : {pw}<br/>
            성별 : {gender}<br/>
            생년월일 : {birth}<br/>
            취미 :{hobby}
            
        </div>
    )
}