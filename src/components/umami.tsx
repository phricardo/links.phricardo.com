import Script from "next/script";

export const UmamiTracker = () => {
  return (
    <Script
      async
      src="https://umami.phricardo.com/script.js"
      data-website-id="36ae21f3-4bc9-404c-abee-e9cf6f3e5e58"
    />
  );
};
