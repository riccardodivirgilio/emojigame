
export const remove_text  = (text) => text.replace(/^[\u0020-\u007e\u00a0-\u00ff]*$/g, "")
export const remove_emoji = (text) => text.replace(/[^\x00-\x7F]/g, "")

export const normalize_solution = (text) => text.toLowerCase().replace(/\s\s+/g, ' ').trim()

export default {remove_text, remove_emoji, normalize_solution}