import { Form, Formik, FormikHelpers } from "formik";
import toast from "react-hot-toast";
import { object } from "yup";
import React from "react";

import { Button, Group, Input } from ".";
import { schema } from "@/libs";

export const ContactForm = () => {
  interface FormData {
    name: string;
    email: string;
    message: string;
  }
  const sendEmail = async (
    values: FormData,
    actions: FormikHelpers<FormData>
  ) => {
    actions.setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(values),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        toast.success(`Hey ${values.name}, your message has been sent.`);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error.message);
      actions.setSubmitting(false);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      validateOnMount
      enableReinitialize
      validationSchema={object({
        name: schema.requireFullName("Full name"),
        email: schema.requireEmail("Email"),
        message: schema.requireString("Message"),
      })}
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={(values, actions) => {
        sendEmail(values, actions);
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <div className="flex flex-col gap-6 w-full">
            <Group className="w-full !mb-0 text-dark" name="name">
              <Input
                as="input"
                name="name"
                value={values.name}
                placeholder="Name"
              />
            </Group>
            <Group className="w-full !mb-0 text-dark" name="email">
              <Input
                as="input"
                type="email"
                name="email"
                value={values.email}
                placeholder="Email"
              />
            </Group>
            <Group className="w-full !mb-0 text-dark" name="message">
              <Input
                as="textarea"
                name="message"
                value={values.message}
                placeholder="Message"
                rows={5}
              />
            </Group>
            <Button
              type="submit"
              className="bg-dark w-max"
              {...{ isSubmitting }}
            >
              Send Message
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
