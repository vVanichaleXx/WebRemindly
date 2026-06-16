import LandingHome from '../LandingHome.jsx';
import PageMain from './PageMain.jsx';

export default function AppLayout() {
  return (
    <div className="app-layout">
      <PageMain>
        <LandingHome />
      </PageMain>
    </div>
  );
}
