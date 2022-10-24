import { FC, ChangeEvent } from 'react'

// Styles
import { Input } from './styled'

interface Props {
    className?: string;
    onHandleChange: (text: string) => void
    value?: string
    placeholder?: string
}

/**
 * 
 * 
 * @param className         Class name
 * @param onHandleChange    Input handler
 * @param value             Input value
 * @param placeholder       Input placeholder
 */
const InputText: FC<Props> = ({ className, onHandleChange, value, placeholder }) => {
    /**
     * Handles input state
     * 
     * @param e Input value
     */
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onHandleChange(e.target.value)
    }

    return (
        <Input value={value} onChange={handleChange} className={className} placeholder={placeholder} type='text' />
    )
}

export default InputText