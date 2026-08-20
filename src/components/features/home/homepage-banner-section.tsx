import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

export function HomePageBannerSection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <div className="mx-auto flex min-h-[620px] max-w-6xl flex-col-reverse items-center justify-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:min-h-[560px] md:flex-row md:justify-between md:gap-12 lg:py-20">
        {/* Text */}
        <div className="w-full max-w-2xl text-center text-white md:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100 sm:text-sm">
            Welcome to my portfolio
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Hello, I'm Katrine 👋
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8 md:mx-0">
            Thank you for visiting my first React Application.
            This website shares a little information about me,
            my interests, and how to contact me.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <NavLink to="/about">
              <Button
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Explore More
              </Button>
            </NavLink>

            <NavLink to="/contact">
              <Button
                variant="primary"
                className="w-full bg-white/20 text-white hover:bg-white/30 sm:w-auto"
              >
                Contact Me
              </Button>
            </NavLink>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="shrink-0">
          <div className="rounded-full bg-white/20 p-2 shadow-2xl backdrop-blur-sm sm:p-3">
            <img
              src="/kat.jpg"
              alt="Katrine profile"
              className="h-48 w-48 rounded-full object-cover sm:h-60 sm:w-60 md:h-72 md:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}