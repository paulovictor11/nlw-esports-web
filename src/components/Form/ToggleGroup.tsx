import * as ToggleGroupRadix from "@radix-ui/react-toggle-group";
import { ReactNode } from "react";

interface ToggleGroupProps {
    value: string[];
    children: ReactNode;
    onValueChange: (value: string[]) => void;
}

export function ToggleGroup(props: ToggleGroupProps) {
    return (
        <ToggleGroupRadix.Root
            type="multiple"
            // className="grid grid-cols-4 gap-2"
            className="flex justify-between bg-zinc-900 rounded overflow-hidden"
            value={props.value}
            onValueChange={props.onValueChange}
        >
            {props.children}
        </ToggleGroupRadix.Root>
    );
}
