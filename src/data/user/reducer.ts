import { createReducer } from "@reduxjs/toolkit";
import { SupportedLocale } from "data/constants";
import {
  updateUserDarkMode,
  updateUserLocale,
  updateUserPubKey,
  updateValidatorPubKey,
  updateTransactionAmount,
  updateTransactionId,
  updateReceipientPubKey,
} from "./actions";

interface UserState {
  userDarkMode: boolean;
  userLocale: SupportedLocale | null;
  userPubKey: string;
  validatorPubKey: string;
  transactionAmount: string;
  transactionId: string;
  receipientPubKey: string;
}

const initialState: UserState = {
  userDarkMode: true,
  userLocale: null,
  userPubKey: "",
  validatorPubKey: "",
  transactionAmount: "",
  transactionId: "",
  receipientPubKey: "",
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(updateUserDarkMode, (state, action) => {
      state.userDarkMode = action.payload.userDarkMode;
    })
    .addCase(updateUserLocale, (state, action) => {
      state.userLocale = action.payload.userLocale;
    })
    .addCase(updateUserPubKey, (state, action) => {
      state.userPubKey = action.payload.userPubKey;
    })
    .addCase(updateValidatorPubKey, (state, action) => {
      state.validatorPubKey = action.payload.validatorPubKey;
    })
    .addCase(updateTransactionAmount, (state, action) => {
      state.transactionAmount = action.payload.transactionAmount;
    })
    .addCase(updateTransactionId, (state, action) => {
      state.transactionId = action.payload.transactionId;
    })
    .addCase(updateReceipientPubKey, (state, action) => {
      state.receipientPubKey = action.payload.receipientPubKey;
    });
});
