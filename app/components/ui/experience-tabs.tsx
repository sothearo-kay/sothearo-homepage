"use client";

import { BaseTabs } from "@/components/common/base-tabs";

export const ExperienceTabs: React.FC = () => {
  return (
    <BaseTabs tabItems={tabItems}>
      {(content) => <TabContent content={content} />}
    </BaseTabs>
  );
};

type contentType = (typeof tabItems)[number]["content"];

function TabContent({ content }: { content: contentType }) {
  return (
    <div className="border border-gray-300 dark:border-gray-700">{content}</div>
  );
}

const tabItems = [
  { name: "Work", content: "tab 1 content" },
  { name: "Education", content: "tab 2 content" },
];
