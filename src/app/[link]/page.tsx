import { notFound, redirect } from "next/navigation";
import { getRedirectUrl } from "../links";

interface RedirectPageProps {
  params: { link: string }; 
}

export default async function RedirectPage({ params }: RedirectPageProps) {
  const { link: linkKey } = params;
  const redirectUrl = getRedirectUrl(linkKey);

  if (redirectUrl) {
    redirect(redirectUrl);
  } else {
    notFound();
  }
}
