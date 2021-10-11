import { useMemo } from "react";
import ReactGA from "react-ga";
import { LocationDescriptor } from "history";
import { useLocation } from "react-router-dom";
import { stringify } from "qs";
import { useActiveLocale, useParsedQueryString } from "hooks/application";
import { SupportedLocale } from "data/constants";

export function useRouteProps(locale: SupportedLocale | null): {
  to?: LocationDescriptor;
  onClick?: () => void;
} {
  const activeLocale = useActiveLocale();
  const qs = useParsedQueryString();
  const location = useLocation();

  return useMemo(
    () =>
      !locale
        ? {}
        : {
            to: {
              ...location,
              search: stringify({ ...qs, lang: locale }),
            },
            onClick: () => {
              ReactGA.event({
                action: "Switch locale",
                category: "localization",
                label: `${activeLocale} --> ${locale} `,
              });
            },
          },
    [activeLocale, location, qs, locale]
  );
}
