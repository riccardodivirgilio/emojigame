
import {dumps} from './encode'
import {remove_text, normalize_solution} from './text'

export const answer_url = (solution, answer) => {
    return '/' + (remove_text(answer) || '🤷') + '/' + dumps(normalize_solution(solution || ''))
}

export default {answer_url}