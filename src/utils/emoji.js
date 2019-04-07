
import emojis  from 'emoji-name-map'
import lunr    from 'lunr'
import scan    from 'rfuncs/functions/scan'
import object_map     from 'rfuncs/functions/object_map'
import group_by     from 'rfuncs/functions/group_by'
import first     from 'rfuncs/functions/first'

const idx = lunr(function () {
  this.ref('id')
  this.field('name')
  scan(
    (emoji, name) => this.add({
        'id':   name,
        'name': name.replace('_', ' ')
    }),
    emojis.emoji
  )
})

function search(query) {
    if (! query) {
        return {}
    }
    return object_map(
        data => emojis.emoji[data.ref],
        data => ({
            score: data.score,
            emoji: emojis.emoji[data.ref],
            name:  data.ref
        }),
        idx.search(query)
    )
}

export default {
    'search': search,
    'emoji':  emojis.emoji
}