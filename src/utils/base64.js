
import { Base64 } from 'js-base64';

export function dumps(data) {
    return Base64.encode(data)
}
export function loads(data) {
    return Base64.decode(data)
}

export default {loads, dumps}