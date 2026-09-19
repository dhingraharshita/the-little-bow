export default function ReviewCard({ review }) {
  return (
    <blockquote className="border border-beige bg-cream px-6 py-8">
      <p className="serif text-2xl leading-snug text-ink">&ldquo;{review.quote}&rdquo;</p>
      <footer className="mt-6 text-sm text-ink/70">
        <span className="font-medium tracking-[0.08em] text-burgundy uppercase">{review.name}</span>
        <span className="mx-2 text-gold">·</span>
        <span>{review.occasion}</span>
      </footer>
    </blockquote>
  );
}
