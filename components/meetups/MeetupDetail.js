/*
 * @Date: 2021-10-18 19:52:57
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-10-18 20:02:05
 * @FilePath: /next-js-practice/components/meetups/MeetupDetail.js
 */

import classes from './MeetupDetail.module.css'

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img 
        src={props.image} 
        alt={props.title}
        />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;