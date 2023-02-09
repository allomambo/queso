export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "padded",
    options: {},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
