
export async function getEverything(data) {
    return await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=3093c855cf23449c8f90d8c24c5a2d1c');
}