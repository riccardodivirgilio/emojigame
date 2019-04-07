
export function remove_emojis(text) {
    return text.replace(/^[\u0020-\u007e\u00a0-\u00ff]*$/g, "")
}

export function normalize_solution(text) {
    return text.toLowerCase().replace(/\s\s+/g, ' ').trim();
}

export default {remove_emojis, normalize_solution}