import { DiscordLogo, SignIn } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import logoImg from "../assets/logo-nlw-esports.svg";
import { Input } from "../components/Form/Input";

export function Login() {
    const navigate = useNavigate();

    return (
        <div className="max-w-[1280px] mx-auto my-20 flex flex-col items-center">
            <img src={logoImg} alt="Logo NLW eSports" />

            <div className="grid grid-cols-2 items-center gap-32 mt-16">
                <h1 className="text-[64px] text-white font-black">
                    Faça o seu{" "}
                    <span className="text-transparent bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] bg-clip-text">
                        login
                    </span>{" "}
                    na plataforma.
                </h1>

                <div className="w-full rounded-lg bg-[#2A2634] py-8 px-14 text-white">
                    <h1 className="text-3xl font-black">Insira seus dados</h1>

                    <form className="mt-8 flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Seu e-mail</label>
                            <Input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="example@email.com"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="senha">Sua senha</label>
                            <Input
                                id="senha"
                                name="senha"
                                type="password"
                                placeholder="***********"
                            />
                            <a
                                href="#"
                                className="font-semibold text-sm text-violet-500 hover:underline hover:underline-offset-2"
                            >
                                Esqueci minha senha
                            </a>
                        </div>

                        <button
                            onClick={() => navigate("/", { replace: true })}
                            className="py-3 px-4 w-64 mx-auto mt-8 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition-colors flex items-center justify-center gap-3"
                        >
                            <SignIn size={24} />
                            Entrar
                        </button>

                        <a
                            href="#"
                            className="font-semibold text-sm text-zinc-500 hover:underline hover:underline-offset-2 mx-auto"
                        >
                            Não tem uma conta?{" "}
                            <span className="text-violet-500">Registre-se</span>
                        </a>

                        <div className="h-[1px] w-full bg-zinc-700 my-4" />

                        <div className="flex items-center justify-center gap-8">
                            <span className="text-white/80">Ou entre com</span>

                            <button className="py-3 px-4 w-64 bg-black/20 text-white rounded-md hover:bg-violet-500 transition-colors flex items-center justify-center gap-3">
                                <DiscordLogo size={24} />
                                Discord
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
