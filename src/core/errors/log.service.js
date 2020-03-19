import * as Sentry from '@sentry/browser';

export function init() {
  Sentry.init({
    dsn: 'https://3fba349a40c04053adde619c13c2131f@sentry.io/1800472'
  });
}

export function log(error) {
  Sentry.captureException(error);
}
