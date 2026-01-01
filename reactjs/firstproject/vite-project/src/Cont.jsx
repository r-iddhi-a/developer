import React, { useMemo, useState } from 'react'

const Cont = () => {
    let [count,setCount]=useState(0);
    let [num,setNum]=useState(0);

    const addCount=()=>{
        console.log('add Count fun Called..')
        setCount(count+1);
    }
    const addNum=()=>{
        console.log("add num fun called..")
        setNum(num+10)
    }
    const addCalc=(a)=>{
        console.log('add Calc Func Called..')

        for(let i=0;i<10000;i++){
            a+=i;
        }
        return a;
    }
    const calc =useMemo(()=>{
        addCalc(count)
    },[count])
  return (
    <div>
        <h4>Use Memo Example</h4>
        <h4>Count is -- {count}</h4>
        <button onClick={addCount}>Add</button>
        <h4>Num is --{num}</h4>
        <button onClick={addNum}>Add</button>
        <h5>Calc is -- {calc}</h5>
    </div>
  )
}
export default Cont;
