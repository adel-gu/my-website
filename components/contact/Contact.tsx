import { contacts } from '@/constants/contacts';
import ContactCard from './ContactCard';

const Contact = () => {
  return (
    <section className="py-24 px-6 relative space-y-12">
      <h4 className="h3-bold md:text-center md:max-w-[850px] md:mx-auto">
        Let's create something exceptional together! Feel free to reach out for
        collaboration, freelance work, or just to say hi!
      </h4>

      <div className="flex flex-col lg:flex-row xl:justify-center gap-4 ">
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
