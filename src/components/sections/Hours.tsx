import { Section, SectionHeading, type Tone } from "@/components/Section";

/** A bare "maps.google.com" (a template's sample) or no link: the map of the address itself. */
function mapLink(mapUrl?: string, address?: string): string {
  const url = (mapUrl || "").trim();
  if (url && !/^https?:\/\/(www\.)?(maps\.google\.[a-z.]+|google\.[a-z.]+\/maps)\/?$/i.test(url)) return url;
  return address ? "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address) : "";
}

export function Hours({ id, tone, title, address, phone, note, mapUrl, mapText, items = [] }: { id?: string; tone?: Tone; title?: string; address?: string; phone?: string; note?: string; mapUrl?: string; mapText?: string; items?: { day?: string; hours?: string }[] }) {
  const map = mapLink(mapUrl, address);
  return (
    <Section id={id} tone={tone}>
      <SectionHeading title={title} />
      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
        <dl className="divide-y divide-current/10">
          {items.map((item, i) => (
            <div key={i} className="flex justify-between py-3">
              <dt>{item.day}</dt>
              <dd className="font-medium">{item.hours}</dd>
            </div>
          ))}
        </dl>
        <div className="space-y-2">
          {address && <p>{address}</p>}
          {phone && <p><a href={"tel:" + phone.replace(/[^+\d]/g, "")}>{phone}</a></p>}
          {note && <p className="text-sm opacity-70">{note}</p>}
          {map && (
            <a href={map} target="_blank" rel="noopener noreferrer" className="inline-block font-medium text-primary">
              {mapText || "Como chegar"}
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}
