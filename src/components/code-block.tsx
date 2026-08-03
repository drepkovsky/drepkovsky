import { Fragment } from "react";

/**
 * Small TypeScript highlighter for the snippets on this site.
 *
 * Deliberately not shiki: there is one snippet, and a real grammar would ship
 * a theme in hex that then has to be kept in sync with the oklch tokens by
 * hand. This paints from the same five design roles, so it follows the theme
 * toggle for free. If /writing ever carries real code posts, swap it then.
 */

const KEYWORDS = new Set([
  "import",
  "export",
  "const",
  "let",
  "from",
  "return",
  "async",
  "await",
  "function",
  "type",
  "interface",
  "new",
  "default",
]);

/** Comments and strings must match before anything else can look inside them. */
const TOKEN = new RegExp(
  [
    "(\\/\\/[^\\n]*)", // 1 comment
    "(\"[^\"]*\"|'[^']*'|`[^`]*`)", // 2 string
    "(\\b\\d+(?:\\.\\d+)?\\b)", // 3 number
    "([A-Za-z_$][\\w$]*)", // 4 word
  ].join("|"),
  "g",
);

function classFor(
  comment?: string,
  string?: string,
  num?: string,
  word?: string,
  nextChar?: string,
) {
  if (comment) return "text-muted";
  if (string) return "text-fg/70";
  if (num) return "text-accent";
  if (word && KEYWORDS.has(word)) return "text-accent";
  // A word followed by "(" is being called — the useful thing to pick out of
  // a builder chain like .text(255).required().
  if (word && nextChar === "(") return "text-fg";
  return "text-muted";
}

function Line({ text }: { text: string }) {
  if (!text.trim()) return <>&nbsp;</>;

  const parts: React.ReactNode[] = [];
  let last = 0;
  TOKEN.lastIndex = 0;

  for (let m = TOKEN.exec(text); m; m = TOKEN.exec(text)) {
    if (m.index > last) {
      parts.push(
        <span key={`p${last}`} className="text-muted">
          {text.slice(last, m.index)}
        </span>,
      );
    }
    const [raw, comment, string, num, word] = m;
    parts.push(
      <span
        key={m.index}
        className={classFor(
          comment,
          string,
          num,
          word,
          text[m.index + raw.length],
        )}
      >
        {raw}
      </span>,
    );
    last = m.index + raw.length;
  }

  if (last < text.length) {
    parts.push(
      <span key={`p${last}`} className="text-muted">
        {text.slice(last)}
      </span>,
    );
  }

  return <>{parts}</>;
}

export function CodeBlock({
  code,
  className = "",
}: {
  code: string;
  className?: string;
}) {
  const lines = code.replace(/^\n|\n$/g, "").split("\n");

  return (
    <pre
      className={`overflow-x-auto surface rounded-surface border border-line bg-[color-mix(in_oklab,var(--color-bg)_78%,transparent)] p-5 backdrop-blur-[6px] font-mono text-xs leading-[1.85] ${className}`}
    >
      <code>
        {lines.map((line, i) => (
          <Fragment key={i}>
            <Line text={line} />
            {i < lines.length - 1 && "\n"}
          </Fragment>
        ))}
      </code>
    </pre>
  );
}
