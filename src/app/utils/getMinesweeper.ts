export const getRandomBombs = (size: number, bomb: number) => {
  const max = size * size
  const arr = Array.from({ length: max }, (_, i) => i)
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr.slice(0, bomb)
}

export function getNeighbors(size: number, num: number): number[] {
  const row = Math.floor(num / size)
  const col = num % size
  const result: number[] = []
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      const r = row + dr
      const c = col + dc
      if (r >= 0 && r < size && c >= 0 && c < size) {
        const value = r * size + c + 1
        result.push(value - 1)
      }
    }
  }
  return result
}

export function getNeighborBombs(size: number, num: number, bombs: number[]) {
  const neighbors = getNeighbors(size, num)
  const neighborHasBombs = neighbors.filter((n) => bombs.includes(n))
  return neighborHasBombs.length
}
