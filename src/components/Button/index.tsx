import { FC } from "react"

// Styles
import { Button } from './styled'

interface Props {
    onClick?: () => void
    text: string
    className?: string
    type?: "button" | "submit" | "reset"
}


const PrimaryButton: FC<Props> = ({ onClick, text, className, type }) => {
    return (
        <Button className={className} onClick={onClick} type={type}>{text}</Button>
    )
}


export default PrimaryButton