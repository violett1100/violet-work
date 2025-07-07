'use client'

import { WordRow } from '@/app/_componments/wordRow'
import { PopUp } from '@/app/_componments/popUp'
import { LetterKey, SpecialKey } from '@/app/_componments/keyboard'
import { wordList } from '@/app/_componments/wordList'
import { useState, useEffect, useCallback, useMemo } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export default function Page() {
    const initAnswer = wordList[Math.floor(Math.random() * wordList.length)]
    const initLetter: string[] = []
    const initKeys = [
        { id: 0, name: 'q', state: '' },
        { id: 1, name: 'w', state: '' },
        { id: 2, name: 'e', state: '' },
        { id: 3, name: 'r', state: '' },
        { id: 4, name: 't', state: '' },
        { id: 5, name: 'y', state: '' },
        { id: 6, name: 'u', state: '' },
        { id: 7, name: 'i', state: '' },
        { id: 8, name: 'o', state: '' },
        { id: 9, name: 'p', state: '' },
        { id: 10, name: 'a', state: '' },
        { id: 11, name: 's', state: '' },
        { id: 12, name: 'd', state: '' },
        { id: 13, name: 'f', state: '' },
        { id: 14, name: 'g', state: '' },
        { id: 15, name: 'h', state: '' },
        { id: 16, name: 'j', state: '' },
        { id: 17, name: 'k', state: '' },
        { id: 18, name: 'l', state: '' },
        { id: 19, name: 'z', state: '' },
        { id: 20, name: 'x', state: '' },
        { id: 21, name: 'c', state: '' },
        { id: 22, name: 'v', state: '' },
        { id: 23, name: 'b', state: '' },
        { id: 24, name: 'n', state: '' },
        { id: 25, name: 'm', state: '' },
    ]
    const initRows = [
        {
            id: 0,
            row: [
                { id: 0, text: '', state: '' },
                { id: 1, text: '', state: '' },
                { id: 2, text: '', state: '' },
                { id: 3, text: '', state: '' },
                { id: 4, text: '', state: '' },
            ],
        },
        {
            id: 1,
            row: [
                { id: 0, text: '', state: '' },
                { id: 1, text: '', state: '' },
                { id: 2, text: '', state: '' },
                { id: 3, text: '', state: '' },
                { id: 4, text: '', state: '' },
            ],
        },
        {
            id: 2,
            row: [
                { id: 0, text: '', state: '' },
                { id: 1, text: '', state: '' },
                { id: 2, text: '', state: '' },
                { id: 3, text: '', state: '' },
                { id: 4, text: '', state: '' },
            ],
        },
        {
            id: 3,
            row: [
                { id: 0, text: '', state: '' },
                { id: 1, text: '', state: '' },
                { id: 2, text: '', state: '' },
                { id: 3, text: '', state: '' },
                { id: 4, text: '', state: '' },
            ],
        },
        {
            id: 4,
            row: [
                { id: 0, text: '', state: '' },
                { id: 1, text: '', state: '' },
                { id: 2, text: '', state: '' },
                { id: 3, text: '', state: '' },
                { id: 4, text: '', state: '' },
            ],
        },
        {
            id: 5,
            row: [
                { id: 0, text: '', state: '' },
                { id: 1, text: '', state: '' },
                { id: 2, text: '', state: '' },
                { id: 3, text: '', state: '' },
                { id: 4, text: '', state: '' },
            ],
        },
    ]
    const [answer, setAnswer] = useState(initAnswer)
    const answerArray = useMemo(() => [...answer], [answer])
    const [keyList, setKeyList] = useState(initKeys)
    const [rows, setRows] = useState(initRows)
    const [letter, setLetter] = useState(initLetter)
    const [currentRow, setCurrentRow] = useState(0)
    const [game, setGame] = useState(true)
    const popText: string[] = []
    const [popUp, setPopUp] = useState(popText)
    const [showRestartBtn, setShowRestartBtn] = useState(false)

    function initGame() {
        setAnswer(initAnswer)
        setRows(initRows)
        setLetter(initLetter)
        setCurrentRow(0)
        setKeyList(initKeys)
        setGame(true)
        setShowRestartBtn(false)
    }

    function endGame(text: string) {
        popShow(text)
        setGame(false)
        setShowRestartBtn(true)
    }

    function closeRestart() {
        setShowRestartBtn(false)
    }

    const typeLetter = useCallback((pressKey: string) => {
        if (letter.length < 5) {
            if (keyList.find((key) => key.name === pressKey)) {
                const updateLetter = [...letter, pressKey]
                setLetter(updateLetter)

                setRows((prev) => {
                    const newRow = [...prev]
                    newRow[currentRow].row[letter.length].text = pressKey
                    return newRow
                })
            }
        }
    }, [letter])

    const deleteLetter = useCallback(() => {
        if (letter.length > 0) {
            const letterLength = letter.length - 1
            const removeLetter = letter.slice(0, letterLength)
            setLetter(removeLetter)

            setRows((prev) => {
                const newRow = [...prev]
                newRow[currentRow].row[letter.length - 1].text = ''
                return newRow
            })
        }
    }, [letter])

    const clickEnter = useCallback(() => {
        if (letter.length < initRows[0].row.length) {
            popShow('not enough letters')
        } else {
            const enterWord = letter.toString().replace(/,/g, '')
            if (!wordList.find((el) => el === enterWord)) {
                popShow('not in word list')
            } else {
                checkWordState()
                checkKeyState()

                if (enterWord === answer) {
                    endGame('good')
                }
                if (currentRow < initRows.length - 1) {
                    setLetter(initLetter)
                    setCurrentRow(currentRow + 1)
                } else if (currentRow === initRows.length - 1) {
                    setLetter(initLetter)
                    endGame('lose')
                }
            }
        }
    }, [letter, currentRow])

    function checkWordState() {
        setRows((prev) => {
            const newRows = [...prev]
            const newRow = [...newRows[currentRow].row]
            answerArray.forEach((item, i) => {
                if (item === letter[i]) {
                    newRow[i] = { ...newRow[i], state: 'true' }
                } else {
                    const missWord = answerArray.find((el) => el === letter[i])
                    if (missWord) {
                        newRow[i] = { ...newRow[i], state: 'miss' }
                    } else {
                        newRow[i] = { ...newRow[i], state: 'false' }
                    }
                }
            })
            newRows[currentRow] = { ...newRows[currentRow], row: newRow }
            return newRows
        })
    }

    function checkKeyState() {
        setKeyList((prevKey) => {
            letter.forEach((item, i) => {
                const getKey: { state: string } | undefined = prevKey.find((e) => e.name === item)
                if (!getKey) return
                if (item === answerArray[i]) {
                    getKey.state = 'true'
                } else if (getKey.state !== 'true') {
                    const missWord = answerArray.find((el) => el === letter[i])
                    if (missWord) {
                        getKey.state = 'miss'
                    } else {
                        getKey.state = 'false'
                    }
                }
            })
            return prevKey
        })
    }

    function popShow(text: string) {
        setPopUp((popUp) => [...popUp, text])
        setTimeout(() => {
            setPopUp((popUp) => popUp.slice(1))
        }, 850)
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (game) {
                // typing
                typeLetter(event.key)
                // press enter
                if (event.key === 'Enter') {
                    clickEnter()
                }
                // press delete
                if (event.key === 'Backspace') {
                    deleteLetter()
                }
            }
        }
        // 註冊 keydown 事件
        document.addEventListener('keydown', handleKeyDown)

        // 清理事件監聽器，防止記憶體洩漏
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [typeLetter, clickEnter, deleteLetter])

    return (
        <>
            <h1 className="title text-center">Wordle</h1>
            <div
                className={clsx('fixed w-full h-screen flex justify-center items-center top-0 bg-gray-900/50', {
                    block: showRestartBtn === true,
                    hidden: showRestartBtn === false,
                })}
            >
                <div
                    onClick={initGame}
                    className="inline-block cursor-pointer p-2 px-3 rounded-full m-2 bg-cyan-600 text-white hover:text-white hover:bg-cyan-500"
                >
                    RESTART
                </div>
                <div
                    onClick={closeRestart}
                    className="inline-block cursor-pointer p-2 px-3 rounded-full m-2 bg-cyan-600 text-white hover:text-white hover:bg-cyan-500"
                >
                    CLOSE
                </div>
            </div>
            <div className="container mx-auto px-4">
                {/* <h2 className="text-center mb-4">Answer: {answer}</h2> */}

                {initRows.map((row, i) => (
                    <WordRow key={row.id} word={rows[i]} />
                ))}
                <div className="text-center mt-4">
                    <div>
                        {keyList.slice(0, 10).map((key, i) => (
                            <LetterKey
                                key={i}
                                keyValue={key}
                                onKeyClick={() => typeLetter(keyList.slice(0, 10)[i].name)}
                            />
                        ))}
                    </div>
                    <div>
                        {keyList.slice(10, 19).map((key, i) => (
                            <LetterKey
                                key={i}
                                keyValue={key}
                                onKeyClick={() => typeLetter(keyList.slice(10, 19)[i].name)}
                            />
                        ))}
                    </div>
                    <div>
                        <SpecialKey name="enter" onKeyClick={() => clickEnter()} />
                        {keyList.slice(19).map((key, i) => (
                            <LetterKey
                                key={i}
                                keyValue={key}
                                onKeyClick={() => typeLetter(keyList.slice(19)[i].name)}
                            />
                        ))}
                        <SpecialKey name="back" onKeyClick={() => deleteLetter()} />
                    </div>
                </div>
                <div className="fixed inset-x-2/4 top-1/4">
                    {popUp.map((text, i) => (
                        <PopUp key={i} text={text} />
                    ))}
                </div>
            </div>
            <div className="text-center text-gray-400 mt-4">
                <Link className="underline" href="/search" target="_blank">
                    Need a hint?
                </Link>
            </div>
        </>
    )
}
