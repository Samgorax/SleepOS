type InsightPageProps = {
  title: string;
  description: string;
  cards?: string[];
};

export function InsightPage({
  title,
  description,
  cards = [],
}: InsightPageProps) {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-5xl font-bold text-white">
        {title}
      </h1>

      <p className="mt-6 text-white/70">
        {description}
      </p>

      {cards.length > 0 && (
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              {card}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
