import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
   <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16">
  <div className="mx-auto max-w-3xl">
    <div className="mb-8 text-center sm:mb-10">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
        Get in touch
      </p>

      <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
        Contact Me
      </h1>

      <p className="mt-3 text-sm text-gray-600 sm:text-base">
        Have a question or want to connect? Send me a message.
      </p>
    </div>

    <form
      className="rounded-2xl bg-white p-5 shadow-md sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        alert("Thank you for your message!");
      }}
    >
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-700 sm:text-base"
        >
          Your Name
        </label>

        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          required
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700 sm:text-base"
        >
          Your Email
        </label>

        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-700 sm:text-base"
        >
          Your Message
        </label>

        <textarea
          id="message"
          rows={6}
          placeholder="Write your message..."
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          required
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  </div>
</section>
);
}