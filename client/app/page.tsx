import HeroSection from "./components/hero";
import WhyChooseUs from "./components/ChooseUs";
import HowItWorks from "./components/learning";
import CustomerReviews from "./components/CustomerReviews";
import FeaturesSection from "./components/Bookdriving";
import GiftVoucherSection from "./components/GiftVoucherSection";
import WhyChooseUss from "./components/WhychooseYourcompany";
import YourLogoAdvantage from "./components/tyre";
import DrivingLessons from "./components/DrivingLesson";
import Footer from "./components/footer";
import DrivingTestPackage from "./components/banSec";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs /> 
      <HowItWorks />
      <CustomerReviews />
      <DrivingTestPackage />
      <FeaturesSection />
      <GiftVoucherSection />
      <DrivingLessons />
      <WhyChooseUss />
      <YourLogoAdvantage />
    </div>
  );
}
