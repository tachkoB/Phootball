import { FC, PropsWithChildren } from "react"

// Components
import Header from "components/Header"

// Styles
import { Main } from './styled'

const Layout: FC<PropsWithChildren> = ({ children }) => {

    return (
        <>
            <Header />
            <Main>{children}</Main>
        </>
    )
}

export default Layout