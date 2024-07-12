import SideBar from "./components/SideBar";
import ContactForm from "./pages/Contacts/components/ContactForm";
import Contacts from "./pages/Contacts/sections/Contacts";
import Hero from "./pages/Home/sections/Hero";
import LogoCloud from "./pages/Home/sections/LogoCloud";

function App() {
  return (
    <div className="relative bg-background_color min-h-screen overflow-hidden">
      <Contacts />
    </div>
  );
}

export default App;
