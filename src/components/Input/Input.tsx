import React from 'react'
import { FieldError } from 'react-hook-form'
import './Input.scss'

interface InputProps {
    placeholder?: string
    isDropdown?: boolean
    name?: string
    register: any
    fieldName: string
    isRequired?: boolean
    maxLength?: number
    error?: FieldError
}

export const Input: React.FC<InputProps> = (props) => {
    const { name, placeholder, isDropdown, register, isRequired, maxLength, fieldName, error } = props

    return (
        <div className="input">
            {error && <p className="error">
                {`Поле должно быть ${isRequired ? "заполнено ": ""} `}
            </p>}
            <span>{name}</span>
            <input {...props} {...register(fieldName, {required: isRequired, maxLength})} placeholder={placeholder} />
        </div>
    )
} 