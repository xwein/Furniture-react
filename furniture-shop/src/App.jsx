import { Navbar } from './components';
import './App.css'
import { Header,Banner,Categories, NewProducts, MidBanner,WeekProducts,EndBanner, RecentBlog,UpperFooter} from './container';

function App() {

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
    </>
  )
}

export default App
