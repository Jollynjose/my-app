import { useRouter } from 'next/router';

export default function Description() {
  const { pathname } = useRouter();
  const path = pathname === '/' ? '/index' : pathname;
  return (
    <p className="Description">
      Get started editing <code className="code">pages{path}.tsx</code>
    </p>
  );
}
