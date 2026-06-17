import { useCallback, useEffect, useMemo, useState } from 'react';
import MarketingHeader from '../MarketingHeader.jsx';
import Footer from './Footer.jsx';
import PageMain from './PageMain.jsx';
import HomeView from '../pages/HomeView.jsx';
import PricingView from '../pages/PricingView.jsx';
import RoadmapView from '../pages/RoadmapView.jsx';
import TutorialView from '../pages/TutorialView.jsx';
import {
  isHomeSection,
  normalizeRoute,
  pathForRoute,
  routeFromLocation,
  sectionFromLocation,
} from '../../utils/router.js';
import useScrollReveal from '../../utils/useScrollReveal.js';

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function scrollToSection(sectionId) {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      const target = document.getElementById(sectionId);

      if (!target) {
        return;
      }

      target.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start',
      });
    });
  });
}

function scrollToPageTop() {
  window.requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  });
}

export default function AppLayout() {
  const [route, setRoute] = useState(() => routeFromLocation());
  const [pendingSection, setPendingSection] = useState(() => sectionFromLocation());

  useScrollReveal(route);

  useEffect(() => {
    const syncRouteFromLocation = () => {
      setRoute(routeFromLocation());
      setPendingSection(sectionFromLocation());
    };

    window.addEventListener('popstate', syncRouteFromLocation);
    window.addEventListener('hashchange', syncRouteFromLocation);

    return () => {
      window.removeEventListener('popstate', syncRouteFromLocation);
      window.removeEventListener('hashchange', syncRouteFromLocation);
    };
  }, []);

  useEffect(() => {
    if (route === 'home' && pendingSection) {
      scrollToSection(pendingSection);
      setPendingSection(null);
      return;
    }

    if (!pendingSection) {
      scrollToPageTop();
    }
  }, [pendingSection, route]);

  const navigateToRoute = useCallback((nextRoute) => {
    const normalizedRoute = normalizeRoute(nextRoute);
    const nextPath = pathForRoute(normalizedRoute);

    if (window.location.pathname !== nextPath || window.location.hash) {
      window.history.pushState({}, '', nextPath);
    }

    setPendingSection(null);
    setRoute(normalizedRoute);

    if (normalizedRoute === route) {
      scrollToPageTop();
    }
  }, [route]);

  const navigateToHomeSection = useCallback(
    (sectionId) => {
      if (!isHomeSection(sectionId)) {
        return;
      }

      const nextUrl = `/#${sectionId}`;

      if (window.location.pathname !== '/' || window.location.hash !== `#${sectionId}`) {
        window.history.pushState({}, '', nextUrl);
      }

      setPendingSection(sectionId);
      setRoute('home');

      if (route === 'home') {
        scrollToSection(sectionId);
        setPendingSection(null);
      }
    },
    [route]
  );

  const page = useMemo(() => {
    switch (route) {
    case 'roadmap':
      return <RoadmapView />;
    case 'pricing':
      return <PricingView />;
    case 'tutorial':
      return <TutorialView />;
    default:
      return <HomeView onHomeSectionNavigate={navigateToHomeSection} onNavigate={navigateToRoute} />;
    }
  }, [navigateToHomeSection, navigateToRoute, route]);

  return (
    <div className="app-layout">
      <section className="landing-home" aria-label="Remindly website">
        <MarketingHeader
          currentRoute={route}
          onHomeSectionNavigate={navigateToHomeSection}
          onNavigate={navigateToRoute}
        />
      <PageMain>
          <div key={route} className={`route-view route-view-${route}`}>
            {page}
          </div>
      </PageMain>
        <Footer onHomeSectionNavigate={navigateToHomeSection} onNavigate={navigateToRoute} />
      </section>
    </div>
  );
}
