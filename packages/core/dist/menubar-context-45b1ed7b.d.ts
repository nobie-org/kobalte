import * as solid_js from 'solid-js';
import { ParentProps, Setter, ValidComponent, Accessor } from 'solid-js';
import { ah as MenuRootOptions } from './menu-sub-trigger-f49e6466.js';
import { Orientation } from '@kobalte/utils';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';

interface MenubarMenuOptions extends MenuRootOptions {
}
interface MenubarMenuProps extends ParentProps<MenubarMenuOptions> {
}
/**
 * Displays a menu to the user —such as a set of actions or functions— triggered by a button.
 */
declare function MenubarMenu(props: MenubarMenuProps): solid_js.JSX.Element;

interface MenubarRootOptions {
    /** The value of the menu that should be open when initially rendered. Use when you do not need to control the value state. */
    defaultValue?: string;
    /** The controlled value of the menu to open. Should be used in conjunction with onValueChange. */
    value?: string | null;
    /** Event handler called when the value changes. */
    onValueChange?: (value: string | undefined | null) => void;
    /** When true, keyboard navigation will loop from last item to first, and vice versa. (default: true) */
    loop?: boolean;
    /** When true, click on alt by itsef will focus this Menubar (some browsers interfere) */
    focusOnAlt?: boolean;
    /** The orientation of the menubar. */
    orientation?: Orientation;
    autoFocusMenu?: boolean;
    onAutoFocusMenuChange?: Setter<boolean>;
}
interface MenubarRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
}
interface MenubarRootRenderProps extends MenubarRootCommonProps {
    role: "menubar";
    "data-orientation": "horizontal" | "vertical";
    "aria-orientation": "horizontal" | "vertical";
}
type MenubarRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = MenubarRootOptions & Partial<MenubarRootCommonProps<ElementOf<T>>>;
/**
 * A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
 */
declare function MenubarRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, MenubarRootProps<T>>): solid_js.JSX.Element;

interface MenubarDataSet {
    "data-expanded": string | undefined;
    "data-closed": string | undefined;
}
interface MenubarContextValue {
    dataset: Accessor<MenubarDataSet>;
    value: Accessor<string | undefined | null>;
    setValue: (next: string | ((prev: string | undefined | null) => string | undefined) | undefined | null) => void;
    menus: Accessor<Set<string>>;
    menuRefs: Accessor<Array<HTMLElement>>;
    menuRefMap: Accessor<Map<string, Array<HTMLElement>>>;
    lastValue: Accessor<string | undefined>;
    setLastValue: (next: string | ((prev: string | undefined) => string | undefined) | undefined) => void;
    registerMenu: (value: string, refs: Array<HTMLElement>) => void;
    unregisterMenu: (value: string) => void;
    nextMenu: () => void;
    previousMenu: () => void;
    closeMenu: () => void;
    setAutoFocusMenu: Setter<boolean>;
    autoFocusMenu: Accessor<boolean>;
    generateId: (part: string) => string;
    orientation: Accessor<Orientation>;
}
declare function useMenubarContext(): MenubarContextValue;

export { MenubarRoot as M, MenubarMenu as a, MenubarContextValue as b, MenubarMenuOptions as c, MenubarMenuProps as d, MenubarRootCommonProps as e, MenubarRootOptions as f, MenubarRootProps as g, MenubarRootRenderProps as h, MenubarDataSet as i, useMenubarContext as u };
