import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

const AcmeRocketsPage: NextPage = () => {
  const [mobileMenuOpen, toggleMobileMenuOpen] = useState(false)
  useEffect(() => {
    document.querySelector('html').classList.add('sm:scroll-smooth')

    return () => {
      document.querySelector('html').classList.remove('sm:scroll-smooth')
    }
  }, [])

  const toggleMobileMenu = () => {
    toggleMobileMenuOpen((prev) => !prev)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Head>
        <title>Acme Rockets</title>
        <meta
          name="author"
          content="Javier Lopez"
        />
        <meta
          name="description"
          content="Implementation of Dave Gray's 2nd part of the Beginner's Tailwindcss tutorial"
        />
      </Head>
      <header className="sticky top-0 z-10 bg-teal-700 text-white">
        <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
          <h1 className="text-3xl font-medium">
            <a href="#hero">🚀 Acme Rockets</a>
          </h1>
          <div>
            <button
              id="hamburger-button"
              className={`relative h-8 w-8 cursor-pointer text-3xl md:hidden ${
                mobileMenuOpen ? 'toggle-btn' : ''
              }`}
              onClick={() => toggleMobileMenu()}
            >
              {/* &#9776; */}
              <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
            </button>
            <nav
              className="hidden space-x-8 text-xl md:block"
              aria-label="main"
            >
              <a
                href="#rockets"
                className="hover:opacity-90"
              >
                Our Rockets
              </a>
              <a
                href="#testimonials"
                className="hover:opacity-90"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="hover:opacity-90"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </section>
        <section
          id="mobile-menu"
          className={`justify-content-center top-68 absolute w-full origin-top animate-open-menu flex-col bg-black text-5xl ${
            mobileMenuOpen ? 'flex' : 'hidden'
          }`}
          onClick={() => toggleMobileMenu()}
        >
          {/* <button
            className="self-end px-6 text-8xl"
            onClick={() => toggleMobileMenu()}
          >
            &times;
          </button> */}
          <nav
            className="flex min-h-screen flex-col items-center py-8"
            aria-label="mobile"
          >
            <a
              href="#hero"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Home
            </a>
            <a
              href="#rockets"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Our Rockets
            </a>
            <a
              href="#testimonials"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Contact Us
            </a>
            <a
              href="#footer"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Legal
            </a>
          </nav>
        </section>
      </header>
      <main className="mx-auto max-w-4xl">
        <section
          id="hero"
          className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
        >
          <article className="sm:w-1/2">
            <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
              We Boldly Go{' '}
              <span className="text-indigo-700 dark:text-indigo-300">
                Where No Rocket
              </span>{' '}
              Has Gone Before...
            </h2>
            <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
              We&apos;re building rockets for the next century today. From the
              moon to Mars, Jupiter and beyond...
            </p>
            <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
              Think Acme Rockets.
            </p>
          </article>
          <img
            className="w-1/2"
            src="img/rocketdab.png"
            alt="Rocket Dab"
          />
        </section>
        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
        <section
          id="rockets"
          className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 py-6"
        >
          <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Our Rockets
          </h2>
          <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
            <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:mx-auto sm:w-5/6">
              <img
                src="img/rocketman.png"
                alt="Explorer"
                className="mb-6 w-1/2"
              />
              <h3 className="text-center text-3xl text-slate-900 dark:text-white">
                Explorer
              </h3>
              <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
                $
              </p>
              <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
                Affordable Exploration
              </p>
            </li>
            <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:mx-auto sm:w-5/6">
              <img
                src="img/rocketride.png"
                alt="Adventurer"
                className="mb-6 w-1/2"
              />
              <h3 className="text-center text-3xl text-slate-900 dark:text-white">
                Adventurer
              </h3>
              <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
                $$
              </p>
              <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
                Best Selling Rocket!
              </p>
            </li>
            <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:mx-auto sm:w-5/6">
              <img
                src="img/rocketlaunch.png"
                alt="Infinity"
                className="mb-6 w-1/2"
              />
              <h3 className="text-center text-3xl text-slate-900 dark:text-white">
                Infinity
              </h3>
              <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
                $$$
              </p>
              <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
                Luxury Starship
              </p>
            </li>
          </ul>
        </section>
        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
        <section
          id="testimonials"
          className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 py-6"
        >
          <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Testimonials
          </h2>
          <figure className="my-12">
            <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
              <p
                className="mt-2 text-left text-2xl text-white before:absolute before:left-0 before:top-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20
                after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl"
              >
                Acme has always been here for me. Their explorer rocket arrived
                in a wooden crate as expected. Life-long customer! A++ shopping
                experience.
              </p>
            </blockquote>
            <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
              &#8212;Wilie E. Coyote, Genius
            </figcaption>
          </figure>
          <figure className="my-12">
            <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
              <p
                className="mt-2 text-left text-2xl text-white before:absolute before:left-0 before:top-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20
                after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform  after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl"
              >
                The Acme Adventurer rocket has thwarted my Illudium Q-36
                Explosive Space Modulator on several occassions.{' '}
                <span className="italic">This makes me very, very angry!</span>{' '}
                Nevertheless, K-9 and I have awarded Acme the Martian contract
                for space exploration rockets based on Acme&apos;s quality and
                sturdy designs.
              </p>
            </blockquote>
            <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
              &#8212;Marvin the Martian &amp; K-9
            </figcaption>
          </figure>
          <figure className="my-12">
            <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
              <p
                className="mt-2 text-left text-2xl text-white before:absolute before:left-0 before:top-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20
                after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform  after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl"
              >
                I knew I not only wanted &#8212;{' '}
                <span className="italic">I needed</span> &#8212; Acme&apos;s
                Infinity rocket for my mission in space Acme delivered in one
                day! Nothing says{' '}
                <q className="italic">Take me to your leader</q> like
                Acme&apos;s Infinity rocket!
              </p>
            </blockquote>
            <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
              &#8212;Buzz Lightyear
            </figcaption>
          </figure>
        </section>
        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
        <section
          id="contact"
          className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 py-6"
        >
          <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Contact Us
          </h2>
          <form
            action=""
            className="items-left mx-auto flex max-w-4xl flex-col gap-4 text-2xl sm:text-3xl"
          >
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              minLength={3}
              maxLength={60}
              placeholder="Your subject..."
              className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
            />
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="Your message"
              required
              className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
            ></textarea>
            <button className="w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none">
              Submit
            </button>
          </form>
        </section>
      </main>
      <footer
        id="footer"
        className="bg-teal-700 text-xl text-white"
      >
        <section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
          <address>
            <h2>Acme Rocket-Powered Products, Inc.</h2>
            555 Astro Way
            <br />
            Fairfield, New Jersey 12345-5555
            <br />
            Email:{' '}
            <a href="mailto:inquiries@acmerockets.com">
              Inquiries@AcmeRockets.com
            </a>
            <br />
            Phone: <a href="tel:+15555555555">(555) 555-5555</a>
          </address>
          <nav
            className="hidden flex-col gap-2 md:flex"
            aria-label="footer"
          >
            <a
              href="#rockets"
              className="hover:opacity-90"
            >
              Our Rockets
            </a>
            <a
              href="#testimonials"
              className="hover:opacity-90"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="hover:opacity-90"
            >
              Contact Us
            </a>
          </nav>
          <div className="flex flex-col sm:gap-2">
            <p className="text-right">
              Copyright &copy; <span id="year">2023</span>
            </p>
            <p className="text-right">All Rights Reserved</p>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default AcmeRocketsPage
