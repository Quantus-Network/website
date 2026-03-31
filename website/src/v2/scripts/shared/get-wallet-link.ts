export const getWalletLink = () => {
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
  if (/android/i.test(ua)) {
    return "https://play.google.com/store/apps/details?id=com.quantus.wallet";
  }
  if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
    return "https://apps.apple.com/us/app/quantus/id6747967405";
  }
  if (/Mac/.test(navigator.platform)) {
    return "https://apps.apple.com/us/app/quantus/id6747967405";
  }
  return "https://play.google.com/store/apps/details?id=com.quantus.wallet";
};
