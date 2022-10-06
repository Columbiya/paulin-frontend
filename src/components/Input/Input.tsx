import React from 'react'
import { FieldError } from 'react-hook-form'
import './Input.scss'

interface InputProps {
    placeholder?: string
    name?: string
    register: any
    fieldName: string
    isRequired?: boolean
    maxLength?: number
    validate?: (value: string) => boolean
    error?: FieldError
}

export const Input: React.FC<InputProps> = (props) => {
    const { name, placeholder, register, isRequired, maxLength, fieldName, error, validate } = props

    return (
        <div className="input">
            {error && <p className="error">
                <span>{error.type == 'required' && `Поле должно быть заполнено`}</span>
                <span>{error.type == 'validate' && "Email должен быть действующий"}</span>
            </p>}
            <span>{name}</span>
            <input {...props} {...register(fieldName, {required: isRequired, maxLength, validate})} placeholder={placeholder} />
        </div>
    )
} 