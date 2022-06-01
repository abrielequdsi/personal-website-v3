import { Client } from '@notionhq/client'
import { createContactFormPage } from '@lib/notion'

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` })
  }
  try {
    const { name, email, subject, message } = JSON.parse(req.body)
    await createContactFormPage(name, email, subject, message)
    res.status(201).json({ msg: 'Success' })
  } catch (error) {
    res.status(500).json({ msg: 'There was an error' })
  }
}
