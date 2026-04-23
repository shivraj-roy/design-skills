import { useCachedPromise } from "@raycast/utils";
import { fetchDesignSlugs } from "../utils/github";
import { lookupCatalog } from "../utils/catalog";
import { DesignSkill, getGithubUrl, getRawDesignMdUrl, getSiteUrl } from "../shared";

export function useDesigns() {
  return useCachedPromise(
    async (): Promise<DesignSkill[]> => {
      const slugs = await fetchDesignSlugs();
      return slugs
        .map((slug): DesignSkill => {
          const entry = lookupCatalog(slug);
          return {
            slug,
            name: entry.name,
            category: entry.category,
            description: entry.description,
            designMdUrl: getRawDesignMdUrl(slug),
            githubUrl: getGithubUrl(slug),
            siteUrl: getSiteUrl(slug),
          };
        })
        .sort((a, b) => a.name.localeCompare(b.name));
    },
    [],
    { initialData: [] as DesignSkill[], keepPreviousData: true },
  );
}
