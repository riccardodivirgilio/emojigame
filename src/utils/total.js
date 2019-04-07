
import to_array from 'rfuncs/functions/to_array'

export default function total(array) {
    return to_array(array).reduce((a, b) => a+b, 0)
}