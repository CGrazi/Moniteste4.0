import { Contact } from "@/components/sections/Contact";
import { Hours } from "@/components/sections/Hours";
import { hoursItems } from "@/content/pages/Contato";
import { site } from "@/content/site";

export default function ContatoPage() {
  return (
    <>
      <title>Contato · Moniteste</title>
      <meta name="description" content="Fale com a sorveteria Moniteste. Encomendas, dúvidas e parcerias." />
      <Contact
        id="contact"
        title="Fale com a gente"
        subtitle="Encomenda, dúvida ou parceria. Respondemos em até um dia útil."
        email={site.contact.email || undefined}
        phone={site.contact.phone || undefined}
        buttonText="Enviar mensagem"
        namePlaceholder="Seu nome"
        emailPlaceholder="Seu e-mail"
        messagePlaceholder="Como podemos ajudar"
        showPhone
        showMap={false}
        mode="message"
      />
      <Hours
        id="hours"
        title="Horários"
        address={site.contact.address || undefined}
        phone={site.contact.phone || undefined}
        items={hoursItems}
      />
    </>
  );
}
