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
  updateUserBalance,
} from "./actions";

interface UserState {
  userDarkMode: boolean;
  userLocale: SupportedLocale | null;
  userPubKey: string;
  validatorPubKey: string;
  transactionAmount: string;
  transactionId: string | number;
  receipientPubKey: string;
  userBalance: string;
}

const initialState: UserState = {
  userDarkMode: true,
  userLocale: null,
  userPubKey: "",
  validatorPubKey: "",
  transactionAmount: "",
  transactionId: new Date().getTime(),
  receipientPubKey: "",
  userBalance: "0.00",
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
    })
    .addCase(updateUserBalance, (state, action) => {
      state.userBalance = action.payload.userBalance;
    });
});
