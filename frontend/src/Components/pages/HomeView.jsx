import LandingHome from '../LandingHome.jsx';

export default function HomeView({ onHomeSectionNavigate, onNavigate }) {
  return <LandingHome onHomeSectionNavigate={onHomeSectionNavigate} onNavigate={onNavigate} />;
}
