import * as React from "react";
import { GetGlobalTextContext, SetGlobalTextContext } from "./global-text.context";

export const useGetGlobalText = () => React.useContext(GetGlobalTextContext);
export const useSetGlobalText = () => React.useContext(SetGlobalTextContext);
