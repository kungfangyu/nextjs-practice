/*
 * @Date: 2021-10-21 15:25:47
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-10-21 17:32:28
 * @FilePath: /next-js-practice/pages/api/new-meetup.js
 */


import { MongoClient } from 'mongodb';
// /api/new-meetup
// /POST /api/new-meetup

async function handler( req, res ) {
  if(req.method === 'POST') {
    const data = req.body;

    // const { title, image, address, description } = data;

    const client = await MongoClient.connect('mongodb+srv://Fane:ATFDyq3JQ0bkTuiN@cluster0.9rbz6.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('meetups'); //也可以跟資料庫名稱一樣（nextPracticeMeetups）

    const result = await meetupsCollection.insertOne(data) // mongodb的內置查詢命令之一用於在集合中插入一個新的文檔（數據）

    console.log(result);

    client.close() //關閉數據連接

    res.status(201).json({message: 'Meetup inserted!'})
  }
}


export default handler;