import * as solid_js from 'solid-js';
import { Accessor, JSX, ValidComponent, ComponentProps, ParentProps } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { Portal } from 'solid-js/web';
import { Orientation } from '@kobalte/utils';
import { g as PopperRootOptions } from './popper-root-14a88a55.js';
import { D as DismissableLayerRenderProps } from './dismissable-layer-0aef6de3.js';
import { PointerDownOutsideEvent, FocusOutsideEvent, InteractOutsideEvent } from './primitives/create-interact-outside/index.js';

interface MenuOptions extends Omit<PopperRootOptions, "anchorRef" | "contentRef" | "onCurrentPlacementChange"> {
    /** The controlled open state of the menu. */
    open?: boolean;
    /**
     * The default open state when initially rendered.
     * Useful when you do not need to control the open state.
     */
    defaultOpen?: boolean;
    /** Event handler called when the open state of the menu changes. */
    onOpenChange?: (isOpen: boolean) => void;
    /** Whether to prevent auto-focus when the menu is closed. */
    preventAutoFocusWhenClosed?: boolean;
}

interface MenuItemDataSet {
    "data-indeterminate": string | undefined;
    "data-checked": string | undefined;
    "data-disabled": string | undefined;
    "data-highlighted": string | undefined;
}
interface MenuItemContextValue {
    isChecked: Accessor<boolean | undefined>;
    dataset: Accessor<MenuItemDataSet>;
    setLabelRef: (el: HTMLElement) => void;
    generateId: (part: string) => string;
    registerLabel: (id: string) => () => void;
    registerDescription: (id: string) => () => void;
}
declare function useMenuItemContext(): MenuItemContextValue;

interface MenuItemBaseOptions {
    /**
     * Optional text used for typeahead purposes.
     * By default, the typeahead behavior will use the .textContent of the Menu.ItemLabel part
     * if provided, or fallback to the .textContent of the Menu.Item.
     * Use this when the content is complex, or you have non-textual content inside.
     */
    textValue?: string;
    /** Whether the menu item is disabled. */
    disabled?: boolean;
    /** Whether the menu item is checked (item radio or item checkbox). */
    checked?: boolean;
    /**
     * When using menu item checkbox, whether the checked state is in an indeterminate mode.
     * Indeterminism is presentational only.
     * The indeterminate visual representation remains regardless of user interaction.
     */
    indeterminate?: boolean;
    /** Whether the menu should close when the menu item is activated/selected. */
    closeOnSelect?: boolean;
    /** Event handler called when the user selects an item (via mouse or keyboard). */
    onSelect?: () => void;
}
interface MenuItemBaseCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
    onPointerMove: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerLeave: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerUp: JSX.EventHandlerUnion<T, PointerEvent>;
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
    onMouseDown: JSX.EventHandlerUnion<T, MouseEvent>;
    onFocus: JSX.EventHandlerUnion<T, FocusEvent>;
}
interface MenuItemBaseRenderProps extends MenuItemBaseCommonProps, MenuItemDataSet {
    tabIndex: number | undefined;
    "aria-checked": boolean | "mixed" | undefined;
    "aria-disabled": boolean | undefined;
    "aria-labelledby": string | undefined;
    "aria-describedby": string | undefined;
    "data-key": string | undefined;
}

interface MenuCheckboxItemOptions extends Omit<MenuItemBaseOptions, "checked"> {
    /** The controlled checked state of the menu item checkbox. */
    checked?: boolean;
    /**
     * The default checked state when initially rendered.
     * Useful when you do not need to control the checked state.
     */
    defaultChecked?: boolean;
    /** Event handler called when the checked state of the menu item checkbox changes. */
    onChange?: (isChecked: boolean) => void;
}
interface MenuCheckboxItemCommonProps<T extends HTMLElement = HTMLElement> extends MenuItemBaseCommonProps<T> {
}
interface MenuCheckboxItemRenderProps extends MenuCheckboxItemCommonProps, MenuItemBaseRenderProps {
    role: "menuitemcheckbox";
}
type MenuCheckboxItemProps<T extends ValidComponent | HTMLElement = HTMLElement> = MenuCheckboxItemOptions & Partial<MenuCheckboxItemCommonProps<ElementOf<T>>>;
/**
 * An item that can be controlled and rendered like a checkbox.
 */
