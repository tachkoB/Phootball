import { FC, PropsWithChildren } from "react"

// Components
import Header from "components/Header"

// Styles
import { Main } from './styled'

/**
 * Layout for the app
 * 
 * @param children  Children to render 
 */
const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <Main>{children}</Main>
        </>
    )
}

export default Layout