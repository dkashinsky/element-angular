export type CatalogItem = {
  type?: string;
  components?: CatalogItem[];
  children?: CatalogItem[];
  name: string;
  link: string | null;
};
