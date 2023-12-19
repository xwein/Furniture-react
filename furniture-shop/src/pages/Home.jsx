import { Header,Banner,Categories, NewProducts, MidBanner,WeekProducts,EndBanner, RecentBlog,UpperFooter, LowerFooter} from '../container/index';
import { Navbar } from '../components/Navbar';


function Home() {

    return (
      <>
        <Navbar />
        <Header/>
        <Banner/>
        <Categories/>
        <NewProducts/>
        <MidBanner/>
        <WeekProducts/>
        <EndBanner/>
        <RecentBlog/>
        <UpperFooter/>
        <LowerFooter/>
      </>
    )
  }
  
  export default Home