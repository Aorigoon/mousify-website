import Image from "next/image";

// The real app screenshot in a black phone frame, shared by Hero and Features.
export default function PhoneShot({
  className = "w-[280px] sm:w-[300px]",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className="w-fit rounded-[2.75rem] border border-black/10 bg-black p-2.5 shadow-3xl">
      <Image
        src="/app-home.png"
        alt="Mousify app — touchpad home screen"
        width={300}
        height={649}
        priority={priority}
        className={`rounded-[2.25rem] ${className}`}
      />
    </div>
  );
}
