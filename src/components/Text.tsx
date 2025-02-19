// Component: Text.tsx
export default function Text({text}: {text: string}) {
  return (
    <p className="font-rubik text-base font-light text-wrap text-left">{text}</p>
  );
}