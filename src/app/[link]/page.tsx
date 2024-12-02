import { notFound, redirect } from "next/navigation";
import { getRedirectUrl } from "../links";

interface RedirectPageProps {
  params: Promise<{ link: string }>; 
}

export default async function RedirectPage({ params }: RedirectPageProps) {
  const { link: linkKey } = await params;
  const redirectUrl = getRedirectUrl(linkKey);

  if (redirectUrl) {
    redirect(redirectUrl);
  } else {
    notFound();
  }
}
