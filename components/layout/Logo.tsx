import Link from 'next/link';

const Logo = ({ isLogoFooter = false }: { isLogoFooter?: boolean }) => {
  return (
    <Link
      href="/"
      className={`text-code font-bold uppercase ${
        isLogoFooter ? 'text-3xl' : 'text-2xl'
      }`}
    >
      <span className="text-valencia">a</span>
      <span className="text-supernova">d</span>
      <span className="text-cerise">e</span>
      <span className="text-azureradiance">l</span>
      <span className="text-azureradiance">.</span>
      <span className="text-oceangreen">gu</span>
      <span className="text-roseofsharon">it</span>
      <span className="text-brickred">ou</span>
      <span className="text-tanhide">n</span>
    </Link>
  );
};
export default Logo;
