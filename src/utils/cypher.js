
import map from 'rfuncs/functions/map'

const mapping_from = {'0': 'S', '1': '2', '2': 'u', '3': 'w', '4': 'P', '5': '7', '6': 'E', '7': 't', '8': 'K', '9': 'T', 'A': '-', 'B': 'n', 'C': 'm', 'D': 'z', 'E': 'v', 'F': '6', 'G': 'q', 'H': 'C', 'I': 'L', 'J': 'Q', 'K': 'j', 'L': 's', 'M': 'a', 'N': 'h', 'O': '3', 'P': 'V', 'Q': '1', 'R': 'f', 'S': 'N', 'T': 'J', 'U': 'r', 'V': '4', 'W': 'B', 'X': 'Y', 'Y': 'U', 'Z': '5', 'a': 'e', 'b': 'd', 'c': '0', 'd': 'y', 'e': '_', 'f': 'G', 'g': '8', 'h': 'c', 'i': 'R', 'j': 'A', 'k': 'I', 'l': 'X', 'm': 'W', 'n': 'o', 'o': 'l', 'p': '9', 'q': 'b', 'r': 'x', 's': 'H', 't': 'k', 'u': 'F', 'v': 'i', 'w': 'M', 'x': 'p', 'y': 'O', 'z': 'g', '-': 'D', '_': 'Z'}

const mapping_to = {'S': '0', '2': '1', 'u': '2', 'w': '3', 'P': '4', '7': '5', 'E': '6', 't': '7', 'K': '8', 'T': '9', '-': 'A', 'n': 'B', 'm': 'C', 'z': 'D', 'v': 'E', '6': 'F', 'q': 'G', 'C': 'H', 'L': 'I', 'Q': 'J', 'j': 'K', 's': 'L', 'a': 'M', 'h': 'N', '3': 'O', 'V': 'P', '1': 'Q', 'f': 'R', 'N': 'S', 'J': 'T', 'r': 'U', '4': 'V', 'B': 'W', 'Y': 'X', 'U': 'Y', '5': 'Z', 'e': 'a', 'd': 'b', '0': 'c', 'y': 'd', '_': 'e', 'G': 'f', '8': 'g', 'c': 'h', 'R': 'i', 'A': 'j', 'I': 'k', 'X': 'l', 'W': 'm', 'o': 'n', 'l': 'o', '9': 'p', 'b': 'q', 'x': 'r', 'H': 's', 'k': 't', 'F': 'u', 'i': 'v', 'M': 'w', 'p': 'x', 'O': 'y', 'g': 'z', 'D': '-', 'Z': '_'}

export const dumps = (data) => map(c => mapping_to[c],   data.split('')).join('')
export const loads = (data) => map(c => mapping_from[c], data.split('')).join('')

export default {loads, dumps}