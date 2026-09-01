import { describe, expect, mock, test } from "bun:test";
import { trackEvent } from "./analytics";

type GtagMock = ReturnType<typeof mock>;

function installBrowser(consent: string | null): GtagMock {
  const gtag = mock(() => {});
  const store = new Map<string, string>();
  if (consent !== null) {
    store.set("cookie-consent", consent);
  }

  const localStorageMock = {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => {
      store.set(key, value);
    },
    removeItem: (key: string) => {
      store.delete(key);
    },
  };

  Object.assign(globalThis, {
    window: {
      gtag,
      location: { pathname: "/" },
      localStorage: localStorageMock,
    },
    document: { documentElement: { lang: "en-US" } },
    localStorage: localStorageMock,
  });

  return gtag;
}

describe("trackEvent", () => {
  test("sends the event when cookie-consent has never been set", () => {
    const gtag = installBrowser(null);

    trackEvent("generate_lead", { method: "newsletter" });

    expect(gtag).toHaveBeenCalledTimes(1);
    expect(gtag.mock.calls[0]).toEqual([
      "event",
      "generate_lead",
      {
        language_code: "en-US",
        page_type: "home",
        method: "newsletter",
      },
    ]);
  });

  test("sends the event when cookie-consent was previously declined", () => {
    const gtag = installBrowser("false");

    trackEvent("download", { file: "wallet" });

    expect(gtag).toHaveBeenCalledTimes(1);
  });

  test("does not send when gtag is missing", () => {
    const gtag = installBrowser(null);
    delete (window as { gtag?: GtagMock }).gtag;

    trackEvent("generate_lead");

    expect(gtag).not.toHaveBeenCalled();
  });
});
