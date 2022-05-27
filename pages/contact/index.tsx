import Head from 'next/head';
import Link from 'next/Link';
import { NavBar } from '../../components/NavBar/NavBar';
import Description from '../../components/Description';
import { MainLayout } from '../../components/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <h1>Contacts</h1>
      <h1 className="title">
        Back to <Link href="/">Home</Link>
      </h1>
    </MainLayout>
  );
}
