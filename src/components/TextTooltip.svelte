<script lang="ts">
    import { createTooltip, melt } from "@melt-ui/svelte";
    import { fade } from "svelte/transition";

    export let text = "";

    const {
        elements: { trigger, content },
        states: { open },
    } = createTooltip({
        positioning: {
            placement: "bottom-start",
            gutter: 0,
        },
        openDelay: 0,
        closeDelay: 0,
        closeOnPointerDown: false,
        forceVisible: true,
    });
</script>

<button
    type="button"
    class="inline text-violet-700 font-bold underline"
    use:melt={$trigger}
>
    {text}
</button>

{#if $open}
    <div
        use:melt={$content}
        transition:fade={{ duration: 100 }}
        class="z-10 rounded-e-md bg-neutral-100 shadow-md border border-s-4 border-violet-700"
    >
        <div class="px-4 py-1">
            <slot />
        </div>
    </div>
{/if}
