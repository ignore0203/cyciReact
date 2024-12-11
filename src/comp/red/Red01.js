import { useReducer, useState } from "react"

function changeTest(status, action) {
    console.log('status: ',status);
    console.log(`action: ${action}`);

    switch(action){
        case 'up':
            return status+1;
        case 'down':
            return status-1;
        case 'reset':
            return 0;
    }
}

export default function Red01() {

    const [data,setData] = useState(0);
    const [test, setTest] = useReducer(changeTest, 0);

    return(
        <div>
            <h1>Reducer 01</h1>
            {data}
            <input type='button' value='증가' onClick={e => {
                setData(data+1)
            }} />
            <input type='button' value='감소' onClick={e => {
                setData(data-1)
            }} /><br/><br/><br/>
            {test}
            <input type='button' value='증가' onClick={e => {
                setTest('up')
            }} />
            <input type='button' value='감소' onClick={e => {
                setTest('down')
            }} />
            <input type='button' value='reset' onClick={e => {
                setTest('reset')
            }} /><br/>
        </div>
    )
}