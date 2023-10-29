import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import PageContent from '/src/app/components/PageContent';

export default function Gallery() {
  return (
    <>
      <Navbar />
      <Title Title="Gallery" />
      <PageContent Content="Default content for the gallery." />
      <Footer />
    </>
  );
}
