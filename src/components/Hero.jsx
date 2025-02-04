import Button from "./Button"
import Navbar from "./Navbar"

 

const Hero = () => {
  return (
    <section className="w-full relative">
        <Navbar />
        <div className="w-full h-full bg-gradient-to-r from-orange-500 to-red-500 z-[-10] rounded-bl-4xl
        overflow-hidden">
            <img 
                src="src/assets/images/bg-pattern-intro-desktop.svg" 
                alt="Desktop background" 
                className="w-full h-[500px] object-center object-cover opacity-40 text-red-800 rounded-bl-4xl"
            />
            <div className="inset-0 w-[80%] mx-auto absolute flex flex-col justify-center items-center md:mt-12">
                <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-white">A Modern Publishing Platform</h1>
                <p className="text-white mt-2">Build your audience and build your online brand</p>

                <div className="mt-12 space-x-5">
                    <Button 
                        label="Start for Free"
                        className="px-6 py-3 text-[var(--color-neutral-white)] rounded-full 
                                bg-[var(--color-primary-red)] hover:bg-[var(--color-red-hover)] font-bold text-sm"
                    />
                    <Button 
                        label="Learn More"
                        className="px-4 py-2 rounded-full border border-white  font-bold text-white 
                        hover:bg-white hover:text-red-400 transition-transform delay-300 ease-in-out"
                    />
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero