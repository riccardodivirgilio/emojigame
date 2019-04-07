
// we want to use a cypher to prevent smart people from HN to find solutions using base64.
// they need to be smarter and find out about this simple cypher and then run base64

import json   from './json'
import base64 from './base64'
import cypher from './cypher'

import composition from 'rfuncs/functions/composition'

export const dumps = composition(
    //json.dumps,
    base64.dumps,
    str => str.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, ''),
    cypher.dumps,
)
export const loads = composition(
    cypher.loads,
    str => {
        if (str.length % 4 != 0)
          str += ('===').slice(0, 4 - (str.length % 4));
        return str.replace(/-/g, '+').replace(/_/g, '/');
    },
    base64.loads,
    //json.loads,
)

export default {loads, dumps}