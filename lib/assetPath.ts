/**
 * GitHub Pages serves this project site under the /PM/ subpath.
 * Keep BASE_PATH in sync with `basePath` in next.config.ts.
 *
 * next/image (with unoptimized images) and plain <a href> links do NOT get
 * basePath applied automatically, so prefix public-asset paths with this.
 */
export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/PM" : "";

/** Prefix a path to a file in /public with the deploy base path. */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
