import {defineEventHandler, readBody } from "h3"
import { make } from 'simple-body-validator';
// import nodemailer from "nodemailer"

export default defineEventHandler(async (event) => {

  const rules = {
    name: 'required|string|min:6|max:10',
    email: 'required|email'
  }
  const data = await readBody(event)
  const validator = make(data, rules)

  if (! validator.validate()) {
    event.res.statusCode = 422
    return { errors: validator.errors().all() }
  }

  // let transport = nodemailer.createTransport({
  //   host: "127.0.0.1",
  //   port: 1025,
  //   secure: false,
  //   auth: null,
  // });
  //
  // const response = await transport.sendMail({
  //   from: "Zezé <zeze@example.com.br>",
  //   to: 'Eu mesmo <zizi@example.com.br>',
  //   subject: 'Testando Mailhog',
  //   html: '<h1>Funcionou!</h1>'
  // })

  return { data: 'OK' }

})
