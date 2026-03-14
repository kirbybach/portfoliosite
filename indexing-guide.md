# Google Search Console (GSC) Registration Guide

Now that the SEO files are in place, follow these steps to get your site indexed.

## 1. Verify Ownership
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property**.
3. Select **URL prefix** and enter `https://kirbybach.com/`.
4. Choose the **HTML tag** verification method.
5. Copy the `<meta>` tag provided by Google.
6. Paste it into your `index.html` file in the `<head>` section (I can do this for you if you share the tag).
7. Deploy the changes to your site.
8. Go back to GSC and click **Verify**.

## 2. Submit Your Sitemap
1. In the GSC sidebar, go to **Sitemaps**.
2. Under "Add a new sitemap", type `sitemap.xml`.
3. Click **Submit**.
4. Google will now crawl your sitemap and index your pages.

## 3. Manual Indexing (Optional but Faster)
1. Use the search bar at the top of GSC to "Inspect any URL in 'https://kirbybach.com/'".
2. Paste `https://kirbybach.com/` and press Enter.
3. If it says "URL is not on Google", click **Request Indexing**.

## Useful Tools
- [Google Search Console Help](https://support.google.com/webmasters/answer/9128668)
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
