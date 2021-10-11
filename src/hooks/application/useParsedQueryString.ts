import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { parse } from "qs";

export function parsedQueryString(search?: string) {
  if (!search) {
    const hash = window.location.hash;
    search = hash.substr(hash.indexOf("?"));
  }

  return search && search.length > 1
    ? parse(search, { parseArrays: false, ignoreQueryPrefix: true })
    : {};
}

export default function useParsedQueryString() {
  const { search } = useLocation();

  return useMemo(() => parsedQueryString(search), [search]);
}
