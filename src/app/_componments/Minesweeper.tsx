'use client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Bomb, FlagTriangleRight, Smile, Frown, Laugh } from 'lucide-react'
import { getNeighborBombs, getNeighbors, getRandomBombs } from '../utils/getMinesweeper'

type CubeType = {
  id: number
  isBomb: boolean
  hasBomb: number
  isOpen: boolean
  hasFlag: boolean
  isExplode: boolean
}

export function Minesweeper() {
  const [easyMode, setEasyMode] = useState(true)
  const [endGame, setEndGame] = useState(false)
  const [isWon, setIsWon] = useState(false)
  const [count, setCount] = useState(10)

  const newGame = (easyMode: boolean) => {
    const colNumber = easyMode ? 8 : 16
    const bombNumber = easyMode ? 10 : 40
    const bombs = getRandomBombs(colNumber, bombNumber)
    const array = Array.from({ length: colNumber * colNumber }, (_, i) => ({
      id: i,
      isBomb: bombs.some((item) => (item === i ? true : false)),
      hasBomb: getNeighborBombs(colNumber, i, bombs),
      isOpen: false,
      hasFlag: false,
      isExplode: false,
    }))
    setIsWon(false)
    setEndGame(false)
    setCount(bombNumber)
    return array
  }

  const [cubes, setCubes] = useState<CubeType[]>(() => newGame(easyMode))

  useEffect(() => {
    if (cubes.filter((c) => !c.isBomb && !c.isOpen).length === 0) {
      setEndGame(true)
      setIsWon(true)
    }
    const flags = cubes.filter((c) => c.hasFlag).length
    setCount(() => {
      const bombNumber = easyMode ? 10 : 40
      return bombNumber - flags
    })
  }, [cubes, easyMode])

  return (
    <div className="wrapper">
      <div className="settings">
        <div className="count">{count}</div>
        <div className="btn-group">
          <button
            className="btn"
            onClick={() => {
              setEasyMode(() => {
                setCubes(newGame(!easyMode))
                return !easyMode
              })
            }}
          >
            {easyMode ? 'Easy' : 'Hard'}
          </button>
          <button className="btn" onClick={() => setCubes(newGame(easyMode))}>
            {endGame && isWon ? (
              <Laugh size={28} strokeWidth={2} />
            ) : endGame ? (
              <Frown size={28} strokeWidth={2} />
            ) : (
              <Smile size={28} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>
      <div className={`grid board ${easyMode ? 'grid-cols-8' : 'grid-cols-16'}`}>
        {cubes.map((item) => (
          <Cube
            key={item.id}
            item={item}
            endGame={endGame}
            setCubes={setCubes}
            setEndGame={setEndGame}
            easyMode={easyMode}
          />
        ))}
      </div>
    </div>
  )
}

const Cube = (props: {
  key: number
  item: CubeType
  endGame: boolean
  setCubes: Dispatch<SetStateAction<CubeType[]>>
  setEndGame: Dispatch<SetStateAction<boolean>>
  easyMode: boolean
}) => {
  const { item, endGame, setCubes, setEndGame, easyMode } = props
  const colNumber = easyMode ? 8 : 16

  const handleClick = () => {
    if (item.hasFlag || endGame) return
    if (item.isBomb) clickBomb()
    if (!item.hasBomb) {
      setCubes((cubes) => {
        const shouldOpen: number[] = []
        checkNeighbors([item.id], shouldOpen, cubes)
        return cubes.map((cube, i) => (shouldOpen.includes(i) ? { ...cube, isOpen: true } : cube))
      })
    }

    openCube()
  }

  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setCubes((cubes) =>
      cubes.map((cube, i) => (i === item.id ? { ...cube, hasFlag: !item.hasFlag } : cube))
    )
  }
  const openCube = () => {
    setCubes((cubes) => cubes.map((cube, i) => (i === item.id ? { ...cube, isOpen: true } : cube)))
  }
  const clickBomb = () => {
    setEndGame(true)
    setCubes((cubes) =>
      cubes.map((cube, i) =>
        i === item.id
          ? { ...cube, isExplode: true, isOpen: true }
          : (cube.isBomb && !cube.hasFlag) || (!cube.isBomb && cube.hasFlag)
          ? { ...cube, isOpen: true }
          : cube
      )
    )
  }

  const checkNeighbors = (array: number[], shouldOpen: number[], cubes: CubeType[]) => {
    if (array.length === 0) return
    const newArray: number[][] = []
    array.forEach((i) => {
      shouldOpen.push(i)
    })
    array
      .filter((a) => !cubes[a].hasBomb)
      .forEach((i) => {
        const newNei = getNeighbors(colNumber, i).filter((a) => !shouldOpen.includes(a))
        newArray.push(newNei)
      })
    return checkNeighbors([...new Set(newArray.flat())], shouldOpen, cubes)
  }

  const display = item.isBomb ? (
    <Bomb size={18} strokeWidth={2.5} className={`${item.isExplode && 'text-red-600'}`} />
  ) : !item.isBomb && item.hasFlag ? (
    <FlagTriangleRight size={18} strokeWidth={2.5} className="text-red-600" />
  ) : item.hasBomb !== 0 ? (
    item.hasBomb.toString()
  ) : (
    ''
  )

  return (
    <button
      className={`cube ${item.isOpen && 'opened'} ${item.hasFlag && 'flag'} ${
        endGame && 'end-game'
      }`}
      onClick={handleClick}
      onContextMenu={handleRightClick}
    >
      {/* {display} */}
      {item.isOpen && display}
      {!item.isOpen && item.hasFlag && <FlagTriangleRight size={18} strokeWidth={2.5} />}
    </button>
  )
}
