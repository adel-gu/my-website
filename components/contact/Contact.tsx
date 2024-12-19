import { contacts } from '@/constants/contacts';
import ContactCard from './ContactCard';

const Contact = () => {
  return (
    <section className="relative space-y-12 px-6 py-24">
      <h4 className="h3-bold md:mx-auto md:max-w-[850px] md:text-center">
        Let&apos;s create something exceptional together! Feel free to reach out
        for collaboration, freelance work, or just to say hi!
      </h4>

      <div className="flex flex-col gap-4 lg:flex-row xl:justify-center ">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            title={contact.title}
            description={contact.description}
            icon={contact.icon}
            path={contact.path}
          />
        ))}
      </div>
    </section>
  );
};
export default Contact;
