import { useCallback } from "react";
import { SupportedLocale } from "data/constants";
import { useAppSelector, useAppDispatch } from "hooks";
import {
  updateUserDarkMode,
  updateUserLocale,
  updateUserPubKey,
  updateValidatorPubKey,
  updateTransactionAmount,
  updateTransactionId,
  updateReceipientPubKey,
} from "./actions";

export function useIsDarkMode() {
  return useAppSelector((state) => state.user.userDarkMode);
}

export function useUserLocale() {
  return useAppSelector((state) => state.user.userLocale);
}

export function useUserPubKey() {
  return useAppSelector((state) => state.user.userPubKey);
}

export function useValidatorPubKey() {
  return useAppSelector((state) => state.user.validatorPubKey);
}

export function useTransactionAmount() {
  return useAppSelector((state) => state.user.transactionAmount);
}

export function useTransactionId() {
  return useAppSelector((state) => state.user.transactionId);
}

export function useReceipientPubKey() {
  return useAppSelector((state) => state.user.receipientPubKey);
}

export function useDarkModeToggle(): [boolean, () => void] {
  const darkMode = useIsDarkMode();
  const dispatch = useAppDispatch();

  const toggleDarkMode = useCallback(() => {
    dispatch(updateUserDarkMode({ userDarkMode: !darkMode }));
  }, [darkMode, dispatch]);

  return [darkMode, toggleDarkMode];
}

export function useUserLocaleManager() {
  const dispatch = useAppDispatch();
  const locale = useUserLocale();

  const setLocale = useCallback(
    (newLocale: SupportedLocale) => {
      dispatch(updateUserLocale({ userLocale: newLocale }));
    },
    [dispatch]
  );

  return [locale, setLocale];
}

export function useOnChangeUserPubKey() {
  const dispatch = useAppDispatch();
  const userpubkey = useUserPubKey();

  const setUserPubKey = useCallback(
    (newPubKey: string) => {
      dispatch(updateUserPubKey({ userPubKey: newPubKey }));
    },
    [dispatch]
  );

  return [userpubkey, setUserPubKey];
}

export function useOnChangeValidatorPubKey() {
  const dispatch = useAppDispatch();
  const validatorPubkey = useValidatorPubKey();

  const setValidatorPubKey = useCallback(
    (newPubKey: string) => {
      dispatch(updateValidatorPubKey({ validatorPubKey: newPubKey }));
    },
    [dispatch]
  );

  return [validatorPubkey, setValidatorPubKey];
}

export function useOnChangeTransactionAmount() {
  const dispatch = useAppDispatch();
  const txAmount = useTransactionAmount();

  const setTxAmount = useCallback(
    (newTxAmount: string) => {
      dispatch(updateTransactionAmount({ transactionAmount: newTxAmount }));
    },
    [dispatch]
  );

  return [txAmount, setTxAmount];
}

export function useOnChangeTransactionId() {
  const dispatch = useAppDispatch();
  const txId = useTransactionId();

  const setTxId = useCallback(
    (newTxId: string) => {
      dispatch(updateTransactionId({ transactionId: newTxId }));
    },
    [dispatch]
  );

  return [txId, setTxId];
}

export function useOnChangeReceipientPubKey() {
  const dispatch = useAppDispatch();
  const receipientPubkey = useReceipientPubKey();

  const setReceipientPubKey = useCallback(
    (newPubKey: string) => {
      dispatch(updateReceipientPubKey({ receipientPubKey: newPubKey }));
    },
    [dispatch]
  );

  return [receipientPubkey, setReceipientPubKey];
}
