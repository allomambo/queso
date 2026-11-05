import { createSSRApp, type Component } from "vue";
import { renderToString } from "vue/server-renderer";
import { vi } from "vitest";

/**
 * Render a component on the "server", then hydrate the HTML in the DOM
 * and collect every Vue warning or error logged along the way.
 */
export async function renderAndHydrate(component: Component, props: Record<string, unknown> = {}) {
    const logs: string[] = [];
    const collect = (...args: unknown[]) => logs.push(args.map(String).join(" "));
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(collect);
    const errorSpy = vi.spyOn(console, "error").mockImplementation(collect);

    const html = await renderToString(createSSRApp(component, props));

    const container = document.createElement("div");
    container.innerHTML = html;
    document.body.appendChild(container);

    const app = createSSRApp(component, props);
    app.mount(container);

    warnSpy.mockRestore();
    errorSpy.mockRestore();

    const unmount = () => {
        app.unmount();
        container.remove();
    };

    return { html, container, logs, unmount };
}
