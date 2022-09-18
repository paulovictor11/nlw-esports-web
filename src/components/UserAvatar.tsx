import * as Avatar from "@radix-ui/react-avatar";
import * as HoverCard from "@radix-ui/react-hover-card";
import { SignOut, User } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function UserAvatar() {
    const navigate = useNavigate();

    function Image() {
        return (
            <div className="cursor-pointer w-12 h-12 p-[3px] rounded-full bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D]">
                <Avatar.Root>
                    <Avatar.Image
                        src="https://github.com/paulovictor11.png"
                        alt="User Photo"
                        className="rounded-full"
                    />
                    <Avatar.Fallback
                        delayMs={600}
                        className="rounded-full bg-zinc-200 text-zinc-900 flex items-center justify-center"
                    >
                        PV
                    </Avatar.Fallback>
                </Avatar.Root>
            </div>
        );
    }

    return (
        <div className="fixed right-6 top-4">
            <HoverCard.Root>
                <HoverCard.Trigger>
                    <Image />
                </HoverCard.Trigger>

                <HoverCard.Portal>
                    <HoverCard.Content className="bg-[#2A2634] rounded mr-3 w-60">
                        <HoverCard.Arrow className=" fill-[#2A2634] h-2 w-4" />

                        <div className="flex items-center justify-between px-5 py-2">
                            <p className="font-bold text-white text-lg">
                                Paulo Victor
                            </p>
                            <p className="font-semibold text-sm text-zinc-500">
                                Vitu#2204
                            </p>
                        </div>

                        <p className="px-5 py-2 text-zinc-300 font-semibold flex items-center gap-6 cursor-pointer hover:bg-black/20">
                            <User size={20} className="text-violet-500" />
                            Meu Perfil
                        </p>

                        <div className="px-5 pt-2 pb-4">
                            <button
                                onClick={() =>
                                    navigate("/login", { replace: true })
                                }
                                className="py-1 px-2 w-full bg-transparent border-2 border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center gap-3"
                            >
                                <SignOut size={20} />
                                Sair
                            </button>
                        </div>
                    </HoverCard.Content>
                </HoverCard.Portal>
            </HoverCard.Root>
        </div>
    );
}
