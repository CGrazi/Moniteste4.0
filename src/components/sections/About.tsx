import { ButtonLink } from "@/components/ui/button";
import { Section, type Tone } from "@/components/Section";
import { cn } from "@/lib/utils";

export function About({ id, tone, eyebrow, title, text, image, imageSide = "right", bullets = [], buttonText, buttonUrl }: { id?: string; tone?: Tone; eyebrow?: string; title?: string; text?: string; image?: string; imageSide?: "left" | "right"; bullets?: { text?: string }[]; buttonText?: string; buttonUrl?: string }) {
  return (
    <Section id={id} tone={tone}>
      <div className={cn("grid items-center gap-12", image && "lg:grid-cols-2")}>
        <div className={cn(image && imageSide === "left" && "lg:order-2")}>
          {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>}
          {title && <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>}
          {text && text.split(/\n{2,}/).map((p, i) => <p key={i} className="mt-5 text-lg opacity-80">{p}</p>)}
          {bullets.length > 0 && (
            <ul className="mt-6 space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
          )}
          {buttonText && <ButtonLink href={buttonUrl} className="mt-8">{buttonText}</ButtonLink>}
        </div>
        {image && <img src={image} alt="" className="aspect-[4/3] w-full rounded-site object-cover" />}
      </div>
    </Section>
  );
}
