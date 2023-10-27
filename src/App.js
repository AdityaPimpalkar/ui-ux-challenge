import { Listings } from "./front/Listings";
import { Navbar } from "./components/Navbar";
import "./App.css";

function App() {
  const loggedInUser = {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@me.com",
  };
  return (
    <div className="m-5">
      <Navbar user={loggedInUser} />
      <Listings />
    </div>
  );
}

export default App;
