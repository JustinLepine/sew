import { useRef } from 'react'
import * as fabric from 'fabric'

function Canvas() {
  const canvasElRef = useRef<HTMLCanvasElement>(null)
  console.log(fabric)

  return (
    <canvas ref={canvasElRef}/>
  )
}

export default Canvas