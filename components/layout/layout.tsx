import Head from "next/head";
import { Footer } from ".";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Head>
        <title>용돈 계산기</title>
      </Head>
      {children}
      <Footer />
    </div>
  );
};
