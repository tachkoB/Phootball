import { useEffect, useContext } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

// Pages
import HomePage from './home'
import TeamBuilder from './teamBuilder'

// Components
import Layout from "components/Layout"

// Context
import { PlayerContext } from "contexts/players";

// Styles
import { GlobalStyle } from './styled'

// Fetchers
import { fetchAllPlayers } from "fetchers/index";
/**
 *  Renders the app routing. 
 */
const App = () => {
    const { setPlayers } = useContext(PlayerContext)

    useEffect(() => {
        fetchAllPlayers().then(data => setPlayers(data))
    }, [])

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