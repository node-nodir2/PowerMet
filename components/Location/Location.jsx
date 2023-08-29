import { Toaster } from "react-hot-toast";
import ContactForm from "../ContactForm/ContactForm";

const Location = ({ language }) => {
    return (
        <section className="container">
            <Toaster />
            <div className="flex flex-col sm:flex-row items-center justify-between sm:space-x-10 space-y-4 sm:space-y-0 pb-[68px]">
                <iframe
                    className="sm:max-w-[658px] w-full h-[438px] sm:h-[462px] rounded-[10px] border"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4156.354701301804!2d69.27553451997714!3d41.29789867466423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad04ad60097%3A0x52c7587959cc49d1!2zMzQg0YPQu9C40YbQsCDQotCw0YDQsNGB0LAg0KjQtdCy0YfQtdC90LrQviwg0KLQsNGI0LrQtdC90YIgMTAwMDYwLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1693080053578!5m2!1sru!2s"
                    width="658"
                    height="438"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <ContactForm language={language} modal={false} />
            </div>
        </section>
    );
};

export default Location;
