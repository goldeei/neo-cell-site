"use client";

import { SectionIdOptions } from "@/types";
import { createContext, useState } from "react";

type ActiveLinkContextType = [
	SectionIdOptions,
	React.Dispatch<React.SetStateAction<SectionIdOptions>>
];
export const ActiveLinkContext = createContext<
	ActiveLinkContextType | undefined
>(undefined);

export const ActiveLinkProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [activeLink, setActiveLink] = useState<SectionIdOptions>("");

	return (
		<ActiveLinkContext.Provider value={[activeLink, setActiveLink]}>
			{children}
		</ActiveLinkContext.Provider>
	);
};
