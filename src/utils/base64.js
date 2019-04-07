
import { Base64 } from 'js-base64';

export const dumps = (data) => Base64.encode(data)
export const loads = (data) => Base64.decode(data)

export default {loads, dumps}