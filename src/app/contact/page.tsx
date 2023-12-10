import ContactForm from "@/components/ContactForm"
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"

const LINKS = [
  { icon: <AiFillGithub />, url: "" },
  { icon: <AiFillLinkedin />, url: "" },
  { icon: <AiFillYoutube />, url: "" },
]

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="my-2 text-3xl font-bold">Contact Me</h2>
      <p>info@dream-coding.com</p>
      <ul className="my-2 flex gap-4">
        {LINKS.map((link, index) => (
          <li key={index} className="text-5xl hover:text-yellow-400">
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <h2 className="my-8 text-3xl font-bold">Or Send me an email</h2>
      <ContactForm />
    </section>
  )
}
