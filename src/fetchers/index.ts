export const fetchAllPlayers = async () => {
    const response = await fetch('http://localhost:3000');
    const data = await response.json()
    return data
}