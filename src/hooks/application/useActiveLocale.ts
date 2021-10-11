import { useMemo } from "react";
import { useUserLocale } from "data/user/hooks";
import {
  DEFAULT_LOCALE,
  SupportedLocale,
  SUPPORTED_LOCALES,
} from "data/constants";
import { useParsedQueryString } from "hooks/application";

function parseLocale(cultureCode: unknown): SupportedLocale | undefined {
  if (typeof cultureCode !== "string") return undefined;
  const searchString = cultureCode.toLowerCase();

  return SUPPORTED_LOCALES.find(
    (locale) =>
      locale.toLowerCase() === searchString ||
      locale.split("-")[0] === searchString
  );
}

export function navigatorLocale(): SupportedLocale | undefined {
  if (!navigator.language) return undefined;

  const [language, region] = navigator.language.split("-");

  if (region) {
    return (
      parseLocale(`${language}-${region.toUpperCase()}`) ??
      parseLocale(language)
    );
  }
}

function useUrlLocale() {
  const parsed = useParsedQueryString();
  return parseLocale(parsed.lang);
}

export function useActiveLocale(): SupportedLocale {
  const userLocale = useUserLocale();
  const urlLocale = useUrlLocale();

  return useMemo(
    () => urlLocale ?? userLocale ?? navigatorLocale() ?? DEFAULT_LOCALE,
    [urlLocale, userLocale]
  );
}
