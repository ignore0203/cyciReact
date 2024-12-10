import { useEffect, useState } from "react";
import { areaList, memberIdCheck, memberLoginCheck } from '../api/member';
import { useNavigate } from 'react-router-dom';

function Study() {

    const [아이디, 변경아이디] = useState('');
    const [비밀번호, 변경비밀번호] = useState('');
    const [areas, setAreas] = useState([]);

    // 로그인 관련 상태 추가
    const [로그인, 변경로그인] = useState('');
    const [로그인비밀번호, 변경로그인비밀번호] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        startList();
    }, []); //페이지가 처음으로 불러오는 현상(마운트)
    
    function startList() {
        console.log('==== startList ====');
        areaList()
        .then(res => {
            console.log(res);
            setAreas(res.data.data);
        });
    }

    function send() {
        navigate('/');
    }

    return (
        <div className="App">
            <h1>회원가입</h1>
            <input type="text" placeholder="아이디 입력" value={아이디} onChange={e => { 변경아이디(e.target.value); }}/>
            <input type="text" placeholder="비밀번호 입력" value={비밀번호} onChange={e => { 변경비밀번호(e.target.value); }}/>
            <input type="button" value='중복체크' onClick={
                () => {
                    let obj = new Object();
                    obj.id = 아이디;
                    obj.pw = 비밀번호;

                    const check = memberIdCheck(obj);

                    check.then(res => {
                        if(res.data.code === '200' && res.data.data === 'Y') {
                            console.log('==== 성공!!! ====');
                            console.log(res);
                        }
                    })

                    check.catch(err => {
                        console.log(err);
                    })
                }
            }/>
            <select>
                {areas.map((item, index) => (
                <option key={index} value={item.idx}>
                    {item.areaName}
                </option>
                ))}
            </select>

            <h1>로그인</h1>
            <input
                type="text"
                placeholder="아이디 입력"
                value={로그인}
                onChange={e => 변경로그인(e.target.value)}
            />
            <input
                type="password"
                placeholder="비밀번호 입력"
                value={로그인비밀번호}
                onChange={e => 변경로그인비밀번호(e.target.value)}
            />
            <input
                type="button"
                value="로그인"
                onClick={() => {
                    let obj = new Object();
                    obj.userId = 로그인;
                    obj.userPw = 로그인비밀번호;

                    const check = memberLoginCheck(obj);

                    check.then(res => {
                        if (res.data.data === 'Y') {
                            console.log('로그인 성공');
                            send();
                        } else {
                            alert('로그인 실패');
                        }
                    });

                    check.catch(err => {
                        console.log(err);
                    });
                }}
            />
        </div>
    );
}

export default Study;