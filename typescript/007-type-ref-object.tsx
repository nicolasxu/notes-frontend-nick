import { useRef, RefObject, MutableRefObject } from 'react'
import "./style.scss"
import usePosition from './hooks/usePosition'
interface Position  {
  x: number;
  y: number
}

function usePosition(ref: RefObject<HTMLDivElement | null>) : Position {
  return {
    x: 0,
    y: 0
  }
}

function MovingSquare() {
  const squareRef = useRef<HTMLDivElement>(null)
  const position = usePosition(squareRef)

  return (<div className="moving-square-container">
    <div className="moving-square" ref={squareRef}></div>

  </div>)
}

export default MovingSquare