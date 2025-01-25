import DetailsCard from "./components/DetailsCard";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <main 
    className="h-full mx-auto p-4 bg-slate-950"
    >
      <section className="h-auto flex flex-col justify-center md:py-6">
      
        <div 
      className="container px-5 mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
        <span className="bg-gradient-to-r from-red-500 to-black bg-clip-text text-transparent">Earn more</span> <br /> 
        Skyrocket Your Finances <br /> 
        <span className="text-gray-700">With</span> <span className='text-green-600'>GoShare</span>
        </h1>
        <p
        className="text-gray-400 text-lg py-4">
          Get to earn more income by just linking your whatsapp, <br /> perform simple tasks and get paid <br />all for FREE.
        </p>
        <a href="https://server.wsgo.org/go/80308906">
          <button
             className="bg-gradient-to-br from-red-600/70 to-green-500/80 hover:bg-green-700 text-white text-2xl py-2 px-4 rounded-sm"
             >
            Get Started
          </button>
        </a>
        </div>
      </section>
      
      <section>
        <div className="container px-5 mx-auto">
          <div
        className=" flex py-12 justify-center items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-300">
            Get Connected In 3 Steps
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
          <DetailsCard 
          image="https://static.vecteezy.com/system/resources/previews/025/210/773/original/check-mark-icon-transparent-background-checkmark-icon-approved-symbol-confirmation-sign-design-elements-checklist-positive-thinking-sign-correct-answer-verified-badge-flat-icon-png.png"
          title="Step 1"
          name="Register"
          description="Register with your whatsapp number and get started"
          />
        </div>

        <div>
          <DetailsCard 
          image="https://static.vecteezy.com/system/resources/previews/025/210/773/original/check-mark-icon-transparent-background-checkmark-icon-approved-symbol-confirmation-sign-design-elements-checklist-positive-thinking-sign-correct-answer-verified-badge-flat-icon-png.png"
          title="Step 2"
          name="Link Whatsapp"
          description="Register with your whatsapp number and get started"
          />
        </div>

        <div>
          <DetailsCard 
          image="https://static.vecteezy.com/system/resources/previews/025/210/773/original/check-mark-icon-transparent-background-checkmark-icon-approved-symbol-confirmation-sign-design-elements-checklist-positive-thinking-sign-correct-answer-verified-badge-flat-icon-png.png"
          title="Step 3"
          name="Withdaraw"
          description="Register with your whatsapp number and get started"
          />
        </div>
        </div>
        
        <div className="flex justify-center items-center py-10">
        <a href="https://server.wsgo.org/go/80308906">
          <button
             className="bg-green-500 hover:bg-green-700  text-black text-2xl py-2 px-4 rounded-2xl"
             >
            Get Started
          </button>
        </a>
        </div>
        </div>
      </section>

      <section>
        <div>
        <div
        className=" flex py-12 justify-center items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-300">
            How it works
          </h2>
        </div>
        <div>
          <HowItWorks />
        </div>
        </div>
      </section>
    </main>
  );
}