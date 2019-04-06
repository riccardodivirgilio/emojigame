
import {dumps} from './base64'

export function answer_url(solution, answer) {
    if (answer && solution) {
        return '/' + answer + '/' + dumps(solution)
    }
    return '/'
}

export default {answer_url}