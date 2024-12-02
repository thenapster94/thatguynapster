import * as React from "react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <p>
      Hello, <br />
      <br />
      You have a new message from {name} {email}.<br />
      <br />
      {message}
    </p>
  </div>
);
