import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const ArticleCard = () => {
  return (
    <Link
      href="https://medium.com/@adeelguitoun/a-quick-guide-to-ruby-on-rails-migrations-with-examples-8b3da8077ed7"
      target="_blank"
    >
      <Card className="bg-background transition-all border-none shadow-2xl hover:-translate-y-0.5 hover:bg-[#1a1a1a4d]">
        <CardHeader>
          <CardTitle className="text-white">
            A Quick Guide to Ruby on Rails Migrations with examples!!
          </CardTitle>
          <CardDescription>
            How to set up a Rails app with PostgreSQL, create and configure
            migrations to define and modify database tables, and manage
            relationships between them. The tutorial emphasizes Rails'
            conventions, automatic features, and how to handle schema changes
            effectively.
          </CardDescription>
        </CardHeader>
        <CardFooter className="text-dovegray30">
          6 min read · Jan 24, 2023
        </CardFooter>
      </Card>
    </Link>
  );
};
export default ArticleCard;
