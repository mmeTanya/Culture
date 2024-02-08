import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongodb'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let { db } = await connectToDatabase()


    const body = JSON.parse(req.body)
    const rewiews = db.collection('rewiews').insertOne({
        name: body.name,
        comments: body.comments,
        date: body.date
    });

    res.status(200).json({ rewiews })
}
