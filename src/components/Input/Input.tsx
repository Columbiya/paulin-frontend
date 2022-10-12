import React, { FormEvent, useEffect, useState } from 'react'
import { FieldError } from 'react-hook-form'
import { News } from '../../schemas/News'
import { Partner } from '../../schemas/Partner'
import './Input.scss'

interface IValidate {
    email?: (val: string) => boolean
    isLessThan?: (val: string) => boolean
    isMoreThan?: (val: string) => boolean
}

interface setValueOptions {
    shouldValidate?: boolean
    shouldDirty?: boolean
    shouldTouch?: boolean
}

interface InputProps {
    placeholder?: string
    name?: string
    register: any
    fieldName: string
    isRequired?: boolean
    isDropdown?: boolean
    type?: "textarea" | "file" | "password" | "text"
    maxLength?: number
    validate?: IValidate
    setValue?: (s: any, value: any, {}: setValueOptions) => void
    error?: FieldError
    options?: News[] | Partner[]
}

enum servicesTypes {
    BUSINESS_CONSULTING = 'Бизнес консалтинг',
    EXPERTS_EDUCATION = 'Обучение экспертов'
}


export const Input: React.FC<InputProps> = (props) => {
    const { name, placeholder, register, isRequired, maxLength, fieldName, error, validate, setValue, isDropdown, options, type = "text" } = props
    const [isShown, setShown] = useState(false)
    const [selected, setSelected] = useState<servicesTypes | number>()
    const [selectedText, setSelectedText] = useState<string>()

    const handleChangeDropdown = (e: FormEvent<HTMLSpanElement>, id?: number, textToShow?: string) => {
        e.stopPropagation()

        const target = e.target as HTMLSpanElement

        const text = target.innerHTML as servicesTypes

        console.log(id, textToShow)

        if (id && textToShow) {
            setSelected(id)
            setSelectedText(textToShow)
            setValueToTheForm(id)
        }
        else {
            setSelected(text)
            setSelectedText(text)
            setValueToTheForm(text)
        }

        setShown(false)
    }

    const setShownDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()

        setShown(true)
    }

    useEffect(() => {
        const click = (e: MouseEvent) => {
            setShown(false)
        }

        if (isShown) {
            document.body.addEventListener('click', click)
        }

        return () => {
            document.body.removeEventListener('click', click);
        }
    }, [isShown])

    const setValueToTheForm = (value: string | number) => {
        if (setValue) {
            setValue(fieldName, value, {shouldTouch: true})
        }

    }

    return (
        <>
            {!isDropdown &&
                <div className="input">
                    {error && <p className="error">
                        <span>{error.type == 'required' && `Поле должно быть заполнено`}</span>
                        <span>{error.type == 'email' && "Email должен быть действующий"}</span>
                        <span>{error.type == 'isLessThan' && "Число должно быть меньше либо равно 5"}</span>
                        <span>{error.type == 'isMoreThan' && "Число должно быть больше 0"}</span>
                    </p>}
                    <span>{name}</span>
                    {type == 'textarea' ?
                        <textarea 
                            {...props} 
                            {...register(fieldName, {required: isRequired, maxLength, validate})} 
                            type={type} 
                            placeholder={placeholder} 
                        />:
                        <input 
                            {...props} 
                            {...register(fieldName, {required: isRequired, maxLength, validate})} 
                            type={type} 
                            placeholder={placeholder} 
                        />
                    }
                </div>
            }

            {isDropdown && 
                <div className="input" onClick={setShownDropdown}>
                    {error && <p className="error">
                        <span>{error.type == 'required' && `Поле должно быть заполнено`}</span>
                        <span>{error.type == 'validate' && "Email должен быть действующий"}</span>
                    </p>}
                    <span>{name}</span>
                    <input 
                        {...props} 
                        {...register(
                            fieldName, {required: isRequired, maxLength, validate, onchange: () => setValueToTheForm(selected || 0)}
                        )} 
                        placeholder={placeholder} 
                        autoComplete={'off'}
                        value={options ? selectedText :selected}
                        style={{cursor: 'pointer'}}
                    />
                    <div className="input__dropdown" style={isShown ? {display: 'flex'}: {display: 'none'}}>
                        {options ?
                            options.map((op: any) => 
                                <span onClick={(e) => handleChangeDropdown(e, op.id, op.title || op.name)} style={{cursor: 'pointer'}} key={op.id}>
                                    {'title' in op && op.title}
                                    {'name' in op && op.name}
                                </span>
                            )
                            :
                            <>
                                <span onClick={handleChangeDropdown} style={{cursor: 'pointer'}}>{servicesTypes.BUSINESS_CONSULTING}</span>
                                <span onClick={handleChangeDropdown} style={{cursor: 'pointer'}}>{servicesTypes.EXPERTS_EDUCATION}</span>
                            </>
                        }
                    </div>
                </div>
            }

        </>
        
    )
} 