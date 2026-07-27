export default function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-forest/10 bg-white/60 p-6 transition-colors hover:border-forest/30">
      <h3 className="mb-2 font-serif text-lg font-semibold text-forest">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-charcoal/80">
        {description}
      </p>
    </div>
  );
}
