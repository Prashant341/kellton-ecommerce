import HomePage from "./pages/HomePage/homepage.component";
import {Route,Routes} from 'react-router-dom'
import ShopPage from "./pages/ShopPage/shoppage.component";
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./component/header/header.component";

function App() {
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/signin' element={<SignInSignUp/>}/>
      </Routes>
    </div>
  );
}
export default App;