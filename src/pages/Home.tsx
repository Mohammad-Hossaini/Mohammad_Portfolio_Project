import Navbar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import ThemToggle from "../components/ThemToggle";

function Home() {
  return (
    <div className="min-h-screen text-center bg-background text-foreground overflow-x-hidden ">
      {/* Them Toggle */}
      <ThemToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}

      {/* Footer */}
    </div>
  );
}

export default Home;
