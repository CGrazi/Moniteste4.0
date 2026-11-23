import { SmartLink } from "@/components/SmartLink";
import { site, type FooterLink } from "@/content/site";
import { cn } from "@/lib/utils";

const LINK = "underline-offset-4 transition-opacity hover:underline hover:opacity-100 focus-visible:underline";
/** The brand column, then one per link column (Tailwind needs each layout spelled out); more columns wrap. */
const GRID: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-[1.5fr_1fr]",
  3: "md:grid-cols-[1.5fr_repeat(2,1fr)]",
  4: "md:grid-cols-[1.5fr_repeat(3,1fr)]",
  5: "md:grid-cols-[1.5fr_repeat(4,1fr)]",
};
/** The number a template ships with until the customer gives theirs: never a link. */
const SAMPLE_WHATSAPP = "5511900000000";

/** One address however it is written: "/sobre/", "#sobre" and "/#sobre" are the same place. */
const same = (url: string) => url.trim().replace(/^\/?#/, "/#").replace(/(.)\/+(?=$|[?#])/, "$1").toLowerCase();
/** A link that goes somewhere (a menu item that only opens its sub-menu doesn't). */
const real = (url: string | undefined): url is string => Boolean(url && url.trim() && url.trim() !== "#" && url.trim() !== "/#");

/** The footer's link columns, with every page of the menu (sub-menus too) in them: a page the footer forgets joins the first one. */
function footerColumns(): { title: string; links: FooterLink[] }[] {
  const given = site.footer.columns.length ? site.footer.columns : site.footer.links.length ? [{ title: "", links: site.footer.links }] : [];
  const listed = new Set(given.flatMap((c) => c.links.map((l) => same(l.url))));
  const missing: FooterLink[] = [];
  for (const item of site.navigation.flatMap((n) => [n, ...(n.children ?? [])])) {
    if (!real(item.href) || listed.has(same(item.href))) continue;
    listed.add(same(item.href));
    missing.push({ label: item.label, url: item.href });
  }
  if (!missing.length) return given;
  if (!given.length) return [{ title: "", links: missing }];
  return [{ ...given[0], links: [...missing, ...given[0].links] }, ...given.slice(1)];
}

export default function Footer() {
  const social = site.footer.showSocial ? Object.entries(site.social).filter(([, url]) => Boolean(url)) : [];
  const centered = site.footer.variant === "centered";
  const columns = footerColumns();
  const digits = site.contact.whatsapp.replace(/\D/g, "");
  const whatsapp = digits === SAMPLE_WHATSAPP ? "" : digits;
  return (
    <footer className="border-t border-current/10">
      <div className={cn("mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8", GRID[Math.min(columns.length + 1, 5)], centered && "text-center")}>
        <div className={cn(centered && "flex flex-col items-center")}>
          <p className="font-heading text-lg font-semibold">{site.name}</p>
          {site.footer.tagline && <p className="mt-3 max-w-sm opacity-70">{site.footer.tagline}</p>}
          <ul className="mt-4 space-y-1 text-sm opacity-80">
            {site.contact.phone && <li><a className={LINK} href={"tel:" + site.contact.phone.replace(/[^+\d]/g, "")}>{site.contact.phone}</a></li>}
            {whatsapp && <li><a className={LINK} href={"https://wa.me/" + whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>}
            {site.contact.email && <li><a className={LINK} href={"mailto:" + site.contact.email}>{site.contact.email}</a></li>}
            {site.contact.address && <li>{site.contact.address}</li>}
          </ul>
          {social.length > 0 && (
            <div className={cn("mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm opacity-80", centered && "justify-center")}>
              {social.map(([network, url]) => (
                <a key={network} href={url} target="_blank" rel="noopener noreferrer" className={cn("capitalize", LINK)}>
                  {network}
                </a>
              ))}
            </div>
          )}
        </div>
        {columns.map((column, i) => (
          <div key={column.title + i}>
            {column.title && <p className="text-sm font-semibold">{column.title}</p>}
            <ul className={cn("space-y-2 text-sm opacity-80", column.title && "mt-3")}>
              {column.links.map((link) => (
                <li key={link.label + link.url}>
                  <SmartLink href={link.url} className={LINK}>
                    {link.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-current/10">
        <p className={cn("mx-auto max-w-6xl px-5 py-6 text-sm opacity-70 sm:px-8", centered && "text-center")}>
          {site.footer.bottomText || "© " + new Date().getFullYear() + " " + site.name}
        </p>
      </div>
    </footer>
  );
}
