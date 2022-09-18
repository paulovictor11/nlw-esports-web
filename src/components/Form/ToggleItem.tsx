import * as ToggleGroupRadix from "@radix-ui/react-toggle-group";
import { ReactNode } from "react";

interface ToggleItemProps {
    value: string;
    title: string;
    isSelected: boolean;
    children: ReactNode;
}

export function ToggleItem(props: ToggleItemProps) {
    return (
        <ToggleGroupRadix.Item
            value={props.value}
            className={`w-full h-10 ${
                props.isSelected
                    ? "bg-violet-500 hover:bg-violet-600"
                    : "bg-transparent hover:bg-white/5"
            }`}
            title={props.title}
        >
            {props.children}
        </ToggleGroupRadix.Item>
    );
}
