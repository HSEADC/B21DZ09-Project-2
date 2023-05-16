import Airtable from 'airtable'

const token =
  'patxuX3YN4Y11JKPS.24dc46d12163bb1f2d34d97cd4cf5a4e81b71fb4191416f3b1b06f9fef3d1d96'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
const base = Airtable.base('apphiZTHlgZHxwtMA')

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('Post_Teasers')
      .select({ maxRecords: 70 })
      .firstPage()
      .then((result) => {
        console.log(result)

        result.forEach((record) => {
          content.push({
            id: record.id,
            tags: record.fields['Tags'],
            image: record.fields['Picture'],
            title: record.fields['Title'],
            description: record.fields['Description'],
            link: record.fields['Link']
          })
        })

        resolve(content)
      })
  })
}

export { getPostTeasers }
