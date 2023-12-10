"use client"

import { sendContactEmail } from "@/service/contact"
import { useState, type ChangeEventHandler, type FormEvent } from "react"
import type { BannerData } from "./Banner"
import Banner from "./Banner"

type Form = {
  from: string
  subject: string
  message: string
}

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
}

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA)

  const [banner, setBanner] = useState<BannerData | null>(null)

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (
    e,
  ) => {
    const { name, value } = e.target

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendContactEmail(form)
      .then(() => {
        setBanner({
          message: "메일을 성공적으로 보냈습니다.",
          state: "success",
        })
        setForm(DEFAULT_DATA)
      })
      .catch(() => {
        setBanner({ message: "메일을 보내는데 실패했습니다.", state: "error" })
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null)
        }, 3000)
      })
  }

  return (
    <section className="w-full max-w-md">
      {banner && <Banner className="mb-4" banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="flex w-full max-w-md flex-col gap-2 rounded-xl bg-slate-700 p-4"
      >
        <label htmlFor="from" className="font-semibold text-white">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label htmlFor="subject" className="font-semibold text-white">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
        />
        <label htmlFor="message" className="font-semibold text-white">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
        />
        <button
          type="submit"
          className="bg-yellow-300 font-bold text-black hover:bg-yellow-400"
        >
          Submit
        </button>
      </form>
    </section>
  )
}
