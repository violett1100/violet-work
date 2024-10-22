'use client'

import { WordBlock } from './wordBlock'

export function WordRow(row: { word: { id: number; row: [{ id: number; text: string; state: string }] } }) {
    return (
        <>
            <div className="flex justify-center">
                {row.word.row.map((letter) => (
                    <WordBlock key={letter.id} text={letter.text} state={letter.state} />
                ))}
            </div>
        </>
    )
}
