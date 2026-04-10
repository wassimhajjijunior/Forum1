export const HOME_SECTION_ID = 0;
export const HIGHLIGHTS_SECTION_ID = 1;
export const GALLERY_SECTION_ID = 2;
export const TEASER_SECTION_ID = 3;
export const SPEAKERS_SECTION_ID = 4;
export const WORKSHOPS_SECTION_ID = 5;

export const SPONSOR_SECTION_START = 6;
export const SPONSOR_SECTION_COUNT = 14;
export const SPONSOR_SECTION_END =
  SPONSOR_SECTION_START + SPONSOR_SECTION_COUNT - 1;

export const MAX_SECTIONS = SPONSOR_SECTION_END + 1;

export const SPONSOR_SECTION_IDS = Array.from(
  { length: SPONSOR_SECTION_COUNT },
  (_, index) => SPONSOR_SECTION_START + index,
);
