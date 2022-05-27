import { MainLayout } from '../../components/layouts/MainLayout';
import Link from 'next/link';

export default function Pricing() {
  return (
    <MainLayout>
      {' '}
      <h1>Pricing</h1>
      <h1 className="title">
        Go to <Link href="/about">About</Link>
      </h1>
    </MainLayout>
  );
}
