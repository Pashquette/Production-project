module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],

    framework: '@storybook/react',

    core: {
        builder: 'webpack5',
    },
};

// import type { StorybookConfig } from '@storybook/react-webpack5';
//
// const config: StorybookConfig = {
//     stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
//     addons: [
//         '@storybook/addon-links',
//         '@storybook/addon-essentials',
//         '@storybook/addon-onboarding',
//         '@storybook/addon-interactions',
//     ],
//     framework: {
//         name: '@storybook/react-webpack5',
//         options: {},
//     },
//     docs: {
//         autodocs: 'tag',
//     },
// };
// export default config;