declare function MenuCheckboxItem<T extends ValidComponent = "div">(props: PolymorphicProps<T, MenuCheckboxItemProps<T>>): solid_js.JSX.Element;

interface MenuDataSet {
    "data-expanded": string | undefined;
    "data-closed": string | undefined;
}

interface MenuContentBaseOptions {
    /**
     * Event handler called when focus moves into the component after opening.
     * It can be prevented by calling `event.preventDefault`.
     */
    onOpenAutoFocus?: (event: Event) => void;
    /**
     * Event handler called when focus moves to the trigger after closing.
     * It can be prevented by calling `event.preventDefault`.
     */
    onCloseAutoFocus?: (event: Event) => void;
    /**
     * Event handler called when the escape key is down.
     * It can be prevented by calling `event.preventDefault`.
     */
    onEscapeKeyDown?: (event: KeyboardEvent) => void;
    /**
     * Event handler called when a pointer event occurs outside the bounds of the component.
     * It can be prevented by calling `event.preventDefault`.
     */
    onPointerDownOutside?: (event: PointerDownOutsideEvent) => void;
    /**
     * Event handler called when the focus moves outside the bounds of the component.
     * It can be prevented by calling `event.preventDefault`.
     */
    onFocusOutside?: (event: FocusOutsideEvent) => void;
    /**
     * Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component.
     * It can be prevented by calling `event.preventDefault`.
     */
    onInteractOutside?: (event: InteractOutsideEvent) => void;
}
interface MenuContentBaseCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
    onPointerEnter: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerMove: JSX.EventHandlerUnion<T, PointerEvent>;
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
    onMouseDown: JSX.EventHandlerUnion<T, MouseEvent>;
    onFocusIn: JSX.EventHandlerUnion<T, FocusEvent>;
    onFocusOut: JSX.EventHandlerUnion<T, FocusEvent>;
    style?: JSX.CSSProperties | string;
}
interface MenuContentBaseRenderProps extends MenuContentBaseCommonProps, DismissableLayerRenderProps, MenuDataSet {
    role: "menu";
    tabIndex: number | undefined;
    "aria-labelledby": string | undefined;
    "data-orientation": Orientation;
}

interface MenuContentOptions extends MenuContentBaseOptions {
}
interface MenuContentCommonProps<T extends HTMLElement = HTMLElement> extends MenuContentBaseCommonProps<T> {
}
interface MenuContentRenderProps extends MenuContentCommonProps, MenuContentBaseRenderProps {
}
type MenuContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = MenuContentOptions & Partial<MenuContentCommonProps<ElementOf<T>>>;
declare function MenuContent<T extends ValidComponent = "div">(props: PolymorphicProps<T, MenuContentProps<T>>): solid_js.JSX.Element;

interface MenuGroupOptions {
}
interface MenuGroupCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface MenuGroupRenderProps extends MenuGroupCommonProps {
    role: "group";
    "aria-labelledby": string | undefined;
}
type MenuGroupProps<T extends ValidComponent | HTMLElement = HTMLElement> = MenuGroupOptions & Partial<MenuGroupCommonProps<ElementOf<T>>>;
/**
 * A container used to group multiple `Menu.Item`s.
 */
declare function MenuGroup<T extends ValidComponent = "div">(props: PolymorphicProps<T, MenuGroupProps<T>>): solid_js.JSX.Element;

interface MenuGroupLabelOptions {
}
interface MenuGroupLabelCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface MenuGroupLabelRenderProps extends MenuGroupLabelCommonProps {
    "aria-hidden": "true";
}
type MenuGroupLabelProps<T extends ValidComponent | HTMLElement = HTMLElement> = MenuGroupLabelOptions & Partial<MenuGroupLabelCommonProps<ElementOf<T>>>;
/**
 * A component used to render the label of a `Menu.Group`.
 * It won't be focusable using arrow keys.
 */
declare function MenuGroupLabel<T extends ValidComponent = "span">(props: PolymorphicProps<T, MenuGroupLabelProps<T>>): solid_js.JSX.Element;

