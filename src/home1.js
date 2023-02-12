import { useState } from "react";

const Home = () => {

   // let name='suhas';;;

   const [name,setName]= useState('Suhas');
    const [age,setAge]= useState(25);

    const handleClick = () => {
        setName('Sugi');
        setAge(30);
    }
    // const handleClickAgain = (name, e) => {
    //     console.log('hello '+ name,e.target);
    // }
    return (  
        
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e)=>handleClickAgain('Suhas',e)}>Click me again</button> */}
        </div>
    );
}
 
export default Home;