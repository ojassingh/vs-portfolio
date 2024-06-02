"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Button } from "./button";
import { Textarea } from "./textarea";
import { SendHorizonal } from "lucide-react";
import sendEmail from "./SendEmail";
import { useToast } from "@/app/components/ui/use-toast";

export const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1),
  subject: z.string(),
});

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { toast } = useToast();


  async function onSubmit(values: z.infer<typeof formSchema>) {
    
    try {
      await sendEmail(values);
      toast({
        title: "Your message was sent!",
        description: "We'll get back to you soon."
      })
    } catch (error) {
      toast({
        title: "Uh Oh!",
        description: "Failed to send message. Try again later!",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-wrap sm:flex-nowrap md:flex-nowrap gap-4">
          <div className="sm:flex-1 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md sm:text-lg">Name</FormLabel>
                  <FormControl>
                    <Input
                      className="text-md shadow-sm"
                      placeholder="John Doe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="sm:flex-1 w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md sm:text-lg">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="text-md shadow-sm"
                      placeholder="john.doe@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md sm:text-lg">Message</FormLabel>
                <FormControl>
                  <Input
                    className="text-md shadow-sm"
                    placeholder="Subject"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md sm:text-lg">Message</FormLabel>
              <FormControl>
                <Textarea
                  className="text-md shadow-sm"
                  placeholder="Type your message ..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="text-md bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        >
          Submit <SendHorizonal className="inline-block ml-1 h-5" />
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
