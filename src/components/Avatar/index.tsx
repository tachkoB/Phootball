import { FC, useState } from 'react'

// Styles
import { Image } from './styled'

// Images
import fallback from 'images/empty_avatar.png'

interface Props {
    photo: string
    className?: string
}

/**
 * Renders the image provided, with a fallback image in case the link is broken
 */
const Avatar: FC<Props> = ({ photo, className }) => {
    const [img, setImg] = useState(photo)

    const handleError = () => {
        setImg(fallback)
    }
    return (
        <Image className={className} src={img} onError={handleError} alt={'Player'} />
    )
}


export default Avatar