import Link from "next/link";

// ButtonComponent.tsx
function ButtonComponent({text, href}: {text: string, href?: string}) {
  return (
    <Link href={href? href: ""}>
      <button type="button" className="w-min h-[50px] bg-green-500 hover:bg-green-600 transition-colors duration-500 rounded-lg px-[20px] flex justify-center items-center text-nowrap text-white font-rubik">{text}</button>
    </Link>
  );
}
export default ButtonComponent;