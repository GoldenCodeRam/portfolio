<script lang="ts">
    import RamServer from "./RamServer.svelte";
    
    import food_badge from "../assets/food_badge.svg";
    import code_pattern from "../assets/code_pattern.svg";
    import silly_cat from "../assets/silly_cat.jpg";
</script>

<div class="flex flex-col lg:flex-row items-center justify-center h-full">
    <div
        class="w-[10em] xs:w-[10em] sm:w-[16em] xl:w-[20em] shrink-0 mb-5 xl:me-12"
    >
        <RamServer />
    </div>
    <div class="block overflow-hidden">
        <div
            class="h-full max-h-screen flex flex-col items-center justify-center text-white text-center overflow-hidden"
        >
            <h1 class="text-4xl sm:text-6xl text-white font-bold">
                Welcome to my Portfolio!
            </h1>
            <p class="mt-6 text-lg sm:text-2xl">
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
                <p class="text-md">Few things so you can profile me:</p>

                <div class="flex gap-3 mt-4 max-w-sm justify-center">
                    <div
                        class="relative flex justify-center items-center h-24 w-24 sm:h-32 sm:w-32 text-black rounded-md overflow-hidden border-2"
                    >
                        <img
                            src={food_badge.src}
                            alt="Food Badge"
                            class="absolute h-full w-full object-cover opacity-50"
                        />
                        <p class="z-10 text-white font-bold text-md sm:text-xl">
                            I love to cook!
                        </p>
                    </div>

                    <div
                        class="relative flex justify-center items-center h-24 w-24 sm:h-32 sm:w-32 text-black rounded-md overflow-hidden border-2"
                    >
                        <img
                            src={code_pattern.src}
                            alt="Code Pattern"
                            class="absolute h-full w-full object-cover opacity-50"
                        />
                        <p class="z-10 text-white font-bold text-md sm:text-xl">
                            I love code
                        </p>
                    </div>

                    <div
                        class="relative flex justify-center items-center h-24 w-24 sm:h-32 sm:w-32 text-black rounded-md overflow-hidden border-2"
                    >
                        <img
                            src={silly_cat.src}
                            alt="Silly cat"
                            class="absolute h-full w-full object-cover opacity-50"
                        />
                        <p
                            class="z-10 text-white font-bold text-md sm:text-xl pt-10"
                        >
                            I love cats!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
