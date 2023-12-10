import Image from "next/image"
import Link from "next/link"
import profileImage from "../../public/profile.png"

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        width={250}
        height={250}
        src={profileImage}
        alt="Author"
        priority
      />
      <h2 className="mt-2 text-3xl font-bold">{"Hi, I'm Ellie"}</h2>
      <h3 className="text-xl font-semibold">Full-stack Engineer Ellie</h3>
      <p>꿈을 코딩하는 사람, 드림코더 엘리</p>
      <Link href="/contact">
        <button
          type="button"
          className="mt-2 rounded-xl bg-yellow-500 px-4 py-1 font-bold"
        >
          Contact Me
        </button>
      </Link>
    </section>
  )
}
