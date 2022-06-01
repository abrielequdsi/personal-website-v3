import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

async function experiences() {
  const myExperiences = await notion.databases.query({
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

async function projects() {
  const myProjects = await notion.databases.query({
    database_id: `${process.env.NOTION_DATABASE_ID_PROJECTS}`,
  })
  return myProjects
}

async function createContactFormPage(name, email, subject, message) {
  const createRes = await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_ID_CONTACT_FORM,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
      Email: {
        email: email,
      },
      Subject: {
        rich_text: [
          {
            text: {
              content: subject,
            },
          },
        ],
      },
      Message: {
        rich_text: [
          {
            text: {
              content: message,
            },
          },
        ],
      },
    },
  })
  return createRes
}

export { experiences, projects, createContactFormPage }
