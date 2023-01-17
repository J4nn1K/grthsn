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
        <div className='p-[33px] bg-white dark:bg-black'>
          <h1 className='text-base mb-[22px] text-[#262626] dark:text-[#e6e6e6]'>Jannik Grothusen</h1>
          <p className='text-base mb-[22px] text-[#262626] dark:text-[#e6e6e6]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue sapien, rutrum vitae lectus ut, aliquet tincidunt sem. Curabitur rutrum mi viverra, pulvinar ipsum id, aliquam dui. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          <p className='text-base mb-[22px] text-[#262626] dark:text-[#e6e6e6]'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed cursus id purus in pretium. Duis porttitor eros pharetra sagittis mollis. Vivamus ut aliquet eros, ultricies interdum lectus. In mi nunc, vulputate et varius id, imperdiet nec nisl. </p>
          <p className='text-base mb-[22px] text-[#262626] dark:text-[#e6e6e6]'></p>
        </div>
      </main>
    </>
  )
}
