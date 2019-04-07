
export function remove_text(text) {
    return text.replace(/^[\u0020-\u007e\u00a0-\u00ff]*$/g, "")
}

export function remove_emoji(text) {
    return text.replace(/[^\x00-\x7F]/g, "")
}

export function normalize_solution(text) {
    return text.toLowerCase().replace(/\s\s+/g, ' ').trim();
}

export default {remove_text, remove_emoji, normalize_solution}