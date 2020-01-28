import * as React from "react";
import { GetGlobalTextContextType, SetGlobalTextContextType } from "./global-text.model";

export const GetGlobalTextContext = React.createContext<GetGlobalTextContextType>(undefined);
export const SetGlobalTextContext = React.createContext<SetGlobalTextContextType>(undefined);
