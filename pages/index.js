import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jannik Grothusen</title>
        {/* <meta name="description" content=""/> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <p className="font-sans bold">
            Get started by editing
          </p>
        </div>
      </main>
    </>
  )
}
