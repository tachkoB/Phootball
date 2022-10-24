const isDevelopment = process.env.NODE_ENV === 'development'
const URL = isDevelopment ? 'http://localhost:3000' : 'https://phiture-be.onrender.com'

/**
 * Fetcher to fetch all players
 */
export const fetchAllPlayers = async () => {
    const response = await fetch(URL);
    const data = await response.json()
    return data
}