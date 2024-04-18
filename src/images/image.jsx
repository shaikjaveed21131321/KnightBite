import React, { useRef } from 'react'

const image = () => {
    let ref = useRef()
  return (
    <div>
        <img ref={ref}  src="image" alt="image" />
    </div>
  )
}

export default image