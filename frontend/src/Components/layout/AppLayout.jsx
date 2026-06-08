import IntroScene from '../IntroScene.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import PageMain from './PageMain.jsx';

export default function AppLayout() {
  return (
    <div className="app-layout">
      <Header />
      <PageMain>
        <IntroScene />
      </PageMain>
      <Footer />
    </div>
  );
}
