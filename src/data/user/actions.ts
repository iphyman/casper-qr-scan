import { createAction } from "@reduxjs/toolkit";
import { SupportedLocale } from "../constants";

export const updateUserDarkMode = createAction<{ userDarkMode: boolean }>(
  "user/updateUserDarkMode"
);
export const updateUserLocale = createAction<{ userLocale: SupportedLocale }>(
  "user/updateUserLocale"
);
export const updateUserPubKey = createAction<{ userPubKey: string }>(
  "user/updateUserPubKey"
);
export const updateValidatorPubKey = createAction<{
  validatorPubKey: string;
}>("user/updateValidatorPubKey");

export const updateTransactionAmount = createAction<{
  transactionAmount: string;
}>("user/updateTransactionAmount");
export const updateTransactionId = createAction<{ transactionId: string }>(
  "user/updateTransactionId"
);
export const updateReceipientPubKey = createAction<{
  receipientPubKey: string;
}>("user/updateReceipientPubKey");
