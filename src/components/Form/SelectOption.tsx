import * as SelectRadix from "@radix-ui/react-select";

interface SelectOptionProps {
    label: string;
    value: string;
}

export function SelectOption(props: SelectOptionProps) {
    return (
        <SelectRadix.Item
            value={props.value}
            className="py-2 px-3 rounded hover:bg-violet-100 cursor-pointer text-zinc-900 text-sm"
        >
            <SelectRadix.ItemText>{props.label}</SelectRadix.ItemText>
        </SelectRadix.Item>
    );
}
