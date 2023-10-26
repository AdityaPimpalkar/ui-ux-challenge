import { Listings } from "./front/Listings";
import "./App.css";

function App() {
  return (
    // Nav bar implementation:
    // Starting with a flex box div and inside we can put two elements, one with the company icon and the other is the user
    // profile icon, applying the justify-between class of tailwind should allow us to put them on two seperate ends

    // User profile information:
    // we can reuse the existing Card component, pass the title as username, subtitle as user email address and fotterLeftContent
    // as an anchor tag to view users full profile and fotterRightContent as a button to sign out
    <div className="m-5">
      <Listings />
    </div>
  );
}

export default App;
