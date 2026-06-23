

type CalculatorPanelProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
};

export function CalculatorPanel({
  eyebrow,
  title,
  description,
  bullets,
}: CalculatorPanelProps) {
  return (
    <div className="container mx-auto py-20">
      <p className="text-sm uppercase tracking-widest text-cyan-400">
        {eyebrow}
      </p>

      <h1 className="mt-4 text-5xl font-bold text-white">
        {title}
      </h1>

      <p className="mt-6 text-white/70">
        {description}
      </p>

      {bullets && (
        <ul className="mt-6 space-y-2">
          {bullets.map((item) => (
            <li key={item} className="text-white/70">
              • {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}