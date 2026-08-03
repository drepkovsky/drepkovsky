import { Button } from "@/components/ui";
import { work } from "@/content/work";

export default function NotFound() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-[720px] flex-col gap-6 px-5 py-24 sm:px-8 sm:py-32">
      <div className="eyebrow">Error 404</div>
      <h1 className="text-[clamp(34px,6vw,64px)] font-semibold leading-[1.03]">
        That page does not exist.
      </h1>
      <p className="max-w-[52ch] text-base leading-[1.65] text-muted text-pretty">
        Either the link is wrong or I moved something and did not redirect it.
        The second one is my fault — the record and the bio are both one click
        away.
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <Button href="/">Home</Button>
        <Button href="/work" variant="outline">
          All {work.length} projects
        </Button>
        <Button href="/about" variant="outline">
          About
        </Button>
      </div>
    </main>
  );
}
