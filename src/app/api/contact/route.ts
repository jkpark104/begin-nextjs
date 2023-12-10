import { sendEmail } from "@/service/email"
import * as yup from "yup"

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
})

export const POST = async (request: Request) => {
  const body = await request.json()

  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "잘못된 요청입니다." }), {
      status: 400,
    })
  }

  return sendEmail(body)
    .then(() => {
      return new Response(
        JSON.stringify({ message: "메일이 전송되었습니다." }),
        { status: 200 },
      )
    })
    .catch(() => {
      return new Response(
        JSON.stringify({ message: "메일 전송에 실패했습니다." }),
        { status: 500 },
      )
    })
}
