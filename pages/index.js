import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
const ReactRotatingText = require('react-rotating-text')

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thanks for choosing SWAT!</title>
        <meta name="theme-color" content="#2F3136" />
        <link rel="preconnect" href="https://docs.swat.norden.wtf" />
        <link rel="preconnect" href="https://www.patreon.com" />
        <link rel="preconnect" href="https://discord.com" />
        <link rel="preconnect" href="https://top.gg" />
        <link rel="dns-prefetch" href="https://docs.swat.norden.wtf" />
        <link rel="dns-prefetch" href="https://www.patreon.com" />
        <link rel="dns-prefetch" href="https://discord.com" />
        <link rel="dns-prefetch" href="https://top.gg" />
        <meta property="og:title" content="Thanks for choosing SWAT!" />
        <meta
          property="og:description"
          content="Thanks for trying SWAT out, we won't disappoint you. We're still in beta, so please report any bugs you find!"
        />
        <meta property="og:url" content="https://thanks.norden.wtf" />
        <meta
          name="description"
          content="Thanks for trying SWAT out, we won't disappoint you. We're still in beta, so please report any bugs you find!"
        ></meta>
        <meta property="og:url" content="https://thanks.norden.wtf"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Thanks for choosing SWAT!"></meta>
        <meta
          property="og:description"
          content="Thanks for trying SWAT out, we won't disappoint you. We're still in beta, so please report any bugs you find!"
        ></meta>
        <meta
          name="twitter:title"
          content="Thanks for choosing SWAT!"
        ></meta>
        <meta
          name="twitter:description"
          content="Thanks for trying SWAT out, we won't disappoint you. We're still in beta, so please report any bugs you find!"
        ></meta>
      </Head>
      <main id="info" className={styles.main}>
        <h1 className={styles.title}>
          Thanks for choosing SWAT!
        </h1>

        <div className={styles.grid}>
          <a href="https://patreon.com/TeamNorden" className={styles.card}>
            <h3>Support us on Patreon &rarr;</h3>
            <p>Pay a small monthly fee to help fund the sustainable development of SWAT, and get cool perks too! ❤️</p>
          </a>

          <a href="https://docs.swat.norden.wtf" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>So how do I use SWAT?</p>
          </a>

          <a href="https://discord.com/api/oauth2/authorize?client_id=914290270508572692&permissions=8&scope=bot%20applications.commands" className={styles.card}>
            <h3>Invite us to your other servers &rarr;</h3>
            <p>
              Damn! You really want to support us huh?! Click here to get the invite link for SWAT.
            </p>
          </a>

          <a href="https://top.gg/bot/914290270508572692/vote?ref=thanks" className={styles.card}>
            <h3>Vote for us &rarr;</h3>
            <p>Vote for SWAT on Top.gg and bag yourself some cool perks! 😎</p>
          </a>
        </div>
      </main>
    </div>
  )
}
