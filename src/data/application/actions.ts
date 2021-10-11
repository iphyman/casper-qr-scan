import { createAction } from "@reduxjs/toolkit";

export const updateAppNotification = createAction<{
  appNotification: {
    text: string;
    severity: "error" | "warning" | "success";
  };
}>("app/updateAppNotification");

export const updateAppNotificationState = createAction<{
  appNotificationState: boolean;
}>("app/updateAppNotificationState");

export const updateisSignerConnected = createAction<{
  isSignerConnected: boolean;
}>("app/updateSignerConnection");

export const updateIsSignerLocked = createAction<{
  isSignerLocked: boolean;
}>("app/updateSignerLockState");
