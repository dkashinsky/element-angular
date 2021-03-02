export type CatalogItem = {
  type?: string;
  components?: CatalogItem[];
  children?: CatalogItem[];
  name: string;
  link: string | null;
};

export type ComponentDocument = {
  name: string;
  attrs: ComponentAttribute[];
};

export type ComponentAttribute = {
  name: string;
  notes: string;
  type: string;
  enum: string | null;
  default: string | null;
}
