import { notFound, redirect } from "next/navigation";
import { getRedirectUrl } from "../links";

export default async function RedirectPage({
  params,
}: {
  params: { link: string };
}) {
  const { link: linkKey } = params;
  const redirectUrl = getRedirectUrl(linkKey);

  if (redirectUrl) {
    redirect(redirectUrl);
  } else {
    notFound();
  }
}
