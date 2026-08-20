export function AboutSection() {
  const information = [
    {
      id: 1,
      title: "My Interests",
      description:
        "I am interested in web development, technology, learning new skills, and creating useful websites.",
      icon: "💖",
    },
    {
      id: 2,
      title: "My Hobbies",
      description:
        "I enjoy listening to music, watching movies, spending time with family and friends, and exploring new places.",
      icon: "🎵",
    },
    {
      id: 3,
      title: "My Goal",
      description:
        "My goal is to become a successful IT professional, continue learning, and build useful and creative applications.",
      icon: "🎯",
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16">
  <div className="mx-auto max-w-5xl">
    <div className="mb-8 text-center sm:mb-10">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
        About Me
      </p>

      <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
        Get to Know Me
      </h1>
    </div>

    <div className="rounded-2xl bg-white p-5 shadow-md sm:p-8">
      <p className="text-center text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
        Hello! My name is{" "}
        <span className="font-semibold text-gray-800">
          Katrine Matedios
        </span>
        . I am a Bachelor of Science in Information Technology
        student. I enjoy learning new things, meeting new people,
        and improving my technical skills.
      </p>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
        {information.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-gray-100 bg-gradient-to-br from-blue-50 to-purple-50 p-5 text-center sm:p-6"
          >
            <div className="mb-3 text-3xl">
              {item.icon}
            </div>

            <h2 className="mb-3 text-lg font-bold text-gray-800 sm:text-xl">
              {item.title}
            </h2>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
);
}