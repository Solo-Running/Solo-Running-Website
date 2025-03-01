import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function ContactPage() {
    return (
        <div className="flex flex-col justify-center">
            <section className="mx-[24px] lg:mx-auto py-24">
                <h1 className="text-white text-5xl font-black text-center">Contact</h1>
                <p className="mt-8 max-w-md text-light-grey text-center mx-auto">
                    For feedback or questions please contact <a href="mailto:wakimdeveloper@gmail.com" className="text-blue-500">wakimdeveloper@gmail.com</a>
                </p>
            </section>

            <section id="socials" className="flex flex-col gap-8 justify-center mx-auto">
                <div className="bg-dark-grey rounded-xl p-8 mx-auto">
                    <FaLinkedin size={54} color="white" className="hover:cursor-pointer" href=""/>
                </div>  

                <div className="bg-dark-grey rounded-xl p-8 mx-auto">
                    <FaGithub size={54} color="white" className="hover:cursor-pointer" href=""/>
                </div>  
            </section>
        </div>
    )
}