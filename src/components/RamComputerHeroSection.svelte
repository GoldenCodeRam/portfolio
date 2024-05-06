<script lang="ts">
    import { onMount } from "svelte";
    import RamComputer from "./RamComputer.svelte";
    import { fade, slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    let showInfo = false;
    onMount(() => {
        console.log(window.innerWidth);
        setTimeout(() => {
            showInfo = true;
        }, 3500);
    });
</script>

<div class="flex flex-col lg:flex-row items-center h-full">
    <div class="w-[15em] xs:w-[20em] sm:w-[30em] xl:w-[40em] shrink-0">
        <RamComputer />
    </div>
    {#if showInfo}
        <div
            class="block overflow-hidden"
            transition:slide={{
                duration: 1000,
                easing: quintOut,
                axis: window.innerWidth > 1024 ? "x" : "y",
            }}
        >
            <div
                transition:fade={{ delay: 1000 }}
                class="h-full max-h-screen flex flex-col justify-center text-white text-center overflow-hidden"
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

                    <div class="flex gap-3 mt-4 max-w-sm mx-auto">
                        <div
                            class="relative flex justify-center items-center h-32 w-32 text-black rounded-md overflow-hidden border-2"
                        >
                            <img
                                src="co_flag.svg"
                                alt="Silly cat"
                                class="absolute h-full w-full object-cover opacity-50"
                            />
                            <p class="z-10 text-white font-bold text-xl">
                                I'm from Colombia
                            </p>
                        </div>

                        <div
                            class="relative flex justify-center items-center h-32 w-32 text-black rounded-md overflow-hidden border-2 px-1"
                        >
                            <img
                                src="code_pattern.svg"
                                alt="Silly cat"
                                class="absolute h-full w-full object-cover opacity-50"
                            />
                            <p class="z-10 text-white font-bold text-xl">
                                I love code
                            </p>
                        </div>

                        <div
                            class="relative flex justify-center items-center h-32 w-32 text-black rounded-md overflow-hidden border-2"
                        >
                            <img
                                src="silly_cat.jpg"
                                alt="Silly cat"
                                class="absolute h-full w-full object-cover opacity-50"
                            />
                            <p class="z-10 text-white font-bold text-xl mt-10">
                                I love cats!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>
