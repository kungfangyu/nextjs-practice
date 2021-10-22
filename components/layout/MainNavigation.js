/*
 * @Date: 2021-03-24 22:47:19
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-10-18 19:01:16
 * @FilePath: /next-js-practice/components/layout/MainNavigation.js
 */
import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
