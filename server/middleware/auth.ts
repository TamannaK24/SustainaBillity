import { loginRedirectUrl, logoutRedirectUrl } from "../api/auth0"
import jwt from "jsonwebtoken"
import fs from "fs"
import { PrismaClient } from "@prisma/client"
const client = new PrismaClient()

const runtime = useRuntimeConfig()

export default defineEventHandler(async event => {
    event.context.client = client
    const token = getCookie(event, "token") || "" // here is your token
    if (!token && !(event.node.req.url?.includes('/api/callback') || event.node.req.url?.includes("/"))) {
        await sendRedirect(event, loginRedirectUrl()); 
      } else {
        if (token) {
          try {
            const claims = jwt.verify(
              token, 
              fs.readFileSync(process.cwd()+"/cert-dev.pem")
            )
            event.context.claims = claims 
            event.context.user = await event.context.client.user.findFirst( // the user of a given event is found here
              {
                where: { email: claims.email }
              })
              if(!event.context.user) { 
                setCookie(event,'token','')
                setCookie(event,'user','')
                return await sendRedirect(event, logoutRedirectUrl(token)) 
              }
              setCookie(event, 'user', JSON.stringify(event.context.user))
            }
            catch (e) {
                console.error(e)
            }
        }
    }
    
})