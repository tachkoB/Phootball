import { FC } from "react"

// Styles
import { Button } from './styled'

interface Props {
    onClick: () => void
    text: string
    className?: string
}


const PrimaryButton: FC<Props> = ({ onClick, text, className }) => {
    return (
        <Button className={className} onClick={onClick}>{text}</Button>
    )
}


export default PrimaryButton