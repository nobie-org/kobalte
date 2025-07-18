# kobalte

[![license-badge]](https://github.com/kobaltedev/kobalte#license)

[license-badge]: https://img.shields.io/github/license/kobaltedev/kobalte

A UI toolkit for building accessible web apps and design systems with SolidJS.

## NOBIE INFO

- Add upstream via `git remote add kobaltedev https://github.com/kobaltedev/kobalte.git` and periodically rebase to a stable release
- Turn `[PATCH]` commits into upstream PRs
- Redo the `[BUILD]` commit using `sed -i '' '/^dist$/d' .gitignore && rm -rf packages/*/dist && pnpm i && pnpm run build:libs`
- Reference this repo's `main` using exact SHA
- For local dev, use `pnpm link YOUR_PATH_TO_KOBALTE/packages/core` in `nobie` and `pnpm build:core:watch` here

## Packages

| Name                                                  |                                     Version                                      | Description                                                                                                            |
| :---------------------------------------------------- | :------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------- |
| [@kobalte/core](/packages/core)                       |            [![core-npm]](https://www.npmjs.com/package/@kobalte/core)            | Unstyled components and primitives for building accessible web apps and design systems.                                |
| [@kobalte/tailwindcss](/packages/tailwindcss)         |     [![tailwindcss-npm]](https://www.npmjs.com/package/@kobalte/tailwindcss)     | A TailwindCSS plugin for styling Kobalte components states `data-*` attributes by using modifiers like `ui-expanded:*` |
| [@kobalte/vanilla-extract](/packages/vanilla-extract) | [![vanilla-extract-npm]](https://www.npmjs.com/package/@kobalte/vanilla-extract) | A Vanilla Extract plugin for styling Kobalte components states `data-*` attributes by using an utility function.       |

[core-npm]: https://img.shields.io/npm/v/@kobalte/core
[tailwindcss-npm]: https://img.shields.io/npm/v/@kobalte/tailwindcss
[vanilla-extract-npm]: https://img.shields.io/npm/v/@kobalte/vanilla-extract

## Documentation

For full documentation, visit [kobalte.dev](https://kobalte.dev/).

## Roadmap

View roadmap, give feedback and vote for new features at https://github.com/orgs/kobaltedev/projects/4.

# Contributing

Before contributing please refer to [CONTRIBUTING.md](./CONTRIBUTING.md).

All contributions are moderated under the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md).

## Acknowledgment

- [Ariakit](https://ariakit.org/)
- [Radix UI](https://www.radix-ui.com/)
- [React Aria](https://react-spectrum.adobe.com/react-aria/)
- [Zag](https://zagjs.com/)
- [corvu](https://corvu.dev/)

Created by Fabien Marie-Louise.

## License

This project is licensed under the [MIT License](./LICENSE.md).
