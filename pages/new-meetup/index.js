/*
 * @Date: 2021-10-18 13:46:30
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-10-22 14:15:52
 * @FilePath: /next-js-practice/pages/new-meetup/index.js
 */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler (enteredMeetupData) {
    // console.log(enteredMeetupData)
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data)
    
    router.push('/') //添加資訊後跳轉至首頁
  }
  return (
    <Fragment>
      <Head>
        <title>Add New Meetup Page</title>
        <meta name="description" content="Next-js 練習 新增項目"></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;