import Image from "next/image";

/**
 * The real counterpart of the mockup's <image-slot>. With a `src` it renders
 * the picture; without one it renders a labelled frame, so a missing asset is
 * visible as a gap to fill rather than a broken image or a silent blank.
 */
export function ImageSlot({
  src,
  alt,
  label,
  ratio = "4/3",
  priority = false,
  className = "",
}: {
  src?: string;
  alt?: string;
  label: string;
  ratio?: string;
  priority?: boolean;
  className?: string;
}) {
  if (!src) {
    return (
      <div
        style={{ aspectRatio: ratio }}
        className={`flex w-full items-center justify-center surface rounded-surface border border-dashed border-line bg-soft p-4 text-center font-mono text-[11px] leading-relaxed tracking-[0.1em] text-muted uppercase ${className}`}
      >
        {label}
      </div>
    );
  }

  return (
    <div
      style={{ aspectRatio: ratio }}
      className={`relative w-full overflow-hidden surface rounded-surface border border-line bg-soft ${className}`}
    >
      <Image
        src={src}
        alt={alt ?? label}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 40vw"
        className="object-cover"
      />
    </div>
  );
}
