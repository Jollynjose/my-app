import Head from 'next/head';
import Link from 'next/Link';
import { NavBar } from '../components/NavBar/NavBar';
import Description from '../components/Description';
import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';

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

about.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
