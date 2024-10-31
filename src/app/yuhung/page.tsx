'use client'

import { WordRow } from '../_componments/wordRow'
import { keyList, wordList } from '../_componments/wordList'
import { useState } from 'react'

const answer = wordList[Math.floor(Math.random() * wordList.length)]
const answerArray = Array.prototype.slice.call(answer)

export default function Page() {
    const initWord = [
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

    const [word, setWord] = useState(initWord)
    const [letter, setLetter] = useState('')
    const [rowNum, setRowNum] = useState(0)
    document.onkeydown = function (e) {
        const pressKey = e.key
        // typing
        if (letter.length < 5) {
            keyList.forEach((element) => {
                if (pressKey == element) {
                    setLetter((prevLetter) => prevLetter + pressKey)

                    const newWord = word
                    newWord[rowNum].row[letter.length].text = pressKey
                    setWord(newWord)
                }
            })
        }
        // press enter
        if (e.which == 13) {
            if (letter.length < 5) {
                alert('not enough letters')
            } else {
                const aWord = letter.replace(/,/g, '')
                if (!wordList.find((el) => el === aWord)) {
                    alert('not in word list')
                } else {
                    const newWord = word
                    for (let i = 0; i < 5; i++) {
                        if (answerArray[i] === letter[i]) {
                            newWord[rowNum].row[i].state = 'true'
                        } else {
                            if (answerArray.find((el) => el == letter[i])) {
                                newWord[rowNum].row[i].state = 'miss'
                            } else {
                                newWord[rowNum].row[i].state = 'false'
                            }
                        }
                    }
                    setWord(newWord)
                    if (rowNum < initWord.length - 1) {
                        setLetter('')
                        setRowNum((prevRowNum) => prevRowNum + 1)
                    } else {
                        alert('end game')
                    }
                }
            }
        }
        // press delete
        if (e.which == 8) {
            if (letter.length > 0) {
                const newWord = word
                newWord[rowNum].row[letter.length - 1].text = ''
                setWord(newWord)

                setLetter((prevLetter) => prevLetter.slice(0, -1))
            }
        }
    }
    return (
        <>
            <h1>Wordle</h1>
            <div className="container mx-auto">
                <h2 className="text-center mb-4">Answer: {answer}</h2>

                {initWord.map((row, i) => (
                    <WordRow key={row.id} word={word[i]} />
                ))}
            </div>
        </>
    )
}
