import { Section, SectionHeading, type Tone } from "@/components/Section";

export function Gallery({ id, tone, title, intro, items = [] }: { id?: string; tone?: Tone; title?: string; intro?: string; layout?: string; items?: { image?: string; caption?: string }[] }) {
  return (
    <Section id={id} tone={tone}>
      <SectionHeading title={title} intro={intro} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <figure key={i} className="overflow-hidden rounded-site">
            {item.image && <img src={item.image} alt={item.caption ?? ""} className="aspect-[4/3] w-full object-cover transition hover:scale-105" />}
            {item.caption && <figcaption className="mt-2 text-sm opacity-70">{item.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </Section>
  );
}
