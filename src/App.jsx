import Nav from './components/Nav';
import Hero from './sections/Hero';
import CustomerReviews from './sections/CustomerReviews';
import Footer from './sections/Footer';
import PopularProducts from './sections/PopularProducts';
import Services from './sections/Services';
import SpecialOffer from './sections/SpecialOffer';
import Subscribe from './sections/Subscribe';
import SuperQuality from './sections/SuperQuality';

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="py-10 padding-x">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="w-full py-16 padding-x sm:py-32">
      <Subscribe />
    </section>
    <section className="pb-8 bg-black padding-x padding-t">
      <Footer />
    </section>
  </main>
)

export default App;