import { Client } from '@notionhq/client'

const client = new Client({
  auth: process.env.NOTION_API_KEY,
})

async function experiences() {
  const myExperiences = await client.databases.query({
    database_id: `${process.env.NOTION_DATABASE_ID_EXPERIENCES}`,
    sorts: [
      {
        property: 'Order',
        direction: 'ascending',
      },
    ],
  })
  return myExperiences
}

export { experiences }
