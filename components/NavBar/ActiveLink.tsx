import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties, FC } from 'react';

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};
interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();
  const isActive = asPath === href ? style : undefined;
  return (
    <Link href={href}>
      <a style={isActive}>{text}</a>
    </Link>
  );
};
