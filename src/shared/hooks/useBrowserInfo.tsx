import { useState, useEffect } from "react";

interface BrowserInfo {
  isChrome: boolean;
  isFirefox: boolean;
  isSafari: boolean;
  isIE: boolean;
  isEdge: boolean;
  isOpera: boolean;
  isBlink: boolean;
  isMobile: boolean;
}

export const useBrowserInfo = (): { browserInfo: BrowserInfo } => {
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo>({
    isChrome: false,
    isFirefox: false,
    isSafari: false,
    isIE: false,
    isEdge: false,
    isOpera: false,
    isBlink: false,
    isMobile: false,
  });

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /mobile|iphone|ipad|android/i.test(userAgent);

    setBrowserInfo((prevBrowserInfo) => ({
      ...prevBrowserInfo,
      isMobile,
    }));

    if (/chrome/i.test(userAgent)) {
      setBrowserInfo((prevBrowserInfo) => ({
        ...prevBrowserInfo,
        isChrome: true,
        isBlink: true,
      }));
    } else if (/firefox/i.test(userAgent)) {
      setBrowserInfo((prevBrowserInfo) => ({
        ...prevBrowserInfo,
        isFirefox: true,
      }));
    } else if (/safari/i.test(userAgent)) {
      setBrowserInfo((prevBrowserInfo) => ({
        ...prevBrowserInfo,
        isSafari: true,
      }));
    } else if (/msie/i.test(userAgent) || /trident/i.test(userAgent)) {
      setBrowserInfo((prevBrowserInfo) => ({
        ...prevBrowserInfo,
        isIE: true,
      }));
    } else if (/edge/i.test(userAgent)) {
      setBrowserInfo((prevBrowserInfo) => ({
        ...prevBrowserInfo,
        isEdge: true,
      }));
    } else if (/opera|opr/i.test(userAgent)) {
      setBrowserInfo((prevBrowserInfo) => ({
        ...prevBrowserInfo,
        isOpera: true,
        isBlink: true,
      }));
    }
  }, []);

  return { browserInfo };
};
