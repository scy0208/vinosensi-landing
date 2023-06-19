import { marshall } from "@aws-sdk/util-dynamodb";
import {
  DynamoDBClient,
  PutItemCommand,
} from '@aws-sdk/client-dynamodb';
import type { NextApiRequest, NextApiResponse } from 'next'


const client = new DynamoDBClient({});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { email, firstname, lastname, company, phonenumber, tier, message } = req.body;
    const currentTime = new Date();
    const Item = {
        email,
        firstname,
        lastname,
        company,
        phonenumber,
        tier,
        message,
        time: currentTime.toISOString(),
    };
    console.log(Item)
    try {
      await client.send(
        new PutItemCommand({
          TableName: process.env.TABLE_NAME,
          Item: marshall(Item),
        })
      );
  
      return res.status(200).json({ status: 'success' });
    } catch (error) {
      console.error('Error occurred while writing to DynamoDB:', error);
      return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
}
