import { APP_LINKS } from "@/constants/app-links";

export const getWalletLink = () => {
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
  if (/android/i.test(ua)) {
    return APP_LINKS.android;
  }
  if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
    return APP_LINKS.ios;
  }
  if (/Mac/.test(navigator.platform)) {
    return APP_LINKS.ios;
  }
  return APP_LINKS.android;
};
