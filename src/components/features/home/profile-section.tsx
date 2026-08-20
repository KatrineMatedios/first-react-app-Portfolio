export function ProfileSection() {
  const profile = {
    name: "Katrine Matedios",
    course: "Bachelor of Science in Information Technology",
    school: "Cordova Public College",
  };

  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
          Get to know me
        </p>

        <h2 className="mb-6 text-3xl font-bold text-gray-800 sm:text-4xl">
          My Profile
        </h2>

        <div className="rounded-2xl bg-white p-5 shadow-md sm:p-8">
          <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Hello! My name is{" "}
            <span className="font-semibold text-gray-800">
              {profile.name}
            </span>
            . I am a{" "}
            <span className="font-semibold text-blue-600">
              {profile.course}
            </span>{" "}
            student at {profile.school}.
          </p>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            I enjoy learning new things, exploring technology,
            meeting new people, and improving my skills.
          </p>
        </div>
      </div>
    </section>
  );
}