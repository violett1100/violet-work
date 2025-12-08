import { Minesweeper } from '@/app/componments/Minesweeper'
import '@/app/assets/css/Minesweeper.min.css'

export default function Page() {
  return (
    <>
      <h1 className="title text-center">Minesweeper</h1>
      <div id="minesweeper" className="text-center">
        <Minesweeper />
      </div>
    </>
  )
}
