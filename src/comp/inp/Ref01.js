import { useRef, useState } from "react";

export default function Study() {

    let data = 0;
    const [값1,변경값1] = useState(0);
    const 값2 = useRef(0);

    return (
        <div>
            <h3>useState</h3>
                <input type='button' value='값 증가' onClick={
                    () => {
                        변경값1(값+1);
                    }
                }/>{값1}
            <h3>useRef</h3>
                <input rtpe='button' value='값 증가' onClick={
                    () => {
                        값2.current++;
                    }
                }/>{값2}
            <h3>js</h3>
                <input type='button' value='값 증가' onClick={
                    () => {
                        data++;
                    }
                }/>{}
        </div>
    )
}