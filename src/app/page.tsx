import AnimatedHeading from "./components/AnimatedHeading";
import CoinImage from "./components/CoinImage";
import ContactForm from "./components/ContactForm";
import DetailsCard from "./components/DetailsCard";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import StatsSection from "./components/Statssection";
import { TestimonialList } from "./components/TestimonialList";

export default function Home() {
  return (
    <main className="h-full mx-auto p-4 bg-slate-950">
      <section className="h-auto flex flex-col justify-center md:py-6">
        <div className="container px-5 mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Earn more
            </span>
            <br />
            Skyrocket Your Finances
            <br />
            <span className="text-gray-300">With</span>{" "}
            <span className="text-yellow-400">GoShare</span>
          </h1>
          <p className="text-gray-400 text-lg py-4">
            Get to earn more income by just linking your WhatsApp
            <br />
            perform simple tasks and get paid
            <br />
            all for FREE
            <br />
          </p>

          <a href="https://server.wsgo.org/go/80308906">
            <button className="bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-purple-600 text-white text-2xl py-2 px-4 rounded-sm">
              Get Started
            </button>
          </a>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container px-5 mx-auto">
          <div
        className=" flex py-12 justify-center items-center">
          <AnimatedHeading className="text-3xl md:text-5xl font-bold text-gray-300">
            Get Connected In 3 Steps
          </AnimatedHeading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
          <DetailsCard 
          image="/good.webp"
          title="Step 1"
          name="Register"
          description="Register with your whatsapp number and get started"
          width={100}
          height={100}
          />
        </div>

        <div>
          <DetailsCard 
          image="/good.webp"
          title="Step 2"
          name="Link Whatsapp"
          description="Register with your whatsapp number and get started"
          width={100}
          height={100}
          />
        </div>

        <div>
          <DetailsCard 
          image="/good.webp"
          title="Step 3"
          name="Withdaraw"
          description="Register with your whatsapp number and get started"
          width={100}
          height={100}
/>
        </div>
        </div>
        
        <div className="flex justify-center items-center py-10">
        <a href="https://server.wsgo.org/go/80308906">
          <button
             className="bg-yellow-400 hover:bg-yellow-600  text-black text-2xl py-2 px-4 rounded-2xl animate-zoom-in"
             >
            Get Started
          </button>
        </a>
        </div>
        </div>
      </section>

      <section id="features">
        <div>
        <div
        className=" flex py-12 justify-center items-center">
          <AnimatedHeading className="text-3xl md:text-5xl font-bold text-gray-300">
            How It Works
          </AnimatedHeading>
        </div>
        <div>
          <HowItWorks />
        </div>
        </div>
      </section>
      <section>
      <div
        className=" flex py-12 justify-center items-center">
          <AnimatedHeading className="text-3xl md:text-5xl font-bold text-gray-300">
            Trusted By Millions Of Users
          </AnimatedHeading>
        </div>
        <div id="testimonials">
          <TestimonialList />
        </div>
        <div>
          <StatsSection />
        </div>
      </section>
      <section>
        <div>
          <CoinImage />
        </div>
      </section>
      <section id="faq">
        <div>
          <FAQ />
        </div>
        <div className="flex justify-center items-center py-10">
        <a href="https://server.wsgo.org/go/80308906">
          <button
             className="bg-yellow-400 hover:bg-yellow-600  text-black text-2xl py-2 px-4 rounded-2xl animate-zoom-in"
             >
            Get Started
          </button>
        </a>
        </div>
      </section>
      <section id="contact">
        <div>
          <ContactForm />
        </div>
      </section>
      <section id="footer">
        <div>
          <Footer />
        </div>
      </section>
    </main>
  );
}