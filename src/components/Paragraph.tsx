import classNames from "classnames"

// Component: Paragraph.tsx
export default function Paragraph({text, bold}: {text: string, bold?: boolean}) {
  return (
    <p className={classNames("font-rubik text-lg sm:text-xl font-light text-wrap text-left", {"font-normal": bold})}>{text}</p>
  );
}