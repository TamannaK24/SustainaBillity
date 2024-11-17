export default defineEventHandler(async event => {
    setCookie(event, "token", "")
    setCookie(event, "user", "")
    await sendRedirect(event, "/")
  })