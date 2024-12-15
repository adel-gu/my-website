import { contacts } from '@/constants/contacts';
import ContactCard from './ContactCard';

const Contact = () => {
  return (
    <section className="py-40 relative border">
      <div className="container pl-44">
        <h4 className="h3-bold">
          Let's build something amazing together! Feel free to reach out for
          collaboration, freelance work, or just to say hi!
        </h4>
      </div>

      <div className="container px-44 mt-16 grid grid-cols-3 gap-4">
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
