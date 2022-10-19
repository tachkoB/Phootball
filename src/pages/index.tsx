import {
    Routes,
    Route,
} from "react-router-dom";

// Pages
import HomePage from './home'
import TeamBuilder from './teamBuilder'

// Components
import Layout from "components/Layout"

// Styles
import { GlobalStyle } from './styled'


/**
 *  Renders the app routing. 
 */
const App = () => {
    return (
        <>
            <GlobalStyle />
            <Layout >
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="team-builder" element={<TeamBuilder />} />
                </Routes>
            </Layout>
        </>
    )
}

export default App