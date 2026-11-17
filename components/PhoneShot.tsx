import Image from "next/image";

// Real iPhone-style frame (own CSS): Dynamic Island, thin black bezel,
// rounded corners, side buttons, soft shadow. Shared by Hero and Features.
export default function PhoneShot({
  src = "/app-home.png",
  alt = "Mousify app — touchpad home screen",
  className = "w-[280px] sm:w-[300px]",
  priority = false,
  video,
}: {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  // When set, a looping muted video plays inside the frame instead of the
  // image; src is used as the poster.
  video?: string;
}) {
  return (
    <div className="relative w-fit">
      {/* Side buttons: left mute + 2 volume, right power. */}
      <div
        aria-hidden
        className="absolute top-[104px] -left-[2.5px] h-7 w-[3px] rounded-l-md bg-neutral-800"
      />
      <div
        aria-hidden
        className="absolute top-[144px] -left-[2.5px] h-12 w-[3px] rounded-l-md bg-neutral-800"
      />
      <div
        aria-hidden
        className="absolute top-[200px] -left-[2.5px] h-12 w-[3px] rounded-l-md bg-neutral-800"
      />
      <div
        aria-hidden
        className="absolute top-[164px] -right-[2.5px] h-16 w-[3px] rounded-r-md bg-neutral-800"
      />
      <div className="relative rounded-[55px] border border-black/10 bg-black p-2.5 shadow-3xl">
        {video ? (
          <video
            src={video}
            poster={src}
            autoPlay
            muted
            loop
            playsInline
            width={300}
            height={649}
            aria-label={alt}
            className={`rounded-[45px] object-cover ${className}`}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={300}
            height={649}
            priority={priority}
            className={`rounded-[45px] ${className}`}
          />
        )}
        {/* Dynamic Island, overlapping the top of the screen. */}
        <div
          aria-hidden
          className="absolute top-3 left-1/2 aspect-[100/26] w-[34%] -translate-x-1/2 rounded-full bg-black"
        />
      </div>
    </div>
  );
}
