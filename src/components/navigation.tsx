import {createEffect, createSignal, For, onCleanup, Show} from 'solid-js'
import {A, useLocation} from "@solidjs/router";





export function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}

const menu: { name: string, href: string }[] = [
    {name: "Home", href: "/"},
    {name: "Gallery", href: "/gallery"},
    {name: "Sign In", href: "/sign-in"},
]


export default function Navigation() {
    const [open, setOpen] = createSignal(false)

    const [getOpenSearch, setOpenSearch] = createSignal(false)




    const location = useLocation()


    const [isOpen, setIsOpen] = createSignal(false);

    function closeModal(): void {
        setIsOpen(false);
    }

    function openModal(): void {
        setIsOpen(true);
    }





    return (
        <div class="bg-white">
            <header class="relative">
                <nav aria-label="Top">
                    <div class="bg-secondary">
                        <div class="mx-auto flex h-10 max-w-7xl px-4 items-center justify-center">
                            <A href={"/"}>
                                <h1 class="flex text-center text-white text-sm font-medium uppercase lg:flex-none">
                                  {/* NAME */}
                                </h1>
                            </A>

                        </div>
                    </div>




                </nav>
            </header>
        </div>

    )
}
