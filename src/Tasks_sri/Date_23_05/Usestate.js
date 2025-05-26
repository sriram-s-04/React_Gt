import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';

export const Usestate = () => {
  const [num, setNum] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>      
 {/*  1. Counter App  
Create a counter app with buttons to increment and decrement a number. Use `useState` to store and update the count. */}
    {/* <div>
        <h1>{num}</h1>
        <button onClick={() => setNum(num + 1)}>Increment</button>
        <button onClick={() => setNum(num - 1)}>Decrement</button>
    </div> */}
<br />
 {/* 2. Name Input Form 
Create an input field where the value of the input updates a displayed name as the user types. Use `useState` to manage the name. */}
    {/* <div>
        <input type="text" onChange={(e) => setNum(e.target.value)} />
        <h2>{num}</h2>
    </div>     */}
 {/* 3. Toggle Light/Dark Mode
Build a button that toggles between light and dark modes, changing the background and text color using `useState`. */}
    {/* <div style={{ backgroundColor: num === 0 ? 'white' : 'black', color: num === 0 ? 'black' : 'white' }}>
        <button style={{width:"20px",height:"20px"}} onClick={() => setNum(num === 0 ? 1 : 0)}/>
        <h2>{num === 0 ? 'Light Mode' : 'Dark Mode'}</h2>
    </div> */}
 {/* 4. Textbox Clear  
Create a text box where the value can be cleared by clicking a "Clear" button. Use `useState` to manage the input value. */}
    {/* <div>   
        <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
        <br />
        <button onClick={() => setNum('')}>Clear</button>
    </div> */}
 {/* 5. Character Counter  
Create an input field that displays the number of characters typed in real-time. Use `useState` to manage the input value. */}
    {/* <div>
        <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
        <p>Character Count:{num.length}</p>
    </div> */}
 {/* 6. Change Background Color 
Build a button that changes the background color of a div when clicked. Use `useState` to manage the background color. */}
{/* <div style={{ backgroundColor: num === 0 ? '#206761' : '#7cc1b7', color: num === 0 ? '#7cc1b7' : '#206761' }}>
        <button style={{width:"20px",height:"20px"}} onClick={() => setNum(num === 0 ? 1 : 0)}/>
        <h2>{num === 0 ? 'Original' : 'Changed'}</h2>
    </div> */}
 {/* 7. Traffic Light Simulation  
Use `if-else` to switch between "Red", "Yellow", and "Green" lights when a button is clicked. Start with "Red", then move to "Yellow", then "Green", and loop back to "Red". */}
    {/* <div style={{ backgroundColor: num === 0 ? 'red' : num === 1 ? 'yellow' : 'green', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>{num === 0 ? 'Red' : num === 1 ? 'Yellow' : 'Green'}</h1>
        <button onClick={() => setNum((num + 1) % 3)}>Next Light</button>
        
    </div> */}
 {/* 8. FizzBuzz Game  
Create an input field where users enter a number. Use `if-else` to check:  
- If divisible by 3, display "Fizz".  
- If divisible by 5, display "Buzz".  
- If divisible by both, display "FizzBuzz".  
- Otherwise, display the number. */}
{/* <div>
    <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
    <br />
    <button onClick={   () => {
        let output = '';
        if (num % 3 === 0 && num % 5 === 0) {
            output = 'FizzBuzz';
        } else if (num % 3 === 0) {
            output = 'Fizz';
        } else if (num % 5 === 0) {
            output = 'Buzz';
        } else {
            output = num;
        }
        alert(output);
        
        
    }}>Check FizzBuzz</button>
    

</div> */}

 {/* 9. Multiplication Table Generator  
Create an input field where users enter a number. Use a loop (`for` or `.map()`) to generate and display the multiplication table for that number up to 10.  
Example: If the user enters 5, display "5 x 1 = 5", "5 x 2 = 10", ..., "5 x 10 = 50". */}
    {/* <div>
        <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
        <br />
        <button onClick={() => {
            let table = [];
            for (let i = 1; i <= 10; i++) {
                table.push(`${num} x ${i} = ${num * i}`);
            }
            alert(table.join('\n'));
        }}>Generate Multiplication Table</button>
    </div> */}
 {/* 10. Factorial Calculator  
Allow the user to enter a number. Use a loop to calculate and display its factorial.  
Example: If the user enters 5, show "5! = 120". */}
    {/* <div>
        <input type='number' value={num} onChange={(e)=>setNum(e.target.value)}/>
        <br />      
        <button onClick={()=>{
            let factorial =1;
            for( let itr=1 ;itr <=num;itr++){
                factorial *= itr;
            }
            alert(`${Math.floor(factorial)} is the factorial of ${num}`);
            
        }} >Click To See The Factorial</button>
      
    </div> */}

 {/* 11. Prime Number Checker  
Create an input field where users enter a number. Use a loop and `if-else` to check if the number is prime.  
Example: If the user enters 7, display "Prime"; if 8, display "Not Prime". */}
    {/* <div>
        <input type='number' value={num} onChange={(e)=>setNum(e.target.value)}/>
        <br />
        <button onClick={()=>{
            let isPrime = true;
            if(num <= 1) isPrime = false;
            for(let i=2; i<=Math.sqrt(num); i++){
                if(num % i === 0){
                    isPrime = false;
                    break;
                }
            }
            alert(isPrime ==true ? `${num} is a Prime Number` : `${num} is Not a Prime Number`);
        }}>Check Prime</button>
    </div> */}

 {/* 12. Rock-Paper-Scissors Game  
Let the user choose "Rock", "Paper", or "Scissors". Generate a random choice for the computer. Use `if-else` to determine the winner based on game rules. */}
    {/* <div>
        <select onChange={(e) => setNum(e.target.value)}>
            <option value="">Select</option>
            <option value="rock">Rock</option>
            <option value="paper">Paper</option>
            <option value="scissors">Scissors</option>
        </select>
        <Button onClick={() => {
            const choices = ['rock', 'paper', 'scissors'];
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            let result = '';
            
            if (num === computerChoice) {
            result = "It's a tie!";
            } else if (
            (num === 'rock' && computerChoice === 'scissors') ||
            (num === 'paper' && computerChoice === 'rock') ||
            (num === 'scissors' && computerChoice === 'paper')
            ) {
            result = `You win! Computer chose ${computerChoice}.`;
            } else {
            result = `You lose! Computer chose ${computerChoice}.`;
            }
            
            alert(result);
        }}>Play</Button>
    </div> */}
 {/* 13. Login Form Validation  
Create a login form with username and password fields.  
- If either field is empty, show an error message.  
- If the password is less than 6 characters, show "Password too short!".  
- On successful login, display "Welcome, [username]!". */}
    {/* <div>
        <input type="text" placeholder="Username" onChange={(e) => setNum(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setNum(e.target.value)} />
        <Button onClick={() => {
            if (!num || !num) {
                alert("Both fields are required!");
            } else if (num.length < 6) {
                alert("Password too short!");
            } else {
                alert(`Welcome, ${num}!`);
            }
        }}>Login</Button>
    </div> */}
 {/* 14. Show or Hide Password  
Create a password input field. Add a checkbox labeled "Show Password".  
- If checked, display the password as plain text.  
- If unchecked, hide it. */} 
    <div>
        <input
            type={showPassword ? "text" : "password"}
            value={num}
            onChange={(e) => setNum(e.target.value)}
        />
        <label>
            <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
            />
            Show Password
        </label>
    </div>
    </div>
  )
}
