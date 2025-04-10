import Footer from "@/Components/Footer";
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import RecentProject from "@/Components/RecentProject";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import { navItems } from "@/data";



export default function Home() {
  return (
    <main className="relative bg-blue-100 flex justify-center items-center flex-col 
    mx-auto sm:px-10 px-5 w-full min-h-screen overflow-hidden">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProject/>
        <Footer/>
      </div>
    </main>
  );
}
