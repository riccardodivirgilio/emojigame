
import {dumps} from './base64'
import {remove_emojis, normalize_solution} from './text'

export function answer_url(solution, answer) {
    return '/' + remove_emojis(answer || '🤷').replace(' ', '+') + '/' + dumps(normalize_solution(solution || ''))
}

export default {answer_url}