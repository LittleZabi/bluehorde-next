// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { SMTPClient } from "emailjs";

export default function sendEmailTo(email: string, template: string) {
  try {
    const client = new SMTPClient({
      user: process.env.mail,
      password: process.env.password,
      host: "smtp.gmail.com",
      ssl: true,
    });
    client.sendAsync({
      text: `Just for testing purpose`,
      from: process.env.mail,
      to: email,
      subject: "testing emailjs",
    });
  } catch (e) {
    console.error(e);
  }
}
