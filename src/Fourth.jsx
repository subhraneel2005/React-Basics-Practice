import React, { useCallback, useEffect, useRef, useState } from 'react'

function Fourth() {

    const [copied, setCopied] = useState('Copy');

    const [passlength, setPassLength] = useState(6);

    const [numbersAllowed, setNumbersAllowed] = useState(false);

    const [charAllowed, setCharAllowed] = useState(false);

    const [password, setPassword] = useState("");
    
    const passwordGeneratorLogic = useCallback(() => {

        let GeneratedPassword = "";

        let CharStrs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numbersAllowed)
        {
            CharStrs += "0123456789";
        }

        if(charAllowed)
        {
            CharStrs += "!@#$%&*";
        }

        if(numbersAllowed === true && charAllowed === true)
        {
            CharStrs += "0123456789!@#$%^&*";
        }

        for( let i = 1; i <= passlength; i++)
        {
            let randPassword = Math.floor(Math.random()*CharStrs.length+1);

            GeneratedPassword += CharStrs.charAt(randPassword);
        }

        setPassword(GeneratedPassword)

    }, [passlength,numbersAllowed,charAllowed,setPassword])

    useEffect(()=>{passwordGeneratorLogic()},[passlength, numbersAllowed, charAllowed, passwordGeneratorLogic])

    const passRef = useRef(null);

    const copyPass = useCallback(()=>{
        passRef.current?.select()
        window.navigator.clipboard.writeText(password)
    },[password])
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='h-[300px] w-[400px] bg-slate-900 text-slate-300 flex justify-center items-center rounded-xl'>
            <div className='block'><h1 className='text-center text-2xl'>Password Generator</h1>
            <div className='flex gap-3'>
                <input ref={passRef} placeholder='Password' type="text" value={password} readOnly className='w-[300px] h-[40px] text-lime-900 font-bold text-xl p-3 bg-lime-400 rounded-lg' /><button onClick={copyPass} className='px-3
                py-2 bg-sky-800 rounded-xl'>{copied}</button>
            </div>
            <input min={6} max={20} type="range" value={passlength} onChange={(event) => {
                setPassLength(event.target.value)
            }}/><label>Length : {passlength}</label>
            <div className='flex gap-4 mt-4'>
                <input type="checkbox"
                defaultChecked ={numbersAllowed}
                onChange={()=>{setNumbersAllowed((prev) => !prev)}}
                /><label>Numbers</label>
                <input type="checkbox"
                defaultChecked={charAllowed}
                onChange={() => {setCharAllowed((prev)=> !prev)}}
                /><label>Characters</label>
            </div></div>
        </div>
    </div>
  )
}

export default Fourth