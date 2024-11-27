import * as Icons from "@/app/components/icons";
import { ExternalLink } from "./external-link";
import { Paragraph } from "./paragraph";
import { CardTitle } from "./card-title";
import { IRepository } from "@/app/utils/fetch";

interface RepoCardProps {
  repository: IRepository;
}

export const RepoCard: React.FC<RepoCardProps> = ({ repository }) => {
  const languages = Object.entries(repository.language);

  return (
    <ExternalLink href={repository.url} className="flex">
      <div className="flex-1 rounded-lg border border-common-border p-4 transition-[background-color,border-color] duration-[.15s,.5s] hover:bg-common-bg">
        <div className="flex-between">
          <CardTitle>{repository.title}</CardTitle>

          <div className="flex items-center gap-4 text-common-text">
            <div className="flex items-center gap-1">
              <Icons.Star className="h-4 w-4" />
              <span className="text-sm">{repository.stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icons.RepoForked className="h-4 w-4" />
              <span className="text-sm">{repository.forks}</span>
            </div>
          </div>
        </div>

        <Paragraph className="my-2.5 text-sm text-common-text">
          {repository.description}
        </Paragraph>

        {languages.length > 0 && (
          <div className="space-y-2">
            <p className="font-mplus text-sm font-bold">Languages</p>

            <div className="flex h-2 overflow-hidden rounded">
              {languages.map(([language, data]) => (
                <span
                  key={`color-${language}`}
                  style={{
                    backgroundColor: data.color,
                    width: data.percentage,
                  }}
                ></span>
              ))}
            </div>

            <ul className="flex flex-wrap gap-x-4 gap-y-1 px-2">
              {Object.entries(repository.language).map(([language, data]) => (
                <li
                  key={language}
                  className="flex items-center gap-2.5 text-xs"
                >
                  <span
                    className="block aspect-square w-2 rounded-full"
                    style={{ backgroundColor: data.color }}
                  ></span>
                  <span className="font-semibold">{language}</span>
                  <span className="text-common-text">{data.percentage}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ExternalLink>
  );
};
