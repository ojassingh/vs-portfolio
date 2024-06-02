'use server'

import { z } from "zod";
import { formSchema } from "./ContactForm";
import {Resend} from "resend";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);;


async function sendEmail(values: z.infer<typeof formSchema>) {
    'use server'
    console.log(values);
    try {
      const response = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'vandanacs02@gmail.com',
        // to: 'ojas.singh02@gmail.com',
        subject: values.subject || 'No Subject',
        html: `<p>Name: ${values.name}</p><p>Email: ${values.email}</p><p>Message: ${values.message}</p>`,
      });
  
      return response;
    } catch (error) {
      throw new Error('Failed to send email');
    }
  }

export default sendEmail;