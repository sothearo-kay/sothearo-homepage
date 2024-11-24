import { languageColor } from "./languageColor";

interface ILanguageData {
  [key: string]: string;
  percentage: string;
  color: string;
}

export interface IRepository {
  title: string;
  description: string | null;
  language: Record<string, ILanguageData>;
  stars: number;
  forks: number;
  url: string;
}

export async function fetchRepository(
  { key, title }: { key: string; title: string },
  user: string = "hotaroo-dev",
): Promise<IRepository> {
  const [repoData, languageData] = await Promise.all([
    $fetch<RepoResponse>(`https://api.github.com/repos/${user}/${key}`),
    fetchLanguages(key, user),
  ]);

  return {
    title,
    description: repoData.description,
    language: languageData,
    stars: repoData.stargazers_count,
    forks: repoData.forks_count,
    url: repoData.html_url,
  };
}

async function fetchLanguages(
  key: string,
  user: string,
): Promise<Record<string, ILanguageData>> {
  const data = await $fetch<Record<string, number>>(
    `https://api.github.com/repos/${user}/${key}/languages`,
  );

  // The API returns an object where keys are languages and values are byte counts
  const totalBytes = Object.values(data).reduce((acc, bytes) => acc + bytes, 0);

  // Calculate percentage for each language
  return Object.fromEntries(
    Object.entries(data).map(([language, bytes]) => [
      language,
      {
        percentage: ((bytes / totalBytes) * 100).toFixed(1) + "%",
        color: languageColor[language],
      },
    ]),
  );
}

async function $fetch<T>(url: string): Promise<T> {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    next: { revalidate: 60 * 60 }, // revalidate every hour
  }).then((res) => res.json());
}

// optional
interface RepoResponse {
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}
