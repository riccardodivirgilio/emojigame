
import {dumps} from './base64'
import {remove_text, normalize_solution} from './text'

export function answer_url(solution, answer) {
    return '/' + (remove_text(answer) || '🤷') + '/' + dumps(normalize_solution(solution || ''))
}

export default {answer_url}