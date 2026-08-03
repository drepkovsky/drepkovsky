import Image from "next/image";

/**
 * The real counterpart of the mockup's <image-slot>. With a `src` it renders
 * the picture; without one it renders a labelled frame, so a missing asset is
 * visible as a gap to fill rather than a broken image or a silent blank.
 */
export function ImageSlot({
  src,
  logo,
  alt,
  label,
  ratio = "4/3",
  priority = false,
  className = "",
}: {
  src?: string;
  /** Shown when there is no screenshot. */
  logo?: string;
  alt?: string;
  label: string;
  ratio?: string;
  priority?: boolean;
  className?: string;
}) {
  // No screenshot yet: show the project's own mark on a plain surface. A
  // deliberate placeholder reads as a design decision; an empty dashed box
  // reads as an unfinished page.
  if (!src) {
    return (
      <div
        style={{ aspectRatio: ratio }}
        className={`surface relative flex w-full flex-col items-center justify-center gap-4 rounded-surface border border-line bg-soft p-6 ${className}`}
      >
        {logo ? (
          <Image
            src={logo}
            alt={alt ?? label}
            width={240}
            height={96}
            // Height-constrained, width free: a square mark and a wide
            // logotype both end up optically the same size.
            className="h-12 w-auto max-w-[62%] object-contain sm:h-14"
          />
        ) : null}
        <span className="text-center font-mono text-[11px] leading-relaxed tracking-[0.1em] text-muted uppercase">
          {label}
        </span>
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
