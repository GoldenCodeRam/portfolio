<script lang="ts">
    import { createTabs, melt } from "@melt-ui/svelte";
    import TextTooltip from "./TextTooltip.svelte";

    const {
        elements: { root, list, content, trigger },
        states: { value },
    } = createTabs({
        defaultValue: "tab-1",
    });

    const triggers = [
        { id: "tab-1", title: "Nix" },
        { id: "tab-2", title: "Devenv" },
        { id: "tab-3", title: "Direnv" },
        { id: "tab-4", title: "Docker" },
        { id: "tab-5", title: "Home Manager" },
    ];
</script>

<div use:melt={$root} class="flex rounded-lg bg-white shadow overflow-hidden">
    <div
        use:melt={$list}
        class="flex flex-col shrink-0 overflow-x-auto bg-neutral-100 px-2 py-3 gap-2"
        aria-label="Manage your account"
    >
        {#each triggers as triggerItem}
            <button
                use:melt={$trigger(triggerItem.id)}
                class="trigger relative min-w-24 px-4 rounded-lg border-2 border-violet-200 font-bold"
                class:active={$value === triggerItem.id}
            >
                {triggerItem.title}
            </button>
        {/each}
    </div>

    <div use:melt={$content("tab-1")} class="grow bg-white p-5">
        Throughout the years, I have worked with many package managers. I've
        come to like
        <TextTooltip text="Nix">
            <p class="m-0 max-w-xs">
                Nix is a tool that takes a unique approach to package management
                and system configuration.
            </p>
            <a href="https://nixos.org" target="_blank" class="text-sm text-violet-700">
                See more...
            </a>
        </TextTooltip>
        recently, due to its way of storing dependencies and working with packages,
        so I can install packages and programs for many of my development environments.
        This way, the dependencies are flexible, and the development environments
        easier to use.
    </div>

    <div use:melt={$content("tab-2")} class="grow bg-white p-5">
        <p class="mb-5 leading-normal text-neutral-900">
            Change your password here. Click save when you're done.
        </p>
        <fieldset class="mb-4 flex w-full flex-col justify-start">
            <label
                class="mb-2.5 block text-sm leading-none text-neutral-900"
                for="newPassword"
            >
                New password
            </label>
            <input id="newPassword" type="password" />
        </fieldset>
        <div class="mt-5 flex justify-end">
            <button class="save">Save changes</button>
        </div>
    </div>
    <div use:melt={$content("tab-3")} class="grow bg-white p-5">
        <p class="mb-5 leading-normal text-neutral-900">
            Change your settings here. Click save when you're done.
        </p>

        <fieldset class="mb-4 flex w-full flex-col justify-start">
            <label
                class="mb-2.5 block text-sm leading-none text-neutral-900"
                for="newEmail"
            >
                New email
            </label>
            <input id="newEmail" type="email" />
        </fieldset>
        <div class="mt-5 flex justify-end">
            <button class="save">Save changes</button>
        </div>
    </div>
</div>

<style>
    .active {
        @apply bg-violet-300 border-violet-700;
    }
</style>
