import * as SelectRadix from "@radix-ui/react-select";
import { CaretDown } from "phosphor-react";
import { ReactNode } from "react";

interface SelectProps {
    placeholder: string;
    children: ReactNode;
    onValueChange: (value: string) => void;
}

export function Select(props: SelectProps) {
    return (
        <SelectRadix.Root onValueChange={props.onValueChange}>
            <SelectRadix.Trigger className="bg-zinc-900 py-3 px-4 rounded text-sm text-zinc-500 flex items-center justify-between">
                <SelectRadix.Value placeholder={props.placeholder} />
                <SelectRadix.Icon>
                    <CaretDown size={20} />
                </SelectRadix.Icon>
            </SelectRadix.Trigger>

            <SelectRadix.Portal>
                <SelectRadix.Content className="bg-white p-2 rounded">
                    <SelectRadix.Viewport>
                        {props.children}
                    </SelectRadix.Viewport>
                </SelectRadix.Content>
            </SelectRadix.Portal>
        </SelectRadix.Root>
    );
}
