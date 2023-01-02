import Head from 'next/head';

import MicrosoftClarity from '../libs/MicrosoftClarity/index.jsx';

import Navigation from '../ui/Navigation/index.jsx';
import HomeHero from '../ui/HomeHero/index.jsx';
import HowItWorks from '../ui/HowItWorks/index';
import Reviews from '../ui/Reviews/index.jsx';
import SiteMap from '../ui/SiteMap/index.jsx';
import MealPlansSubscriptions from '../ui/MealPlansSubscription/index.jsx';
import ExploreMeals from '../ui/ExploreMeals/index.jsx';
import LearnMoreSection from '../ui/LearnMoreSection/index.jsx';
import GetStartedSection from '../ui/GetStartedSection/index.jsx';

export default function Home() {
  return (
    <div className='overflow-x-clip'>
      <Head key={"HomePage"}>
        <title>Meal Prep Ordering Service</title>
        <meta name="description" content="Generated by create next app" />
        <MicrosoftClarity />
      </Head>
      <Navigation />
      <HomeHero 
          image='https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' 
      />
      <HowItWorks />
      <ExploreMeals />
      <MealPlansSubscriptions />
      <Reviews />
      <LearnMoreSection />
      <GetStartedSection />
      <SiteMap />
    </div>
  )
}


