import { IconProps } from ".";

export const RepoForked: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0M5 3.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m6.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m-3 8.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"
      />
    </svg>
  );
};
