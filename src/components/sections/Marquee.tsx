export function Marquee({ id, items = [] }: { id?: string; items?: { text?: string }[] }) {
  return (
    <div id={id} className="overflow-hidden border-y border-current/10 py-4">
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 px-5 text-sm font-medium uppercase tracking-wider opacity-70">
        {items.map((item, i) => (
          <span key={i}>{item.text}</span>
        ))}
      </div>
    </div>
  );
}
