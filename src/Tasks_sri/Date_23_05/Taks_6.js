import React from 'react'

const Taks_6 = (user) => {
  return (
    <div>
         {/* 6. **Props with Objects**
   - Pass a `user` object as prop to a `UserDetails` component.
   - Destructure and display `name`, `email`, and `role`. */}
        <p><b>Name:</b> {user.user.name}</p>
        <p><b>Email:</b> {user.user.email}</p>
        <p><b>Role:</b> {user.user.role}</p>
    </div>
  )
}

export default Taks_6