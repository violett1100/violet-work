'use client'
import { useState, useEffect, useRef } from 'react'

function PreviousValue() {
    const [count, setCount] = useState(0)
    const prevCountRef = useRef(0)

    useEffect(() => {
        prevCountRef.current = count // 更新上一個 count 值，但不觸發渲染
    })

    return (
        <div>
            <p>現在值：{count}</p>
            <p>前一次的值：{prevCountRef.current}</p>
            <button onClick={() => setCount(count + 1)}>增加</button>
        </div>
    )
}

function Timer() {
    const timerRef = useRef(null)

    useEffect(() => {
        timerRef.current = setInterval(() => {
            console.log('計時中...')
        }, 1000)

        return () => clearInterval(timerRef.current) // 清除計時器
    }, [])

    return <button onClick={() => clearInterval(timerRef.current)}>停止計時</button>
}

export default function Page() {
    // const [count, setCount] = useState(0)
    // function click(prams: 'increase' | 'decrease' | 'reset') {
    //     prams === 'increase'
    //         ? setCount(count + 1)
    //         : prams === 'decrease'
    //         ? setCount(count - 1)
    //         : prams === 'reset'
    //         ? setCount(0)
    //         : ''
    // }
    return (
        <>
            <div className="wrapper">
                {/* <p>{count}</p>
                <button onClick={() => click('increase')} className="border px-2 m-2">
                    +1
                </button>
                <button onClick={() => click('decrease')} className="border px-2 m-2">
                    -1
                </button>
                <button onClick={() => click('reset')} className="border px-2 m-2">
                    reset
                </button> */}

                <PreviousValue />
                <hr />
                <Timer />
            </div>
        </>
    )
}
