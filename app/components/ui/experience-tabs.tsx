"use client";

import Link from "next/link";
import Image from "next/image";
import * as Icons from "@/app/components/icons";
import { BaseTabs } from "@/app/components/common/base-tabs";
import { experiences } from "@/app/d/experiences";

type contentType = (typeof experiences)[number]["content"];

export const ExperienceTabs: React.FC = () => {
  return (
    <BaseTabs tabItems={experiences}>
      {(content) => <TabContent content={content} />}
    </BaseTabs>
  );
};

function TabContent({ content }: { content: contentType }) {
  return (
    <div className="divide-y divide-dashed divide-common-border rounded-lg border border-common-border py-4 pb-0 transition-[border-color] duration-500 [&>*]:transition-[border-color] [&>*]:duration-500">
      {content.map((experience, idx) => (
        <div key={idx} className="group relative ml-9 pr-4">
          <div className="absolute -translate-x-1/2 rounded-full border-2 border-white bg-white group-[&:not(:first-child)]:mt-4">
            <Image
              src={experience.logo}
              alt={experience.organization}
              width={40}
              height={40}
              className="aspect-square"
            />
          </div>

          {/* prettier-ignore */}
          <div className="border-l border-common-border py-4 pl-10 group-first:pt-0 [&>*:last-child]:mb-0 transition-[border-color] duration-500">
            <time className="text-sm text-common-text">
              {experience.duration}
            </time>
            <h2 className="font-bold">{experience.organization}</h2>
            <p className="text-common-text">
              {experience.position}
            </p>

            {"highlights" in experience && experience.highlights!.length > 0 && (
              <ul className="my-1 list-inside list-disc">
                {experience.highlights!.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            )}

            {"links" in experience && experience.links!.length > 0 && (
              <ul className="my-2 flex flex-wrap gap-2">
                {experience.links!.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link gap-2 rounded-md bg-panel-link-background px-2 py-0.5 text-background transition-[color,background-color] duration-[.15s,.5s] flex-center hover:text-panel-link-hover"
                    >
                      <span>{link.label}</span>
                      <Icons.ArrowRightUp className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
