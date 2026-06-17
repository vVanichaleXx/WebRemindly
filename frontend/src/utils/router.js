export const routes = {
  home: '/',
  roadmap: '/roadmap',
  pricing: '/pricing',
  tutorial: '/tutorial',
};

const routeNames = Object.keys(routes);
const homeSectionIds = ['overview', 'features', 'flow', 'journal', 'cta', 'preview'];

export function normalizeRoute(route) {
  return routeNames.includes(route) ? route : 'home';
}

export function pathForRoute(route) {
  return routes[normalizeRoute(route)];
}

export function routeFromLocation(location = window.location) {
  const pathRoute = routeNames.find((route) => routes[route] === location.pathname);

  if (pathRoute) {
    return pathRoute;
  }

  const hashValue = location.hash.replace(/^#\/?/, '').replace(/^\//, '');
  const hashRoute = normalizeRoute(hashValue);

  if (routeNames.includes(hashValue)) {
    return hashRoute;
  }

  return 'home';
}

export function sectionFromLocation(location = window.location) {
  const hashValue = location.hash.replace(/^#\/?/, '').replace(/^\//, '');
  return homeSectionIds.includes(hashValue) ? hashValue : null;
}

export function isHomeSection(sectionId) {
  return homeSectionIds.includes(sectionId);
}
