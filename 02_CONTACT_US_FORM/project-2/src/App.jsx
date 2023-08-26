import "./App.css";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div>
      <Navigation />
      <div className="main_container">
        <ContactHeader />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
