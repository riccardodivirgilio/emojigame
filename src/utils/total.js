
import to_array from 'rfuncs/functions/to_array'

export const total = (array) => to_array(array).reduce((a, b) => a+b, 0)
export default total