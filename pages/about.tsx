import Link from 'next/Link';
import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';
import { ReactElement } from 'react';

export default function about() {
  return (
    <>
      <h1>About</h1>
      <h1 className="title">
        Back to <Link href="/">Home</Link>
      </h1>
    </>
  );
}

about.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
