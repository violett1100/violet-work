'use client'
import { useState, useEffect, useRef } from 'react'
import { Loading } from '@/app/_componments/Loading'
import { Suspense } from 'react'

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

// function Timer() {
//     const timerRef = useRef(null)

//     useEffect(() => {
//         timerRef.current = setInterval(() => {
//             console.log('計時中...')
//         }, 1000)

//         return () => clearInterval(timerRef.current) // 清除計時器
//     }, [])

//     return <button onClick={() => clearInterval(timerRef.current)}>停止計時</button>
// }

export default function Page() {
    const [count, setCount] = useState(0)
    function click(params: 'increase' | 'decrease' | 'reset') {
        // switch (params) {
        //     case 'increase':
        //         setCount(count + 1)
        //         break
        //     case 'decrease':
        //         setCount(count - 1)
        //         break
        //     case 'reset':
        //         setCount(0)
        //         break
        // }
        const actions: Record<string, number> = {
            increase: count + 1,
            decrease: count - 1,
            reset: 0,
        }
        setCount(actions[params])
    }

    // const [data, setData] = useState(null)
    // const [data, setData] = useState({ id: '2', name: 'Violet', content: 'abc' })

    // useEffect(() => {
    //     fetch('http://localhost:3000/api/user/1', {
    //         method: 'POST',
    //         body: JSON.stringify(data),
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //         }),
    //     })
    //         .then((response) => response.json())
    //         .then((data) => console.log(data))
    //         .catch((error) => console.log('Error:', error))
    // }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3000/api/users')
    //             const result = await response.json()
    //             setData(result)
    //         } catch (error) {
    //             console.log('Error:', error)
    //         }
    //     }
    //     fetchData()
    // }, [])

    return (
        <>
            <div className="wrapper">
                <Suspense fallback={<Loading />}>{/* <div>{data ? data.id : <Loading />}</div> */}</Suspense>
                <Suspense>{/* <div>{data ? data.name : 'Loading...'}</div> */}</Suspense>
                <p>{count}</p>
                <button onClick={() => click('increase')} className="border px-2 m-2">
                    +1
                </button>
                <button onClick={() => click('decrease')} className="border px-2 m-2">
                    -1
                </button>
                <button onClick={() => click('reset')} className="border px-2 m-2">
                    reset
                </button>
                <hr className="my-4" />
                <PreviousValue />
                <hr className="my-4" />
                {/* <Timer /> */}
            </div>
        </>
    )
}
