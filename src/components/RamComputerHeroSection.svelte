<script>
    import { onMount } from "svelte";
    import RamComputer from "./RamComputer.svelte";
    import { fade, slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    let showInfo = true;
    onMount(() => {
        console.log(window.innerWidth);
        setTimeout(() => {
            showInfo = true;
        }, 4000);
    });
</script>

<div class="flex flex-col lg:flex-row items-center p-6">
    <div class="w-[15em] xs:w-[20em] sm:w-[30em] xl:w-[40em] shrink-0">
        <RamComputer />
    </div>
    {#if showInfo}
        <div
            transition:slide={{
                duration: 1000,
                easing: quintOut,
                axis: window.innerWidth > 1024 ? "x" : "y",
            }}
        >
            <div
                transition:fade={{ delay: 1000 }}
                class="h-full flex flex-col justify-center text-white text-center"
            >
                <h1 class="text-4xl sm:text-6xl text-white font-bold">
                    Welcome to my Portfolio!
                </h1>
                <p class="mt-6 text-xl sm:text-2xl">
                    Hi! My name is <a
                        target="_blank"
                        href="https://github.com/GoldenCodeRam"
                        class="inline-block font-bold border-2 rounded-md px-2 hover:bg-slate-900"
                    >
                        <i class="fa-brands fa-github"></i>
                        GoldenCodeRam
                    </a>, and I'm a Full-Stack Developer.
                </p>

                <div class="mt-12">
                    <p class="text-xl">Few things so you can profile me:</p>

                    <div class="grid gap-3 mt-4 grid-cols-1 max-w-sm mx-auto">
                        <div
                            class="flex bg-slate-900 text-xl items-center justify-center gap-3 border-2 border-white rounded-md py-2"
                        >
                            <img
                                class="w-12"
                                src="co-flag.svg"
                                alt="Colombian Flag"
                            />
                            I'm from Colombia
                        </div>
                        <div
                            class="flex bg-slate-900 text-xl items-center justify-center gap-3 border-2 border-white rounded-md py-2"
                        >
                            <i class="fa-solid fa-code text-4xl w-12"></i>
                            I love to code
                        </div>
                        <div
                            class="flex bg-slate-900 text-xl items-center justify-center gap-3 border-2 border-white rounded-md py-2"
                        >
                            <img class="w-12" src="cat.svg" alt="Cat Emoji" />
                            I love cats!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>
