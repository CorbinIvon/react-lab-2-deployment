import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import PageContent from '/src/app/components/PageContent';

export default function Home() {
  return (
    <>
      <Navbar />
      <Title Title="Home" />
      <PageContent Content="Some content is here. :)" />
      <PageContent />
      <Footer />
    </>
  );
}