interface MenuIconOptions {
}
interface MenuIconCommonProps<T extends HTMLElement = HTMLElement> {
    children: JSX.Element;
}
interface MenuIconRenderProps extends MenuIconCommonProps, MenuDataSet {
    "aria-hidden": "true";
}
type MenuIconProps<T extends ValidComponent | HTMLElement = HTMLElement> = MenuIconOptions & Partial<MenuIconCommonProps<ElementOf<T>>>;
/**
 * A small icon often displayed inside the menu trigger as a visual affordance for the fact it can be open.
 * It renders a `▼` by default, but you can use your own icon by providing a `children`.
 */
declare function MenuIcon<T extends ValidComponent = "span">(props: PolymorphicProps<T, MenuIconProps<T>>): JSX.Element;

interface MenuItemOptions extends Omit<MenuItemBaseOptions, "checked" | "indeterminate"> {
}
interface MenuItemCommonProps<T extends HTMLElement = HTMLElement> extends MenuItemBaseCommonProps<T> {
}
interface MenuItemRenderProps extends MenuItemCommonProps, MenuItemBaseRenderProps {
    role: "menuitem";
}
type MenuItemProps<T extends ValidComponent | HTMLElement = HTMLElement> = MenuItemOptions & Partial<MenuItemCommonProps<ElementOf<T>>>;
/**
 * An item of the menu.
 */
declare function MenuItem<T extends ValidComponent = "div">(props: PolymorphicProps<T, MenuItemProps<T>>): solid_js.JSX.Element;

interface MenuItemDescriptionOptions {
}
interface MenuItemDescriptionCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface MenuItemDescriptionRenderProps extends MenuItemDescriptionCommonProps, MenuItemDataSet {
}
type MenuItemDescriptionProps<T extends ValidComponent | HTMLElement = HTMLElement> = MenuItemDescriptionOptions & Partial<MenuItemDescriptionCommonProps<ElementOf<T>>>;
/**
 * An optional accessible description to be announced for the menu item.
 * Useful for menu items that have more complex content (e.g. icons, multiple lines of text, etc.)
 */
declare function MenuItemDescription<T extends ValidComponent = "div">(props: PolymorphicProps<T, MenuItemDescriptionProps<T>>): solid_js.JSX.Element;

interface MenuItemIndicatorOptions {
    /**
     * Used to force mounting when more control is needed.
     * Useful when controlling animation with SolidJS animation libraries.
     */
    forceMount?: boolean;
}
interface MenuItemIndicatorCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface MenuItemIndicatorRenderProps extends MenuItemIndicatorCommonProps, MenuItemDataSet {
}
type MenuItemIndicatorProps<T extends ValidComponent | HTMLElement = HTMLElement> = MenuItemIndicatorOptions & Partial<MenuItemIndicatorCommonProps<ElementOf<T>>>;
/**
 * The visual indicator rendered when the parent menu `CheckboxItem` or `RadioItem` is checked.
 * You can style this element directly, or you can use it as a wrapper to put an icon into, or both.
 */
declare function MenuItemIndicator<T extends ValidComponent = "div">(props: PolymorphicProps<T, MenuItemIndicatorProps<T>>): solid_js.JSX.Element;

interface MenuItemLabelOptions {
}
interface MenuItemLabelCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
}
interface MenuItemLabelRenderProps extends MenuItemLabelCommonProps, MenuItemDataSet {
}
type MenuItemLabelProps<T extends ValidComponent | HTMLElement = HTMLElement> = MenuItemLabelOptions & Partial<MenuItemLabelCommonProps<ElementOf<T>>>;
/**
 * An accessible label to be announced for the menu item.
 * Useful for menu items that have more complex content (e.g. icons, multiple lines of text, etc.)
 */
declare function MenuItemLabel<T extends ValidComponent = "div">(props: PolymorphicProps<T, MenuItemLabelProps<T>>): solid_js.JSX.Element;

interface MenuPortalProps extends ComponentProps<typeof Portal> {
}
/**
 * Portals its children into the `body` when the menu is open.
 */
declare function MenuPortal(props: MenuPortalProps): solid_js.JSX.Element;

