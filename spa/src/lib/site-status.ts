// Master switch for taking the site offline.
//
// `true`  — every route serves the "Temporarily disabled" page, and the real
//           pages, static assets and OG card all 404. `/aws` stays reachable.
// `false` — the site behaves exactly as it always has.
//
// Flip this one line to bring the site back, then revert public/robots.txt
// (see the note at the top of that file). Nothing else to change.
export const SITE_DISABLED = false;
