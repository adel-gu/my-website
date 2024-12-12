import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '../ui/card';
import { Github } from 'lucide-react';

const ContactCard = () => {
  return (
    <Link
      href="https://medium.com/@adeelguitoun/a-quick-guide-to-ruby-on-rails-migrations-with-examples-8b3da8077ed7"
      target="_blank"
    >
      <Card className="bg-background transition-all border-none shadow-2xl hover:-translate-y-0.5 hover:bg-[#1a1a1a4d] ">
        <CardHeader className="pb-2">
          <CardTitle>
            <Github className="text-whiteice w-[60px] h-[60px]" />
          </CardTitle>
          <CardDescription>
            <p className="text-code text-whiteice text-2xl tracking-[0.2em]">
              github
            </p>
          </CardDescription>
        </CardHeader>
        <CardFooter className="text-dovegray30">
          Checkout my latest repos
        </CardFooter>
      </Card>
    </Link>
  );
};
export default ContactCard;
