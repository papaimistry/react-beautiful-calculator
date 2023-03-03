import React from 'react';
import { useState } from 'react';





const Main = () => {
    const[displayValue,setDisplayValue] = useState("");


    function handleDigitChange(digit){
        setDisplayValue(displayValue.concat(digit.target.name))
    }

    function handleClearPress(){
        setDisplayValue('')
    }

    function clear(){
        setDisplayValue(displayValue.slice(0 , displayValue.length -1))
    }

    function calculate(){
        try{
            setDisplayValue(eval(displayValue).toString());
        }catch(err){
            setDisplayValue("Error");
        }
    }
  return (

    <>
    <div className="wrapper">
        <section className='screen'>
           {displayValue}
        </section>

        <section className='calc-buttons'>
            <div className="calc-button-row">
                <button onClick={handleClearPress} className='calc-button double'>
                    C
                </button>
                <button onClick={clear} className='calc-button'>
                    &larr;
                </button>
                <button name='/' onClick={handleDigitChange} className='calc-button'>
                    &divide;
                </button>
            </div>

            <div className="calc-button-row">
            <button name='7' onClick={handleDigitChange} className='calc-button'>
                    7
                </button>
                <button name='8' onClick={handleDigitChange} className='calc-button'>
                    8
                </button>
                <button name='9' onClick={handleDigitChange} className='calc-button'>
                    9
                </button>
                <button name='*' onClick={handleDigitChange}  className='calc-button'>
                    &times;
                </button>
            </div>

            <div className="calc-button-row">
            <button name='4' onClick={handleDigitChange}  className='calc-button'>
                    4
                </button>
                <button name='5' onClick={handleDigitChange}  className='calc-button'>
                    5
                </button>
                <button name='6' onClick={handleDigitChange}  className='calc-button'>
                    6
                </button>
                <button name='-' onClick={handleDigitChange}  className='calc-button'>
                    &minus;
                </button>
            </div>

            <div className="calc-button-row">
            <button name='1' onClick={handleDigitChange}  className='calc-button'>
                    1
                </button>
                <button name='2' onClick={handleDigitChange}  className='calc-button'>
                    2
                </button>
                <button name='3' onClick={handleDigitChange}  className='calc-button'>
                    3
                </button>
                <button name='+' onClick={handleDigitChange}  className='calc-button'>
                    &#43;
                </button>
            </div>
            <div className="calc-button-row">
                <button name='0' onClick={handleDigitChange}  className='calc-button double'>
                    0
                </button>
                <button name='.' onClick={handleDigitChange}  className='calc-button'>
                    .
                    </button>
                <button onClick={calculate}  className='calc-button'>
                    &#61;
                </button>
            </div>
        </section>
    </div>


    </>
  )
}

export default Main
