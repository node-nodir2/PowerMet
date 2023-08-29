import ContactForm from "../ContactForm/ContactForm";

import "./contact.css";

const FormContact = ({ language }) => {
    return (
        <section className="contact-pattern bg-no-repeat bg-cover bg-fixed pt-[90px] sm:pt-[120px] pb-[90px] mt-[30px] sm:mt-[57px]">
            <div className="container flex items-center justify-between">
                <p></p>
                <div data-aos="fade-left" data-aos-duration="1000">
                    <ContactForm language={language} />
                </div>
            </div>
        </section>
    );
};

export default FormContact;
