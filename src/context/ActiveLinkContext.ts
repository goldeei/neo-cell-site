import { SectionIdOptions } from "@/types";
import { createContext } from "react";

type ActiveLinkContextType = [
	SectionIdOptions,
	React.Dispatch<React.SetStateAction<SectionIdOptions>>
];
export const ActiveLinkContext = createContext<
	ActiveLinkContextType | undefined
>(undefined);
