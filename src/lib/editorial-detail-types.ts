export type EditorialSection = {
  heading: string;
  paragraphs: string[];
};

export type EditorialSource = { label: string; url: string };

export type DetailedEditorial = {
  sections: EditorialSection[];
  sources: EditorialSource[];
};
