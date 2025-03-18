'use client'
import { useState, useEffect, useRef } from 'react'

export default function Page() {
    const dataRef = useRef([])
    const [list, setList] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetch('/api/search.json', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                dataRef.current = data
                setList(data)
            })
            .catch((error) => console.log('Error:', error))
    }, [])

    useEffect(() => {
        if (!dataRef.current) return
        const timer = setTimeout(() => {
            const regex = new RegExp(search, 'gi')
            setList(dataRef.current?.filter((item) => item.match(regex)) ?? [])
        }, 500)
        return () => clearTimeout(timer)
    }, [search])
    return (
        <div className="wrapper">
            <div className="container mx-auto px-4">
                <h1 className="title text-center">Word List</h1>
                <div className="text-center mb-8">
                    <input
                        type="text"
                        className="border px-2 py-1 mb-2 rounded-md border-gray-400"
                        placeholder="Search..."
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                    />
                    <p className="mb-2 text-gray-400">{list ? list.length : 'loading'} results in total</p>
                </div>
                <div className="grid gap-2 grid-cols-3 sm:grid-cols-6">
                    {list
                        ? list.map((item, i) => (
                              <p key={i} className="text-center">
                                  {item}
                              </p>
                          ))
                        : 'loading'}
                </div>
            </div>
        </div>
    )
}
