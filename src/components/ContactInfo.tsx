import Codeforces from "../assets/icons/Codeforces";
import Date from "../assets/icons/Date";
import Email from "../assets/icons/Email";
import LinkedIn from "../assets/icons/LinkedIn";
import Location from "../assets/icons/Location";
import Phone from "../assets/icons/Phone";
import WhatsApp from "../assets/icons/WhatsApp";

function ContactInfo() {
    return (
        <div className="lg:text-[1.2rem] flex flex-col gap-2">
            <div className="flex items-center gap-2 sm:gap-6">
                <Email />
                <a
                    href="mailto:nagham.qarqamaz.kp@gmail.com"
                    className="hover:underline"
                >
                    nagham.qarqamaz.kp@gmail.com
                </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-6">
                <Phone />
                <a href="tel:+963992803522" className="hover:underline">
                    +963 992 803 522
                </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-6">
                <WhatsApp />
                <a
                    href="https://wa.me/+963992803522"
                    className="hover:underline"
                    target="_blank"
                >
                    +963 992 803 522
                </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-6">
                <Location />
                <div className="text-start">
                    <a
                        href="https://www.google.com/maps/place/Latakia,+Syria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Syria, Latakia
                    </a>
                    <span className="text-pumpkin lg:text-[1.2rem] italic ml-2">
                        (Willing To Relocate)
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-6">
                <Date />
                <div>November 10th, 1999</div>
            </div>
            <div className="flex items-center gap-2 sm:gap-6">
                <LinkedIn />
                <a
                    href="https://www.linkedin.com/in/nagham-qarqamaz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    /in/nagham-qarqamaz
                </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-6">
                <Codeforces />
                <a
                    href="https://codeforces.com/profile/Nagham_Qarqamaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    /profile/Nagham_Qarqamaz
                </a>
            </div>
        </div>
    );
}

export default ContactInfo;
