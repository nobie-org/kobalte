import { JSX, ValidComponent } from 'solid-js';
import { a as ButtonRootCommonProps, d as ButtonRootRenderProps } from './button-root-da654b3e.js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { M as MenuDataSet } from './menu-sub-trigger-f49e6466.js';

interface MenuTriggerOptions {
}
interface MenuTriggerCommonProps<T extends HTMLElement = HTMLElement> extends ButtonRootCommonProps<T> {
    id: string;
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
    onMouseOver: JSX.EventHandlerUnion<T, MouseEvent>;
    onFocus: JSX.EventHandlerUnion<T, FocusEvent>;
}
interface MenuTriggerRenderProps extends MenuTriggerCommonProps, ButtonRootRenderProps, MenuDataSet {
    role: "menuitem" | undefined;
    "data-kb-menu-value-trigger": string | undefined;
}
type MenuTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = MenuTriggerOptions & Partial<MenuTriggerCommonProps<ElementOf<T>>>;
/**
 * The button that toggles the menu.
 */
declare function MenuTrigger<T extends ValidComponent = "button">(props: PolymorphicProps<T, MenuTriggerProps<T>>): JSX.Element;

export { MenuTriggerProps as M, MenuTriggerCommonProps as a, MenuTriggerOptions as b, MenuTriggerRenderProps as c, MenuTrigger as d };
