import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { HubspotProvider } from 'next-hubspot';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <HubspotProvider><Component {...pageProps} /></HubspotProvider>;
};

export default MyApp;
