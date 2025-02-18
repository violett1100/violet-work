'use client'

import { WordRow } from '../_componments/wordRow'
import { PopUp } from '../_componments/popUp'
import { LetterKey, SpecialKey } from '../_componments/keyboard'
import { wordList } from '../_componments/wordList'
import { useState, useEffect } from 'react'
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
    const initRow = [
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
    const answerArray = Array.prototype.slice.call(answer)
    const [keyList, setKeyList] = useState(initKeys)
    const [word, setWord] = useState(initRow)
    const [letter, setLetter] = useState(initLetter)
    const [rowNum, setRowNum] = useState(0)
    const [game, setGame] = useState(true)
    const popText: string[] = []
    const [popUp, setPopUp] = useState(popText)
    const [restart, setRestart] = useState(false)

    function initGame() {
        setAnswer(initAnswer)
        setWord(initRow)
        setLetter(initLetter)
        setRowNum(0)
        setKeyList(initKeys)
        setGame(true)
        setRestart(false)
    }

    function endGame(text: string) {
        popShow(text)
        setGame(false)
        setRestart(true)
    }

    function closeRestart() {
        setRestart(false)
    }

    function typeLetter(pressKey: string) {
        if (letter.length < 5) {
            keyList.forEach((element) => {
                if (pressKey == element.name) {
                    const updateLetter = [...letter, pressKey]
                    setLetter(updateLetter)

                    setWord((word) => {
                        word[rowNum].row[letter.length].text = pressKey
                        return word
                    })
                }
            })
        }
    }

    function deleteLetter() {
        if (letter.length > 0) {
            const letterLength = letter.length - 1
            const removeLetter = letter.slice(0, letterLength)
            setLetter(removeLetter)

            setWord((word) => {
                word[rowNum].row[letter.length - 1].text = ''
                return word
            })
        }
    }

    function ckeckWordState() {
        setWord((prevWord) => {
            answerArray.map((answer, i) => {
                if (answer === letter[i]) {
                    prevWord[rowNum].row[i].state = 'true'
                } else {
                    const missWord = answerArray.find((el) => el == letter[i])
                    if (missWord) {
                        prevWord[rowNum].row[i].state = 'miss'
                    } else {
                        prevWord[rowNum].row[i].state = 'false'
                    }
                }
            })
            return prevWord
        })
    }

    function ckeckKeyState() {
        setKeyList((prevKey) => {
            letter.map((l, i) => {
                const getKey: { state: string } | undefined = prevKey.find((e) => e.name == l)
                if (!getKey) {
                    return
                }
                if (l === answerArray[i]) {
                    getKey.state = 'true'
                } else if (getKey.state !== 'true') {
                    const missWord = answerArray.find((el) => el == letter[i])
                    if (missWord) {
                        getKey.state = 'miss'
                    } else {
                        getKey.state = 'false'
                    }
                }
                console.log()
            })
            return prevKey
        })
    }

    function clickEnter() {
        if (letter.length < initRow[0].row.length) {
            popShow('not enough letters')
        } else {
            const enterWord = letter.toString().replace(/,/g, '')
            if (!wordList.find((el) => el === enterWord)) {
                popShow('not in word list')
            } else {
                ckeckWordState()
                ckeckKeyState()

                if (enterWord == answer) {
                    endGame('good')
                }
                if (rowNum < initRow.length - 1) {
                    setLetter(initLetter)
                    setRowNum(rowNum + 1)
                } else if (rowNum == initRow.length - 1) {
                    setLetter(initLetter)
                    endGame('lose')
                }
            }
        }
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
                if (event.which == 13) {
                    clickEnter()
                }
                // press delete
                if (event.which == 8) {
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
    })

    return (
        <>
            <h1 className="title text-center">Wordle</h1>
            <div
                className={clsx('fixed w-full h-screen flex justify-center items-center top-0 bg-gray-900/50', {
                    block: restart == true,
                    hidden: restart == false,
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

                {initRow.map((row, i) => (
                    <WordRow key={row.id} word={word[i]} />
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
        </>
    )
}
