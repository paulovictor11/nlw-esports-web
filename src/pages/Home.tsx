import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import logoImg from "../assets/logo-nlw-esports.svg";
import { GameBanner } from "../components/GameBanner";
import { CreateAdBanner } from "../components/CreateAdBanner";
import { CreateAdModal } from "../components/CreateAdModal";
import { useEffect, useState } from "react";
import { UserAvatar } from "../components/UserAvatar";

interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    };
}

export function Home() {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        axios("http://localhost:3333/games")
            .then((response) => setGames(response.data))
            .catch((err) => {
                console.log(err);
                alert("Não foi possível listar os jogos");
            });
    }, []);

    return (
        <div className="max-w-[1344px] mx-auto my-20 flex flex-col items-center">
            <UserAvatar />

            <img src={logoImg} alt="Logo NLW eSports" />

            <h1 className="text-[64px] text-white font-black mt-20">
                Seu{" "}
                <span className="text-transparent bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] bg-clip-text">
                    duo
                </span>{" "}
                está aqui.
            </h1>

            <div className="grid grid-cols-6 gap-6 mt-16">
                {games.map((game) => {
                    return (
                        <GameBanner
                            key={game.id}
                            bannerUrl={game.bannerUrl}
                            title={game.title}
                            adsCount={game._count.ads}
                        />
                    );
                })}
            </div>

            <Dialog.Root>
                <CreateAdBanner />
                <CreateAdModal />
            </Dialog.Root>
        </div>
    );
}
