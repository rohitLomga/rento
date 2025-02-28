import ImageSlideshow from "./ImageSlide";

import { Profile } from "./rentoFinder/User/Web Files/Profile/Profile";
import { ChangePassword } from "./rentoFinder/User/Web Files/Change Password/ChangePassword";
import { LandingPage } from "./rentoFinder/User/Web Files/Landing Page/LandingPage";
import { OTPVerification } from "./rentoFinder/User/Web Files/OTP Verification/OTPVerification";
import { Password } from "./rentoFinder/User/Web Files/Password/Password";
import { ProductDetailsSelling } from "./rentoFinder/User/Web Files/ProductDeetailsSelling/ProductDetailsSelling";
import { ProductDetailsRenting } from "./rentoFinder/User/Web Files/ProductDetailsRenting/ProductDetailsRenting";
import { ResetPassword } from "./rentoFinder/User/Web Files/Reset Password/ResetPassword";
import { SearchRoom } from "./rentoFinder/User/Web Files/SearchRoom/SearchRoom";
import { SignIn } from "./rentoFinder/User/Web Files/Sign In/SignIn";
import { SignUp } from "./rentoFinder/User/Web Files/Sign Up/SignUp";
import { Save } from "./rentoFinder/User/Web Files/Save/Save";
import { MyProperties } from "./rentoFinder/User/Web Files/MyProperties/MyProperties";
import { FavouritedProperties } from "./rentoFinder/User/Web Files/FavouritedProperties/FavouritedProperties";
import { PaymentAndCartSelling } from "./rentoFinder/User/Web Files/PaymentAndCartSelling/PaymentAndCartSelling";
import { OrderSummary } from "./rentoFinder/User/Web Files/OrderSummary/OrderSummary";
import { Congratulations } from "./rentoFinder/User/Web Files/Congratulations/Congratulations";
import { AboutUs } from "./rentoFinder/User/Web Files/AboutUs/AboutUs";
import { Dashboard } from "./rentoFinder/Admin/Web Files/Dashboard/Dashboard";
import themeOptions from "./CSS";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PropertyAttributes } from "./rentoFinder/Admin/Web Files/PropertyAttributes/PropertyAttributes";
import AdminRouter from "./rentoFinder/Admin/Web Files/Router/Router";

const App = () => {
  const theme = createTheme(themeOptions);
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <PropertyAttributes /> */}
        {/* <ProductDetailsRenting /> */}
        <AdminRouter />
      </div>
    </ThemeProvider>
  );
};

export default App;
