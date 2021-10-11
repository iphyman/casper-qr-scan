import { useCallback, useEffect } from "react";
import { Signer } from "casper-js-sdk";
import { useAppSelector, useAppDispatch } from "hooks";
import { updateisSignerConnected, updateIsSignerLocked } from "./actions";
import { updateUserPubKey } from "data/user/actions";

export function useAppNotification() {
  return useAppSelector((state) => state.app.appNotification);
}

export function useAppNotificationState() {
  return useAppSelector((state) => state.app.appNotificationState);
}

export function useIsSignerConnected() {
  return useAppSelector((state) => state.app.isSignerConnected);
}

export function useIsSignerLocked() {
  return useAppSelector((state) => state.app);
}

export function useSignerConnection() {
  const dispatch = useAppDispatch();

  const checkSignerConnection = useCallback(async () => {
    const status = await Signer.isConnected();
    dispatch(updateisSignerConnected({ isSignerConnected: status }));

    if (status) {
      const activeKey = await Signer.getActivePublicKey();
      dispatch(updateUserPubKey({ userPubKey: activeKey }));
    }
    // eslint-disable-next-line
  }, []);

  const handleEvent = useCallback(
    (msg: any) => {
      dispatch(
        updateisSignerConnected({ isSignerConnected: msg.detail.isConnected })
      );
      dispatch(updateIsSignerLocked({ isSignerLocked: msg.detail.isUnlocked }));
      dispatch(updateUserPubKey({ userPubKey: msg.detail.activeKey }));
      //   // eslint-disable-next-line
    },
    [dispatch]
  );

  useEffect(() => {
    setTimeout(async () => {
      try {
        await checkSignerConnection();
      } catch (error) {
        // console.log("error " + error); //for debugging
      }
    }, 5000);

    window.addEventListener("signer:connected", handleEvent);
    window.addEventListener("signer:disconnected", handleEvent);
    // window.addEventListener("signer:tabUpdated", handleEvent);
    // window.addEventListener("signer:activeKeyChanged", handleEvent);
    // window.addEventListener("signer:locked", handleEvent);
    // window.addEventListener("signer:unlocked", handleEvent);
    // window.addEventListener("signer:initialState", handleEvent);

    return () => {
      window.removeEventListener("signer:connected", handleEvent);
      window.removeEventListener("signer:disconnected", handleEvent);
      // window.removeEventListener("signer:tabUpdated", handleEvent);
      // window.removeEventListener("signer:activeKeyChanged", handleEvent);
      // window.removeEventListener("signer:locked", handleEvent);
      // window.removeEventListener("signer:unlocked", handleEvent);
      // window.removeEventListener("signer:initialState", handleEvent);
    };
    // eslint-disable-next-line
  }, []);
}

export function useConnectToSigner() {
  return useCallback(() => {
    return Signer.sendConnectionRequest();
  }, []);
}
