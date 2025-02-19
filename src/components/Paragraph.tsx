// Component: Paragraph.tsx
export default function Paragraph({text}: {text: string}) {
  return (
    <p className="font-rubik text-lg sm:text-xl font-light text-wrap text-left">{text}</p>
  );
}