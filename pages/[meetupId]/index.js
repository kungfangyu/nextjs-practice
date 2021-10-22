/*
 * @Date: 2021-10-18 13:46:41
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-10-22 14:38:55
 * @FilePath: /next-js-practice/pages/[meetupId]/index.js
 */
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupsData.title}</title>
        <meta name="description" content={props.meetupsData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupsData.image}
        title={props.meetupsData.title}
        address={props.meetupsData.address}
        description={props.meetupsData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {

  const client = await MongoClient.connect('mongodb+srv://Fane:ATFDyq3JQ0bkTuiN@cluster0.9rbz6.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db();

  const meetupsCollection = db.collection('meetups'); 

  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray(); 
  //find => 這裡的第一個空物件代表要找的數據沒有過濾條件，就是全部的對象都要,第二個參數代表哪些數需要被提取出來
  //id設置為1代表只包含id沒有其他字段值

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({ params: {meetupId: meetup._id.toString()} }))
    
    // [
    //   {
    //     params: {
    //       meetupId: 'm1'
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: 'm1'
    //     },
    //   }
    // ]
  }
}

export async function getStaticProps(context) {
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect('mongodb+srv://Fane:ATFDyq3JQ0bkTuiN@cluster0.9rbz6.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db();

  const meetupsCollection = db.collection('meetups'); 

  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) }); //ObjectId將id轉為字串

  client.close();

  console.log(selectedMeetup)
  return {
    props: {
      meetupsData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description
      }
    },
    revalidate: 10
  }
}

export default MeetupDetails;