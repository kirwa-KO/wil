import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const GetPost = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  const res = await data.json();
  return res;
};

export const getServerSideProps = async (ctx) => {
  const siteUrl = "https://jsonplaceholder.typicode.com";
  const data = await GetPost();
  const fields = data?.map((data) => ({
    loc: `${siteUrl}/${data.id}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {
  //console
}