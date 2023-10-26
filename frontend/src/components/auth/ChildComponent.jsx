import React, {useState} from 'react';
import '../style/ChildComponent.css';




const ChildComponent = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e)=>{
        setInputValue(e.target.value);
    };

    const handleSubmit = ()=>{
        onTextChange(inputValue);
    };

    return (
        <div className='child-content'>
            <h2>Child Component</h2>
            <input value={inputValue} onChange={handleChange} />
            <button className='child-button' onClick={handleSubmit}>Submit</button>
        </div>
    );
}


export default ChildComponent;