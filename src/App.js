import ImageSlideshow from "./ImageSlide";
import { ChangePassword } from "./rentoFinder/Web Files/Change Password/ChangePassword";
import { LandingPage } from "./rentoFinder/Web Files/Landing Page/LandingPage";
import { OTPVerification } from "./rentoFinder/Web Files/OTP Verification/OTPVerification";
import { Password } from "./rentoFinder/Web Files/Password/Password";
import { ResetPassword } from "./rentoFinder/Web Files/Reset Password/ResetPassword";
import { SearchRoom } from "./rentoFinder/Web Files/SearchRoom/SearchRoom";
import { SignIn } from "./rentoFinder/Web Files/Sign In/SignIn";
import { SignUp } from "./rentoFinder/Web Files/Sign Up/SignUp";
import { Login } from "./SignupAndLogIn/Login";
import SignupUsers from "./SignupAndLogIn/Signup";

function App() {
  return (
    <div>
        {/* <SearchRoom /> */}
        <Login />
    </div>
  );
}

export default App;
