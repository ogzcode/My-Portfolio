import "./Contact.css";
import {FaTwitter, FaLinkedin, FaGithub} from "react-icons/fa";

function Contact() {
    return (
        <div className='contact' id="contact">
            <div className='row text-center'>
                <div className='col'>
                    <h2 className="contact__header text-white">Sosyal Ağlar</h2>
                    <div className="social__icon--box">
                        <a href="https://twitter.com/ogzCode" className="social__icon">
                            <FaTwitter/>
                        </a>
                        <a href="https://github.com/ogzcode" className="social__icon">
                            <FaGithub/>
                        </a>
                        <a href="https://www.linkedin.com/in/o%C4%9Fuzhan-g%C3%BC%C3%A7-327633193?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtDaJlFtxQ2yX4MqwDgVyDA%3D%3D" className="social__icon">
                            <FaLinkedin/>
                        </a>
                    </div>
                </div>
                <div className="col">
                    <h2 className="contact__header text-white">Email</h2>
                    <p className="text-white fs-5">oguzguc44@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;