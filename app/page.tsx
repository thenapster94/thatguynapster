"use client";

import { Form, Formik } from "formik";
import { useState } from "react";
import Link from "next/link";
import { object } from "yup";

import { schema } from "@/libs";
import {
  Button,
  Group,
  Input,
  Navbar,
  PreviewImage,
  ProjectDetails,
  ProjectNavigationItem,
  Skills,
} from "@/components";
import {
  name,
  projects,
  role,
  skills,
  skillsDescription,
  socials,
  summary,
} from "@/configs";

export default function Home() {
  const [currentProject, setCurrentProject] = useState<number>(0);

  return (
    <main className="flex flex-col min-h-screen justify-center">
      <Navbar />

      {/* Hero Section */}
      <div
        id="home"
        className="flex flex-col h-screen items-start justify-center px-12 lg:px-24 -mt-[7.5rem] gap-10"
      >
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-black font-extrabold tracking-[0.19rem] text-outline-white text-6xl lg:text-5xl">
            {name}
          </h1>
          <p className="capitalize text-white text-4xl lg:text-4xl font-semibold text-outline-black">
            {role}
          </p>
        </div>
        <div className="flex gap-4">
          {socials.map(({ link, icon, ariaLabel }, i) => (
            <Link
              key={i}
              aria-label={ariaLabel}
              href={link}
              className="w-8 rounded-full bg-gray"
            >
              <div className="p-1.5 text-black">{icon}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div
        className="grid grid-cols-12 h-screen gap-12 items-center px-12 lg:px-24"
        id="about"
      >
        <div className="col-start-2 col-span-4">
          <PreviewImage images={["/img/napster.jpg"]} />
        </div>
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-8 w-full">
          <h2 className="text-accent text-3xl font-bold capitalize">
            about me
          </h2>
          <p className="lg:w-10/12 text-3xl text-dark font-light text-outline-white text-outline-thin">
            {summary}
          </p>
          <a
            href="/files/Andrew_Osei-Wusu_Resume.pdf"
            download={"Resume_Andrew Osei-Wusu"}
            className="py-4 px-6 bg-dark w-max justify-center items-center rounded-md"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div
        className="grid grid-cols-12 h-screen gap-12 items-center px-12 lg:px-24"
        id="skills"
      >
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-8 w-full">
          <h2 className="text-accent text-3xl font-bold capitalize">skills</h2>
          <p className="lg:w-10/12 text-3xl text-dark font-light text-outline-white text-outline-thin">
            {skillsDescription}
          </p>
          <Skills skills={skills} />
        </div>
        <div className="col-span-5">
          <PreviewImage images={["/img/skills.jpeg"]} slantDirection="left" />
        </div>
      </div>

      {/* Works Section */}
      <div
        className="grid grid-cols-12 h-screen gap-12 items-center px-12 lg:px-24"
        id="works"
      >
        <div className="col-start-2 col-span-4">
          <PreviewImage
            slant={false}
            grayscale={false}
            images={projects[currentProject].images}
          />
        </div>
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-8 w-full">
          <h2 className="text-accent text-3xl font-bold capitalize">works</h2>
          <ProjectDetails project={projects[currentProject]} />
          <div className="flex gap-2 justify-between items-end w-10/12">
            {projects.map(({ name }, i) => (
              <ProjectNavigationItem
                key={i}
                name={name}
                currentProject={currentProject}
                index={i}
                setCurrentProject={setCurrentProject}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        className="bg-[url('/img/contact-pattern-yellow.png')] h- p-20"
        id="contact"
      >
        <div className="p-8 bg-white flex items-center gap-16">
          <h1 className="hidden lg:block text-[38px] font-semibold text-black">
            Drop me a line. <br /> I would like to hear from you.
          </h1>
          <div className="flex flex-col gap-8 w-full">
            <h2 className="text-accent text-3xl font-semibold">Get in Touch</h2>
            <Formik
              validateOnMount
              enableReinitialize
              validationSchema={object({
                name: schema.requireFullName("Full name"),
                email: schema.requireEmail("Email"),
                message: schema.requireString("Message"),
              })}
              initialValues={{ name: "", email: "", message: "" }}
              onSubmit={(values, { setSubmitting }) => {}}
            >
              {({ values, isSubmitting }) => (
                <Form>
                  <div className="flex flex-col gap-6 w-full">
                    <Group className="w-full !mb-0 text-black" name="name">
                      <Input
                        as="input"
                        name="name"
                        value={values.name}
                        placeholder="Name"
                      />
                    </Group>
                    <Group className="w-full !mb-0 text-black" name="email">
                      <Input
                        as="input"
                        type="email"
                        name="email"
                        value={values.email}
                        placeholder="Email"
                      />
                    </Group>
                    <Group className="w-full !mb-0 text-black" name="message">
                      <Input
                        as="textarea"
                        name="message"
                        value={values.message}
                        placeholder="Message"
                        rows={5}
                      />
                    </Group>
                    <Button className="bg-black w-max">Send Message</Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black bg-[url('/img/splatter-small-white.png')] bg-no-repeat bg-right py-8">
        <div className="flex flex-col items-center gap-8">
          <p className="text-lg font-semibold">thatGuyNapster</p>
          <div className="flex gap-4">
            {socials.map(({ link, icon, ariaLabel }, i) => (
              <Link
                key={i}
                aria-label={ariaLabel}
                href={link}
                className="w-8 rounded-full bg-gray"
              >
                <div className="p-1.5 text-black">{icon}</div>
              </Link>
            ))}
          </div>
          <p className="text-sm  font-semibold">
            <span className="capitalize">all rights reserved</span> &copy; 2024
            thatGuyNapster
          </p>
        </div>
      </div>
    </main>
  );
}
