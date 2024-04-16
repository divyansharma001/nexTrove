
import Box from "@/components/Card";
import Hero from "@/components/Carousel";
import Heading from "@/components/Heading";


export default function Home() {
  return (
    <main className="min-h-screen antialiased">
     <Hero/>
     <div className="dark:bg-white dark:text-black bg-black text-white 
     mt-10 px-4 overflow-hidden
     text-2xl antialiased
     p-4 text-center
     ">
     Streetwear for the Unapologetically You.
     </div>
     <Heading/>
    
     <Box/>
    </main>
  );
}
