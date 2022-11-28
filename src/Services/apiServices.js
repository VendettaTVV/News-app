const apiUrl = 'https://newsapi.org'

// async func work with promises
// Promise is object, which will change in future
// promise has 2 states: 1.Pending - initial state 2. Fullfilled - if it went well 3. Rejected - if an error occurs
// Promise we need, so that the application can continue to work without waiting for a response
// Key word - await used only in async func
// async runs independently of the rest of the code
// await transforms an object Promise in response to a request
export async function getEverything(data) {
    const params = new URLSearchParams({
        ...data,
        apiKey: process.env.REACT_APP_API_KEY,

    });
    return await fetch(`${apiUrl}/v2/everything?${params}`);
}