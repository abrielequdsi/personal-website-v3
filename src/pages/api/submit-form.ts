import type { NextApiRequest, NextApiResponse } from 'next'
import { createContactFormPage } from '@lib/notion'

type Data = {
  msg: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ msg: `${req.method} requests are not allowed` })
  }
  try {
    const { name, email, subject, message } = JSON.parse(req.body)
    await createContactFormPage(name, email, subject, message)
    res.status(201).json({ msg: 'Success' })
  } catch (error) {
    res.status(500).json({ msg: 'There was an error' })
  }
}