interface MenuRadioGroupOptions<TValue = string> {
    /** The controlled value of the item radio to check. */
    value?: TValue;
    /**
     * The value of the item radio that should be checked when initially rendered.
     * Useful when you do not need to control the state of the menu radio group.
     */
    defaultValue?: TValue;
    /** Event handler called when the value changes. */
    onChange?: (value: TValue) => void;
    /** Whether the menu radio group is disabled. */
    disabled?: boolean;
}
interface MenuRadioGroupCommonProps<T extends HTMLElement = HTMLElement> extends MenuGroupCommonProps<T> {
    id: string;
}
interface MenuRadioGroupRenderProps extends MenuRadioGroupCommonProps, MenuGroupRenderProps {
}
type MenuRadioGroupProps<T extends ValidComponent | HTMLElement = HTMLElement, TValue = string> = MenuRadioGroupOptions<TValue> & Partial<MenuRadioGroupCommonProps<ElementOf<T>>>;
/**
 * A container used to group multiple `Menu.RadioItem`s and manage the selection.
 */
declare function MenuRadioGroup<TValue = string, T extends ValidComponent = "div">(props: PolymorphicProps<T, MenuRadioGroupProps<T, TValue>>): solid_js.JSX.Element;

interface MenuRadioItemOptions<TValue = string> extends Omit<MenuItemBaseOptions, "checked" | "indeterminate"> {
    /** The value of the menu item radio. */
    value: TValue;
}
interface MenuRadioItemCommonProps<T extends HTMLElement = HTMLElement> extends MenuItemBaseCommonProps<T> {
}
interface MenuRadioItemRenderProps extends MenuRadioItemCommonProps, MenuItemBaseRenderProps {
    role: "menuitemradio";
}
type MenuRadioItemProps<T extends ValidComponent | HTMLElement = HTMLElement, TValue = string> = MenuRadioItemOptions<TValue> & Partial<MenuRadioItemCommonProps<ElementOf<T>>>;
/**
 * An item that can be controlled and rendered like a radio.
 */
declare function MenuRadioItem<TValue = string, T extends ValidComponent = "div">(props: PolymorphicProps<T, MenuRadioItemProps<T, TValue>>): solid_js.JSX.Element;

interface MenuRootOptions extends MenuOptions {
    /**
     * A unique identifier for the component.
     * The id is used to generate id attributes for nested components.
     * If no id prop is provided, a generated id will be used.
     */
    id?: string;
    /**
     * Whether the menu should be the only visible content for screen readers.
     * When set to `true`:
     * - interaction with outside elements will be disabled.
     * - scroll will be locked.
     * - focus will be locked inside the menu content.
     * - elements outside the menu content will not be visible for screen readers.
     */
    modal?: boolean;
    /** Whether the scroll should be locked even if the menu is not modal. */
    preventScroll?: boolean;
    /**
     * Used to force mounting the menu (portal, positioner and content) when more control is needed.
     * Useful when controlling animation with SolidJS animation libraries.
     */
    forceMount?: boolean;
    /** The orientation of the menu. */
    orientation?: Orientation;
    /**
     * A unique value that associates the item with an active value
     * when the navigation menu is controlled.
     * This prop is managed automatically when uncontrolled.
     * Only used inside a Menubar.
     */
    value?: string;
}

interface MenuSubOptions extends Omit<MenuOptions, "placement" | "flip" | "sameWidth"> {
}
interface MenuSubProps extends ParentProps<MenuSubOptions> {
}
/**
 * Contains all the parts of a submenu.
 */
declare function MenuSub(props: MenuSubProps): solid_js.JSX.Element;

interface MenuSubContentOptions extends Omit<MenuContentBaseOptions, "onOpenAutoFocus" | "onCloseAutoFocus"> {
}
interface MenuSubContentCommonProps<T extends HTMLElement = HTMLElement> extends MenuContentBaseCommonProps<T> {
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
}
interface MenuSubContentRenderProps extends MenuSubContentCommonProps, MenuContentBaseRenderProps {
}
type MenuSubContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = MenuSubContentOptions & Partial<MenuSubContentCommonProps<ElementOf<T>>>;
/**
 * The component that pops out when a submenu is open.
 */
