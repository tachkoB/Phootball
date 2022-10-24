import { FC, ChangeEvent } from 'react'

// Styles
import { Input } from './styled'

interface Props {
    className?: string;
    onHandleChange: (text: string) => void
    value?: string
    placeholder?: string
    disabled?: boolean
}

/**
 * 
 * 
 * @param className         Class name
 * @param onHandleChange    Input handler
 * @param value             Input value
 * @param placeholder       Input placeholder
 * @param disabled          Input state
 */
const InputText: FC<Props> = ({ className, onHandleChange, value, placeholder, disabled }) => {
    /**
     * Handles input state
     * 
     * @param e Input value
     */
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onHandleChange(e.target.value)
    }

    return (
        <Input disabled={disabled} value={value} onChange={handleChange} className={className} placeholder={placeholder} type='text' />
    )
}

export default InputText