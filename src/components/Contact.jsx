import { FaGithub, FaTwitter, FaLinkedin, FaCodepen } from "react-icons/fa";

function Contact(){
    return (
        <div className="bg-slate-800 py-16 px-24 flex justify-between items-center" id="contact">
            <div>
                <h1 className="text-white text-2xl mb-2">Email</h1>
                <p className="text-white text-xl">oguzguc44@gmail.com</p>
            </div>
            <div>
                <h1 className="text-white text-2xl mb-4">Sosyal Ağlar</h1>
                <div className="flex">
                    <a href="https://github.com/ogzcode" className="text-white text-2xl mr-4"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/o%C4%9Fuzhan-g%C3%BC%C3%A7-327633193/" className="text-white text-2xl mr-4"><FaLinkedin/></a>
                    <a href="https://twitter.com/ogzCode" className="text-white text-2xl mr-4"><FaTwitter/></a>
                    <a href="https://codepen.io/ogzCode" className="text-white text-2xl mr-4"><FaCodepen/></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;