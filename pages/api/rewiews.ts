import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongodb'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let { db } = await connectToDatabase()

    const rewiews = await db.collection('rewiews').find().toArray()

    res.status(200).json({ rewiews })

}