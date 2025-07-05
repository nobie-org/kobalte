import * as tailwindcss_types_config from 'tailwindcss/types/config';

interface KobalteTailwindPluginOptions {
    /** The prefix of generated classes. */
    prefix?: string;
}
declare const _default: {
    (options: KobalteTailwindPluginOptions): {
        handler: tailwindcss_types_config.PluginCreator;
        config?: Partial<tailwindcss_types_config.Config> | undefined;
    };
    __isOptionsFunction: true;
};

export { KobalteTailwindPluginOptions, _default as default };
