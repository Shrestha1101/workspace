import React ,{useState} from 'react';

const Hooks =() => {

const state = useState();

const [count, setCount] =useState(0) //[currentdata,updateddata}=initialdata

const IncNum=() => {
    setCount(count + 1);
    
}

    return(
        <>
            <h1 className= 'heading'> {count}</h1>
            <button onClick={IncNum}> CLICK ME</button>
        </>
    );
};

export default Hooks;