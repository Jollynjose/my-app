import Link from 'next/Link';
import { MainLayout } from '../components/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      {' '}
      <h1>Home</h1>
      <h1 className="title">
        Go to <Link href="/about">About</Link>
      </h1>
    </MainLayout>
  );
}
