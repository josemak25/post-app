import React, { PropsWithChildren } from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { ToastProvider } from "./ToastProvider";
import { SafeAreaProvider } from "./SafeAreaProvider";
import { StatusBarProvider } from "./StatusBarProvider";
import { StoreProvider } from "./StoreProvider";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      <SafeAreaProvider>
        <StatusBarProvider>
          <ToastProvider>
            <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
          </ToastProvider>
        </StatusBarProvider>
      </SafeAreaProvider>
    </StoreProvider>
  );
};
