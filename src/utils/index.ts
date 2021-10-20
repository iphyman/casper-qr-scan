export function isValidPubkey(pubkey: string) {
  // eslint-disable-next-line
  const regex = RegExp(`^(?!\s)[a-z0-9]{66}`);

  return regex.test(pubkey);
}

export function shortenPubkey(pubkey: string) {
  if (!pubkey) return;
  pubkey = pubkey.toUpperCase();
  return `${pubkey.substring(0, 5)}...${pubkey.substring(pubkey.length - 5)}`;
}

export function motesToCSPR(motes: number) {
  return motes / 1000000000;
}
