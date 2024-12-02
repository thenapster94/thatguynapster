import * as React from "react";

interface ContactResponseEmailProps {
  name: string;
}

export const ContactResponseEmail: React.FC<
  Readonly<ContactResponseEmailProps>
> = ({ name }) => (
  <div>
    <p>Hello, {name}!</p>
    <p>
      I wanted to express my gratitude for reaching out to me through the
      contact form on my portfolio website. Your interest means a lot to me, and
      I'm excited to connect with you.
      <br />
      <br />
      I've received your message and am personally reviewing the details you've
      shared. I'll make sure to get back to you as soon as possible with the
      information you need.
      <br />
      <br />
      If you have any additional questions or if there's anything specific you'd
      like to discuss, please feel free to reach out to me directly at
      andrewosei94@gmail.com.
      <br />
      <br />
      Thank you once again for reaching out. I'm looking forward to the
      opportunity to further discuss how I can assist you.
      <br />
      <br />
      Warm Regards,
      <br />
      <br />
      Andrew Osei-Wusu
      <br />
      thatguynapster.com
      <br />
      andrewosei94@gmail.com
    </p>
  </div>
);
