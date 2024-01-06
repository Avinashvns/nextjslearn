export default async function getApi(url) {
    const result = await fetch(url)
    return result.json();
}