declare function MenuSubContent<T extends ValidComponent = "div">(props: PolymorphicProps<T, MenuSubContentProps<T>>): JSX.Element;

interface MenuSubTriggerOptions {
    /**
     * Optional text used for typeahead purposes.
     * By default, the typeahead behavior will use the .textContent of the Menu.SubTrigger.
     * Use this when the content is complex, or you have non-textual content inside.
     */
    textValue?: string;
    /** Whether the sub menu trigger is disabled. */
    disabled?: boolean;
}
interface MenuSubTriggerCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
    onPointerMove: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerLeave: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerUp: JSX.EventHandlerUnion<T, PointerEvent>;
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
    onMouseDown: JSX.EventHandlerUnion<T, MouseEvent>;
    onFocus: JSX.EventHandlerUnion<T, FocusEvent>;
}
interface MenuSubTriggerRenderProps extends MenuSubTriggerCommonProps, MenuDataSet {
    role: "menuitem";
    tabIndex: number | undefined;
    "aria-haspopup": "true";
    "aria-expanded": boolean;
    "aria-controls": string | undefined;
    "aria-disabled": boolean | undefined;
    "data-key": string | undefined;
    "data-highlighted": "" | undefined;
    "data-disabled": "" | undefined;
}
type MenuSubTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = MenuSubTriggerOptions & Partial<MenuSubTriggerCommonProps<ElementOf<T>>>;
/**
 * An item that opens a submenu.
 */
declare function MenuSubTrigger<T extends ValidComponent = "div">(props: PolymorphicProps<T, MenuSubTriggerProps<T>>): JSX.Element;

export { MenuRadioGroupCommonProps as $, MenuGroupLabelProps as A, MenuGroupLabelRenderProps as B, MenuGroupOptions as C, MenuGroupProps as D, MenuGroupRenderProps as E, MenuIconCommonProps as F, MenuIconOptions as G, MenuIconProps as H, MenuIconRenderProps as I, MenuItemCommonProps as J, MenuItemDescriptionCommonProps as K, MenuItemDescriptionOptions as L, MenuDataSet as M, MenuItemDescriptionProps as N, MenuItemDescriptionRenderProps as O, MenuItemIndicatorCommonProps as P, MenuItemIndicatorOptions as Q, MenuItemIndicatorProps as R, MenuItemIndicatorRenderProps as S, MenuItemLabelCommonProps as T, MenuItemLabelOptions as U, MenuItemLabelProps as V, MenuItemLabelRenderProps as W, MenuItemOptions as X, MenuItemProps as Y, MenuItemRenderProps as Z, MenuPortalProps as _, MenuCheckboxItem as a, MenuRadioGroupOptions as a0, MenuRadioGroupProps as a1, MenuRadioGroupRenderProps as a2, MenuRadioItemCommonProps as a3, MenuRadioItemOptions as a4, MenuRadioItemRenderProps as a5, MenuRadioItemProps as a6, MenuSubContentCommonProps as a7, MenuSubContentOptions as a8, MenuSubContentProps as a9, MenuSubContentRenderProps as aa, MenuSubOptions as ab, MenuSubProps as ac, MenuSubTriggerCommonProps as ad, MenuSubTriggerOptions as ae, MenuSubTriggerProps as af, MenuSubTriggerRenderProps as ag, MenuRootOptions as ah, useMenuItemContext as ai, MenuContent as b, MenuGroup as c, MenuGroupLabel as d, MenuIcon as e, MenuItem as f, MenuItemDescription as g, MenuItemIndicator as h, MenuItemLabel as i, MenuPortal as j, MenuRadioGroup as k, MenuRadioItem as l, MenuSub as m, MenuSubContent as n, MenuSubTrigger as o, MenuCheckboxItemCommonProps as p, MenuCheckboxItemOptions as q, MenuCheckboxItemProps as r, MenuCheckboxItemRenderProps as s, MenuContentCommonProps as t, MenuContentOptions as u, MenuContentProps as v, MenuContentRenderProps as w, MenuGroupCommonProps as x, MenuGroupLabelCommonProps as y, MenuGroupLabelOptions as z };
