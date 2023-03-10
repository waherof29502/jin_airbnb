import Head from 'next/head';
import Image from 'next/image';
import {
  Header,
  Banner,
  SmallCards,
  MediumCards,
  LargeCards,
  Footer,
} from '../components/index';

// import { exploreData } from '../constants/index';

const Home = ({ exploreData, cardsData }) => {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {exploreData?.map((data) => (
              <SmallCards
                key={data.img}
                img={data.img}
                distance={data.distance}
                location={data.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className=' -mx-3 px-3 flex space-x-3 overflow-scroll scrollbar-hide'>
            {cardsData?.map((data) => (
              <MediumCards key={data.img} img={data.img} title={data.title} />
            ))}
          </div>
        </section>
        <LargeCards
          img='https://links.papareact.com/4cj'
          title='THe Greatest Outdoors'
          description='Whishlists created by Airbnb.'
          buttonText='Get Inspired'
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json()
  );
  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
