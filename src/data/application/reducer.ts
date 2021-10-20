import { createReducer } from "@reduxjs/toolkit";
import {
  updateAppNotification,
  updateAppNotificationState,
  updateisSignerConnected,
  updateIsSignerLocked,
  updateCSPRToUSDRate,
} from "./actions";

interface ApplicationState {
  appNotification: {
    text: string;
    severity: "error" | "warning" | "success";
  } | null;
  appNotificationState: boolean;
  isSignerConnected: boolean;
  isSignerLocked: boolean;
  CSPRToUSDRate: number;
}

const initialState: ApplicationState = {
  appNotification: null,
  appNotificationState: false,
  isSignerConnected: false,
  isSignerLocked: true,
  CSPRToUSDRate: 0.108,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(updateAppNotification, (state, action) => {
      state.appNotification = action.payload.appNotification;
    })
    .addCase(updateAppNotificationState, (state, action) => {
      state.appNotificationState = action.payload.appNotificationState;
    })
    .addCase(updateisSignerConnected, (state, action) => {
      state.isSignerConnected = action.payload.isSignerConnected;
    })
    .addCase(updateIsSignerLocked, (state, action) => {
      state.isSignerLocked = action.payload.isSignerLocked;
    })
    .addCase(updateCSPRToUSDRate, (state, action) => {
      state.CSPRToUSDRate = action.payload.CSPRToUSDRate;
    });
});
