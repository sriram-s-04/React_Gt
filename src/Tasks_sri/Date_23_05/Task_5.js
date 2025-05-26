import React from 'react'

const Task_5 = (arr3) => {
  return (
    <div>
          {/* 5. **Props with Arrays**
   - Pass an array of colors as a prop to a `ColorList` component.
   - Render each color as a colored box or list item. */}
      <ul>
        {arr3.arr3.map((color, index) => (
          <li key={index} style={{ backgroundColor: color, padding: '10px', margin: '5px', color: '#fff' }}>
            {color}
          </li>
        ))}
      </ul>
      </div>
  )
}

export default Task_5