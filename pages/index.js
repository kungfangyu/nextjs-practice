/*
 * @Date: 2021-10-18 13:42:57
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-10-22 14:01:03
 * @FilePath: /next-js-practice/pages/index.js
 */
import Head from 'next/head';
import React, { Fragment } from 'react';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';


// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'A First Meetup',
//     image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
//     address: '屏東市永大路100號',
//     description:"一些描述"
//   },
//   {
//     id: 'm2',
//     title: 'A Second Meetup',
//     image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
//     address: '屏東市永大路102號',
//     description:"一些描述"
//   },
// ]

function HomePage (props) {
    // const [loadedMeetups, setLoadedMeetups] = useState([]);

    // useEffect(() => {
    //   //send http request and fetch data
    //   setLoadedMeetups(DUMMY_MEETUPS)
    // }, [])
    return (
      <Fragment>
        <Head>
          <title>Next-Js Practice</title>
          <meta name="description" content="Next-js練習"></meta>
        </Head>
        <MeetupList meetups={props.meetups} />
      </Fragment>
    );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     }
//   }
// }

export async function getStaticProps() {
  //fetch data from API
  const client = await MongoClient.connect('mongodb+srv://Fane:ATFDyq3JQ0bkTuiN@cluster0.9rbz6.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db();

  const meetupsCollection = db.collection('meetups'); 

  const meetups = await meetupsCollection.find().toArray(); //找到該data並轉成陣列

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 1
  }
}

export default HomePage;