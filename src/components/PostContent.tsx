import type { PostData } from "@/service/posts"
import { AiTwotoneCalendar } from "react-icons/ai"
import MarkdownViewer from "./MarkdownViewer"

type Props = {
  post: PostData
}

export default async function PostContent({ post }: Props) {
  const { title, description, date, content } = post

  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center self-end text-sky-600">
        <AiTwotoneCalendar />
        <p className="font-semibod ml-2">{date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="mb-8 mt-4 w-44 border-2 border-sky-600" />
      <MarkdownViewer content={content} />
    </section>
  )
}
