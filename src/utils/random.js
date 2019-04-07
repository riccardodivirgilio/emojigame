
import to_array from 'rfuncs/functions/to_array'
import length   from 'rfuncs/functions/length'

function real(min = 0, max = 1) {
    return Math.random() * (max - min) + min;
}

function integer(min = 0, max = 1) {
    return Math.round(real(min, max))
}

function choice(array) {
    const a = to_array(array)
    return a[integer(1, length(a)) - 1]
}

export default {integer, choice}