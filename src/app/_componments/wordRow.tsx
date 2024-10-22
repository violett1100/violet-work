'use client'

import { useState } from 'react'
import { WordBlock } from './wordBlock'
import { keyList, wordList } from './wordList'

const answer = wordList[Math.floor(Math.random() * wordList.length)]
const answerArray = Array.prototype.slice.call(answer)

export function WordRow() {
    const initLetter: string[] = []
    const initWord = [
        { id: 0, text: '', state: false },
        { id: 1, text: '', state: false },
        { id: 2, text: '', state: false },
        { id: 3, text: '', state: false },
        { id: 4, text: '', state: false },
    ]

    const [word, setWord] = useState(initWord)
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
                        word[letter.length].text = pressKey
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
                const updateState = function () {
                    for (let i = 0; i < 5; i++) {
                        if (answerArray[i] === letter[i]) {
                            word[i].state = true
                        } else {
                            word[i].state = false
                        }
                    }
                    return word
                }
                setWord(updateState)
                console.log(word)
            }
        }
        // press delete
        if (e.which == 8) {
            if (letter.length > 0) {
                const letterLength = letter.length - 1
                const removeLetter = letter.slice(0, letterLength)
                setLetter(removeLetter)

                const removeWord = function () {
                    word[letter.length - 1].text = ''
                    return word
                }
                setWord(removeWord)
            }
        }
    }
    console.log()
    return (
        <>
            <h2 className="text-center mb-4">Answer: {answer}</h2>
            <div className="flex justify-center">
                {word.map((letter) => (
                    <WordBlock key={letter.id} text={letter.text} state={letter.state} />
                ))}
            </div>
        </>
    )
}
