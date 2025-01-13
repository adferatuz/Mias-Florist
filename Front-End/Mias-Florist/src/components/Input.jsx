import { useState } from 'react';
import './styles/inputStyles.css'

export default function Input ({
    type,
    name,
    placeholder,
    value,
    id,
    onChange,
    className
}){
    const [inputValue, setInputValue] = useState(value || '')

    const handleChange = (e) => {
        setInputValue(e.target.value)
        if(onChange){
            onChange(e)
        }
    }

    return(
        <>
            <input 
                type={type}
                name={name}
                placeholder={placeholder}
                value={inputValue}
                id={id}
                onChange={handleChange}
                className={className}
            />
        </>
    )
}