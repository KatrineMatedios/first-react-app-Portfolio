import { Card } from "@/components/ui/card";

export function CardDataSection() {
  const skills = [
    {
      id: 1,
      text: "💻 Web Development",
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: 2,
      text: "🎨 UI Design",
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: 3,
      text: "🚀 Learning",
      color: "bg-pink-100 text-pink-700",
    },
    {
      id: 4,
      text: "📍 Philippines",
      color: "bg-green-100 text-green-700",
    },
  ];

  return (
    <section className="bg-gray-50 px-4 pb-12 sm:px-6 sm:pb-16">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {skills.map((skill) => (
          <Card
            key={skill.id}
            text={skill.text}
            color={skill.color}
          />
        ))}
      </div>
    </section>
  );
}