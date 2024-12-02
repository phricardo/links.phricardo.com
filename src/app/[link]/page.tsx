import { notFound, redirect } from "next/navigation";
import { getRedirectUrl } from "../links";

export default async function RedirectPage({
  params,
}: {
  params: { link: string };
}) {
  const { link: linkKey } = await params;
  const redirectUrl = getRedirectUrl(linkKey);

  redirectUrl ? redirect(redirectUrl) : notFound();
}
