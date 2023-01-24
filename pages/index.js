import Head from 'next/head'
import Link from 'components/Link'
import DescriptionLink from 'components/DescriptionLink'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jannik Grothusen</title>
        {/* <meta name="description" content=""/> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <div className='p-[33px] min-h-screen bg-white dark:bg-black'>
          <div className='grid grid-cols-1 gap-x-[33px] xl:grid-cols-4 sm:grid-cols-2'>
            <div>
              <h1 className='text'>Jannik Grothusen</h1>
              <p className='text'>I am a graduate student currently enrolled at the University of California, Berkeley. My academic interests lie in robotics, artificial intelligence, and control theory.</p>
              <p className='text'>I enjoy building things. From control architectures for underwater robots to brand identities - I’ve done it. </p>
              <Link name="LinkedIn" href="https://www.linkedin.com/in/jannikjorgegrothusen/"/>
              <Link name="GitHub" href="https://github.com/J4nn1K"/>
              
              <p className='text mt-[22px] scale-100 sm:scale-0'>—</p>
            </div>
            <div>
              <h2 className='text'>Work Experience</h2>
              <p className='text'>Mar 22 - Jul 22 <br /> GoodBytz GmbH <br /> Software Engineering Intern</p>
              <p className='text'>Dec 21 - Feb 22 <br /> Deutsches Elektronen-Synchrotron <br /> ML & Control Intern </p>

              <p className='text'>—</p>

              <h2 className='text'>Education</h2>
              <p className='text'>Aug 22 - May 23 <br /> University of California, Berkeley <br /> Concurrent Enrollment </p>
              <p className='text'>Apr 22 - Now <br /> Hamburg University of Technology <br /> M.Sc. Mechatronics </p>
              <p className='text'>Oct 18 - Mar 22 <br /> Hamburg University of Technology <br /> B.Sc. General Engineering Science </p>
              <p className='text scale-100 sm:scale-0'>—</p>
            </div>
            <div>
              <h2 className='text'>Projects</h2>
              <DescriptionLink name="Underwater Robotics" desc="Control, software engineering" href="/documents/thesis.pdf"/>
              <DescriptionLink name="Automonous Accelerator" desc="Control, ML, software engineering" href="/documents/desy.pdf"/>
              <DescriptionLink name="Model Predictive Control" desc="Control, software engineering" href="/documents/mpc.pdf"/>
              <DescriptionLink name="OpenAI Demo Application" desc="Software engineering, web design" href="https://openai.grthsn.de"/>
              <DescriptionLink name="Portfolio Website" desc="Software engineering, web design" href="http://portfolio.grthsn.de"/>
              <DescriptionLink name="Ideenschmiede Hamburg" desc="Brand & web design" href="https://www.ideenschmiede-hamburg.de/en"/>

              <p className='text'>—</p>

              <h2 className='text'>Activities</h2>
              <DescriptionLink name="d.school: University Innovation Fellow" desc="Entrepeneurship, innovation" href="https://dschool.stanford.edu/university-innovation/university-innovation-fellows"/>
              <DescriptionLink name="Startup Port: INTIE" desc="Entrepeneurship, innovation" href="https://intie.de/"/>
              <p className='text scale-100 sm:scale-0'>—</p>
            </div>
            <div>
              <h2 className='text'>Documents</h2>
              <Link name="Resume" href="/documents/resume.pdf"/>
              <Link name="Bachelor's Thesis" href="/documents/thesis.pdf"/>
              {/* <Link name="Bachelor's Degree" href="/documents/degree.pdf"/> */}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}


