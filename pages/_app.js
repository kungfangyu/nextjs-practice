/*
 * @Date: 2021-03-24 22:47:19
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-10-18 19:17:45
 * @FilePath: /next-js-practice/pages/_app.js
 */
import Layout from '../components/layout/Layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
