import Hero from "./components/Hero";
import MainNavigation from "./components/MainNavigation";
import OurWork from "./components/OurWork";
import GlobalStyles from "./GlobalStyles";
import Spacer from "./global-components/Spacer";
import Desingers from "./components/Desingers";
import Brands from "./components/Brands";
import OurCapabilties from "./components/OurCapabilites";
import Footer from "./components/Footer";

function App() {
   return (
      <>
         <Spacer $desktop={48} />
         <MainNavigation />
         <Spacer $desktop={90} $mobile={45} />
         <Hero />
         <Spacer $desktop={200} $mobile={100} />
         <OurWork />
         <Spacer $desktop={200} $mobile={100} />
         <Desingers />
         <Spacer $desktop={120} />
         <Brands />
         <Spacer $desktop={200} $mobile={100} />
         <OurCapabilties />
         <Spacer $desktop={100} $mobile={50} />
         <Footer />
         <Spacer $desktop={128} />

         <GlobalStyles />
      </>
   );
}

export default App;
