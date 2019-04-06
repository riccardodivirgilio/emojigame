
import {dumps} from './base64'

export function answer_url(solution, answer) {
    return '/' + (answer || ' ').replace(' ', '+') + '/' + dumps(solution || '')
}

export default {answer_url}