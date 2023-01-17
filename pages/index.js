import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jannik Grothusen</title>
        {/* <meta name="description" content=""/> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <div className='p-[33px] h-screen bg-white dark:bg-black'>
          <div className='grid grid-cols-1 gap-[33px] xl:grid-cols-4 sm:grid-cols-2'>
            <div>
              <h1 className='text'>Jannik Grothusen</h1>
              <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue sapien, rutrum vitae lectus ut, aliquet tincidunt sem. Curabitur rutrum mi viverra, pulvinar ipsum id, aliquam dui. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <p className='text'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed cursus id purus in pretium. Duis porttitor eros pharetra sagittis mollis. Vivamus ut aliquet eros, ultricies interdum lectus. In mi nunc, vulputate et varius id, imperdiet nec nisl. </p>
              <p className='text'></p>
            </div>
            <div>
              <h2 className='text'>Work Experience</h2>
              <p className='text'>Mar 22 - Jul 22 <br /> GoodBytz GmbH <br /> Software Engineering Intern</p>
              <p className='text'>Dec 21 - Feb 22 <br /> Deutsches Elektronen-Synchrotron <br /> ML & Control Intern </p>

              <p className='text'>—</p>

              <h2 className='text'>Education</h2>
              <p className='text'>Aug 22 - May 23 <br /> University of California, Berkeley <br /> Concurrent Enrollment </p>
              <p className='text'>Apr 22 - Now <br /> Hamburg University of Technology <br /> M.Sc. Mechatronics </p>
              <p className='text'>Oct 18 - Feb 22 <br /> Hamburg University of Technology <br /> B.Sc. General Engineering Science </p>
            </div>
            <div>
              <h2 className='text'>Projects</h2>
              <p className='text'>
                <a href="#" class="flex justify-left items-center group ">
                  <p className='group-hover:text-[#9e9e9e] transition'>OpenAI Demo Application</p>
                  <p className='group-hover:rotate-[-45deg] text-[#9e9e9e] group-hover:text-[#262626] pl-1 transition'> → </p>
                </a> 
                Software engineering, web design
              </p>

              <p className='text'>Underwater Robotics<br /> Control, software engineering </p>

              <p className='text'>—</p>

              <h2 className='text'>Activities</h2>
              <p className='text'>d.school: University Innovation Fellow <br /> Entrepeneurship, innovation </p>
              <p className='text'>Startup Port: INTIE <br /> Entrepeneurship, innovation </p>

            </div>
            <div>
              {/* <h2 className='text'>Jannik Grothusen</h2> */}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
