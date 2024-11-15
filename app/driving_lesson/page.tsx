import BookingPlatformSection from "../components/BookingPlatformSectio";
import DrivingInstructors from "../components/Drivinginstructors";
import QualityDriving from "../components/QualityDriving";
import SurroundingSuburbs from "../components/suburb";
import YourAdvantage from "../components/tyreComp";
import DrivingLesson from "../pages/drivingLesson";

const DrivingLessonSection = () => {
  return (
    <div>
        <DrivingLesson/>
        < BookingPlatformSection />
        <YourAdvantage />
        <DrivingInstructors />
        <SurroundingSuburbs />
        <QualityDriving />
    </div>
  );
};

export default DrivingLessonSection;
