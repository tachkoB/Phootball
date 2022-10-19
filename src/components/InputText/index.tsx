import { FC, ChangeEvent } from 'react'

// Styles
import { Input } from './styled'

interface Props {
    className?: string;
    onHandleChange: (text: string) => void
    value: string
}
const InputText: FC<Props> = ({ className, onHandleChange, value }) => {
    /**
     * Handles input state
     * 
     * @param e Input value
     */
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onHandleChange(e.target.value)
    }

    return (
        <Input value={value} onChange={handleChange} className={className} type='text' />
    )
}

export default InputText