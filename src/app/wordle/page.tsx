'use client'

import { WordRow } from '../_componments/wordRow'
import { keyList, wordList } from '../_componments/wordList'
import { useState } from 'react'

const answer = wordList[Math.floor(Math.random() * wordList.length)]
let rowNum = 0
export default function Page() {
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

    const answerArray = Array.prototype.slice.call(answer)
    const initLetter: string[] = []

    const [word, setWord] = useState(initRow)
    const [letter, setLetter] = useState(initLetter)

    document.onkeydown = function (e) {
        const pressKey = e.key
        // typing
        if (letter.length < 5) {
            keyList.forEach((element) => {
                if (pressKey == element) {
                    const updateLetter = [...letter, pressKey]
                    setLetter(updateLetter)

                    const updateWord = function () {
                        word[rowNum].row[letter.length].text = pressKey
                        return word
                    }
                    setWord(updateWord)
                }
            })
        }
        // press enter
        if (e.which == 13) {
            if (letter.length < 5) {
                alert('not enough letters')
            } else {
                const aWord = letter.toString().replace(/,/g, '')
                if (!wordList.find((el) => el === aWord)) {
                    alert('not in word list')
                } else {
                    const updateState = function () {
                        for (let i = 0; i < 5; i++) {
                            if (answerArray[i] === letter[i]) {
                                word[rowNum].row[i].state = 'true'
                            } else {
                                const missWord = answerArray.find((el) => el == letter[i])
                                if (missWord) {
                                    word[rowNum].row[i].state = 'miss'
                                } else {
                                    word[rowNum].row[i].state = 'false'
                                }
                            }
                        }
                        console.log(word)
                        return word
                    }
                    setWord(updateState)
                    if (rowNum < initRow.length - 1) {
                        setLetter(initLetter)
                        rowNum++
                    } else {
                        alert('end game')
                    }
                }
            }
        }
        // press delete
        if (e.which == 8) {
            if (letter.length > 0) {
                const letterLength = letter.length - 1
                const removeLetter = letter.slice(0, letterLength)
                setLetter(removeLetter)

                const removeWord = function () {
                    word[rowNum].row[letter.length - 1].text = ''
                    return word
                }
                setWord(removeWord)
            }
        }
    }
    return (
        <>
            <h1>Wordle</h1>
            <div className="container mx-auto">
                <h2 className="text-center mb-4">Answer: {answer}</h2>

                {initRow.map((row, i) => (
                    <WordRow key={row.id} word={word[i]} />
                ))}
            </div>
        </>
    )
}
