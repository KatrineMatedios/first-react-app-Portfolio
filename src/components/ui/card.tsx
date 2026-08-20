

type CardProps = {
  text: string;
  color: string;
};

export function Card({ text, color }: CardProps) {
  return (
    <div
      className={`rounded-2xl p-5 text-center text-base font-semibold shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 sm:text-lg ${color}`}
    >
      {text}
    </div>
  );
}