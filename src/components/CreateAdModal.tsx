import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
// import * as ToggleGroup from "@radix-ui/react-toggle-group";
import axios from "axios";
import { Check, CircleNotch, GameController } from "phosphor-react";
import { Input } from "./Form/Input";
import { FormEvent, useEffect, useState } from "react";
import { Select } from "./Form/Select";
import { SelectOption } from "./Form/SelectOption";
import { ToggleGroup } from "./Form/ToggleGroup";
import { ToggleItem } from "./Form/ToggleItem";

interface Game {
    id: string;
    title: string;
}

export function CreateAdModal() {
    const [games, setGames] = useState<Game[]>([]);
    const [weekDays, setWeekDays] = useState<string[]>([]);
    const [useVoiceChannel, setUseVoiceChannel] = useState(false);
    const [selectedGame, setSelectedGame] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        axios("http://localhost:3333/games")
            .then((response) => setGames(response.data))
            .catch((err) => console.log("Não foi possível listar os jogos"));
    }, []);

    async function handleCreateAd(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        if (!data.name) {
            return;
        }

        try {
            setIsLoading(true);

            await axios.post(
                `http://localhost:3333/games/${selectedGame}/ads`,
                {
                    name: data.name,
                    yearsPlaying: Number(data.yearsPlaying),
                    discord: data.discord,
                    weekDays: weekDays.map(Number),
                    hourStart: data.hourStart,
                    hourEnd: data.hourEnd,
                    useVoiceChannel: useVoiceChannel,
                }
            );

            alert("Anúncio criado com sucesso");
        } catch (err) {
            console.log(err);
            alert("Erro ao criar anúncio");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
                <Dialog.Title className="text-3xl font-black">
                    Publique um anúncio
                </Dialog.Title>

                <form
                    onSubmit={handleCreateAd}
                    className="mt-8 flex flex-col gap-4"
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="game" className="font-semibold">
                            Qual o game?
                        </label>
                        <Select
                            placeholder="Selecione o game que deseja jogar"
                            onValueChange={setSelectedGame}
                        >
                            {games.map((game) => {
                                return (
                                    <SelectOption
                                        key={game.id}
                                        value={game.id}
                                        label={game.title}
                                    />
                                );
                            })}
                        </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Seu nome (ou nickname)</label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Como te chamam dentro do game?"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="yearsPlaying">
                                Joga há quantos anos?
                            </label>
                            <Input
                                id="yearsPlaying"
                                name="yearsPlaying"
                                type="number"
                                placeholder="Tudo bem ser ZERO"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="discord">Qual seu Discord?</label>
                            <Input
                                id="discord"
                                name="discord"
                                type="text"
                                placeholder="Usuario#0000"
                            />
                        </div>
                    </div>

                    {/* <div className="flex gap-6"> */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="weekDays">Quando costuma jogar?</label>

                        <ToggleGroup
                            value={weekDays}
                            onValueChange={setWeekDays}
                        >
                            <ToggleItem
                                value="0"
                                title="Domingo"
                                isSelected={weekDays.includes("0")}
                            >
                                D
                            </ToggleItem>
                            <ToggleItem
                                value="1"
                                title="Segunda"
                                isSelected={weekDays.includes("1")}
                            >
                                S
                            </ToggleItem>
                            <ToggleItem
                                value="2"
                                title="Terça"
                                isSelected={weekDays.includes("2")}
                            >
                                T
                            </ToggleItem>
                            <ToggleItem
                                value="3"
                                title="Quarta"
                                isSelected={weekDays.includes("3")}
                            >
                                Q
                            </ToggleItem>
                            <ToggleItem
                                value="4"
                                title="Quinta"
                                isSelected={weekDays.includes("4")}
                            >
                                Q
                            </ToggleItem>
                            <ToggleItem
                                value="5"
                                title="Sexta"
                                isSelected={weekDays.includes("5")}
                            >
                                S
                            </ToggleItem>
                            <ToggleItem
                                value="6"
                                title="Sábado"
                                isSelected={weekDays.includes("6")}
                            >
                                S
                            </ToggleItem>
                        </ToggleGroup>
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                        <label htmlFor="hourStart">Qual horário do dia?</label>

                        <div className="grid grid-cols-2 gap-2">
                            <Input
                                id="hourStart"
                                name="hourStart"
                                type="time"
                                placeholder="De"
                            />
                            <Input
                                id="hourEnd"
                                name="hourEnd"
                                type="time"
                                placeholder="Até"
                            />
                        </div>
                    </div>
                    {/* </div> */}

                    <label className="mt-2 flex items-center gap-2 text-sm cursor-pointer">
                        <Checkbox.Root
                            className="w-6 h-6 p-1 rounded bg-zinc-900"
                            checked={useVoiceChannel}
                            onCheckedChange={(checked) => {
                                checked === true
                                    ? setUseVoiceChannel(true)
                                    : setUseVoiceChannel(false);
                            }}
                        >
                            <Checkbox.Indicator>
                                <Check size={16} className="text-emerald-400" />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        Costumo me conectar ao chat de voz
                    </label>

                    <footer className="mt-4 flex justify-end gap-4">
                        <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600 transition-colors">
                            Cancelar
                        </Dialog.Close>
                        <button
                            type="submit"
                            className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 transition-colors"
                        >
                            {isLoading ? (
                                <CircleNotch
                                    size={24}
                                    className="animate-spin"
                                />
                            ) : (
                                <GameController size={24} />
                            )}
                            Encontrar duo
                        </button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    );
}
