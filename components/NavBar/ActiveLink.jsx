import Link from 'next/Link';
import { useRouter } from 'next/router';

const style = {
  color: '#0070f3',
  textDecoration: 'underline',
};

export default function ActiveLink({ text, href }) {
  const { asPath } = useRouter();
  const isActive = asPath === href ? style : null;
  return (
    <Link href={href}>
      <a style={isActive}>{text}</a>
    </Link>
  );
}
