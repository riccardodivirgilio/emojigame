
import json   from './json'
import base64 from './base64'

import composition from 'rfuncs/functions/composition'

export const dumps = composition(
    json.dumps,
    base64.dumps,
    str => str.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '')
)
export const loads = composition(
    str => {
        if (str.length % 4 != 0)
          str += ('===').slice(0, 4 - (str.length % 4));
        return str.replace(/-/g, '+').replace(/_/g, '/');
    },
    base64.loads,
    json.loads
)

export default {loads, dumps}