export default async function getApi(url) {
    let result = await fetch(url)
    result = await result.json()
    return result;
}