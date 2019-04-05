
export function dumps(data) {
    return JSON.stringify(data)
}
export function loads(data) {
    return JSON.parse(data)
}

export default {loads, dumps}