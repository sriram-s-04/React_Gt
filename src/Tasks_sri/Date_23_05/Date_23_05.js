
import React from 'react'
import Card_1 from './Card_task_1';
import Task_2 from './Task_2';
import Card_task_3 from './Card_task_3';
import img from './imgs/ing.jpeg';
import Task_4 from './Task_4';
import Task_5 from './Task_5';
import Taks_6 from './Taks_6';
import Task_7 from './Task_7';

const Date_23_05 = () => {
   let task1=[
      {
         name:"SRIRAM S",
         age:21,
         number:785545254
      }
   ]
   let task2="sriram";
   let task3={
      name:"samsung s23 ultra",
      price:20000,
      image:{img}
   }
   let task5=["red", "green", "blue", "yellow", "purple"];
   let task6={
      name:"Sriram",
      email:"srfddfgd@gmail.com",
      role:"Admin",
   }
   let task7={
      name:"Sriram",
      age:21,
      number:785545254,
      image:{img}
   }
  return (
    <div>
    {/* 1. **Display Name in a Card**
   - Create a `UserCard` component.
   - Pass name and age as props.
   - Render them in a styled card. */}
   <div>
    <Card_1 arr={task1}/>
   </div>
{/* 2. **Welcome Component**
   - Create a `Welcome` component that receives a `username` prop.
   - Display: `"Hello, {username}!"` */}
   <div>
      <Task_2 uname={task2}/>
   </div>


{/* 3. **Product Display**
   - Pass `name`, `price`, and `image URL` as props to a `Product` component.
   - Display product info in a styled layout. */}
   <div>
      <Card_task_3 arr2={task3}/>
   </div>

{/* 4. **Conditional Rendering with Props**
   - Create a component that shows "Eligible to Vote" if `age >= 18`, else "Not Eligible".
   - Pass `age` as prop. */}
   <div>
      <Task_4 age = {task1[0].age}/>

   </div>
{/* 5. **Props with Arrays**
   - Pass an array of colors as a prop to a `ColorList` component.
   - Render each color as a colored box or list item. */}
   <div>
      <Task_5 arr3={task5}/>
   </div>

{/* 6. **Props with Objects**
   - Pass a `user` object as prop to a `UserDetails` component.
   - Destructure and display `name`, `email`, and `role`. */}
<div>
   <Taks_6 user={task6}/>
</div>
{/* 7. Card with Children Prop
    - Create a `Card` component that accepts `children`.
    - Use it to wrap different types of content like images, user details, buttons */}
    <div>
      <Task_7 details={task7} />
    </div>
    </div>

  )
}

export default Date_23_05