export function GET() {
  return new Response(
    '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://drepkovsky.com/</loc></url><url><loc>https://drepkovsky.com/cv</loc></url><url><loc>https://drepkovsky.com/sk/</loc></url><url><loc>https://drepkovsky.com/sk/cv</loc></url></urlset>',
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
}
