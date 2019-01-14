import { isNode } from '../config';
import { medium as MEDIUM, large as LARGE } from '../data/layout.json';

export const MEDIUM_MEDIA_QUERY = `(min-width: ${MEDIUM}px)`;
export const LARGE_MEDIA_QUERY = `(min-width: ${LARGE}px)`;

export default {
  get small() {
    return !this.medium;
  },
  get medium() {
    return !isNode && window.matchMedia(MEDIUM_MEDIA_QUERY).matches;
  },
  get large() {
    return !isNode && window.matchMedia(MEDIUM_MEDIA_QUERY).matches;
  },
  get all() {
    return {
      small: this.small,
      medium: this.medium,
      large: this.large
    };
  }
};
