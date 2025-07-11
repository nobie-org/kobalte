import { Orientation } from '@kobalte/utils';
export { Orientation } from '@kobalte/utils';
import { u as MenuContentOptions, t as MenuContentCommonProps, w as MenuContentRenderProps, Y as MenuItemProps, _ as MenuPortalProps, a as MenuCheckboxItem, c as MenuGroup, d as MenuGroupLabel, e as MenuIcon, g as MenuItemDescription, h as MenuItemIndicator, i as MenuItemLabel, k as MenuRadioGroup, l as MenuRadioItem, m as MenuSub, n as MenuSubContent, o as MenuSubTrigger } from '../menu-sub-trigger-f49e6466.js';
export { p as NavigationMenuCheckboxItemCommonProps, q as NavigationMenuCheckboxItemOptions, r as NavigationMenuCheckboxItemProps, s as NavigationMenuCheckboxItemRenderProps, x as NavigationMenuGroupCommonProps, y as NavigationMenuGroupLabelCommonProps, z as NavigationMenuGroupLabelOptions, A as NavigationMenuGroupLabelProps, B as NavigationMenuGroupLabelRenderProps, C as NavigationMenuGroupOptions, D as NavigationMenuGroupProps, E as NavigationMenuGroupRenderProps, F as NavigationMenuIconCommonProps, G as NavigationMenuIconOptions, H as NavigationMenuIconProps, I as NavigationMenuIconRenderProps, J as NavigationMenuItemCommonProps, K as NavigationMenuItemDescriptionCommonProps, L as NavigationMenuItemDescriptionOptions, N as NavigationMenuItemDescriptionProps, O as NavigationMenuItemDescriptionRenderProps, P as NavigationMenuItemIndicatorCommonProps, Q as NavigationMenuItemIndicatorOptions, R as NavigationMenuItemIndicatorProps, S as NavigationMenuItemIndicatorRenderProps, T as NavigationMenuItemLabelCommonProps, U as NavigationMenuItemLabelOptions, V as NavigationMenuItemLabelProps, W as NavigationMenuItemLabelRenderProps, X as NavigationMenuItemOptions, Z as NavigationMenuItemRenderProps, $ as NavigationMenuRadioGroupCommonProps, a0 as NavigationMenuRadioGroupOptions, a1 as NavigationMenuRadioGroupProps, a2 as NavigationMenuRadioGroupRenderProps, a3 as NavigationMenuRadioItemCommonProps, a4 as NavigationMenuRadioItemOptions, a5 as NavigationMenuRadioItemPRenderrops, a6 as NavigationMenuRadioItemProps, a7 as NavigationMenuSubContentCommonProps, a8 as NavigationMenuSubContentOptions, a9 as NavigationMenuSubContentProps, aa as NavigationMenuSubContentRenderProps, ab as NavigationMenuSubOptions, ac as NavigationMenuSubProps, ad as NavigationMenuSubTriggerCommonProps, ae as NavigationMenuSubTriggerOptions, af as NavigationMenuSubTriggerProps, ag as NavigationMenuSubTriggerRenderProps } from '../menu-sub-trigger-f49e6466.js';
import { S as SeparatorRoot } from '../separator-root-cb685406.js';
export { a as NavigationMenuSeparatorCommonProps, b as NavigationMenuSeparatorOptions, c as NavigationMenuSeparatorProps, d as NavigationMenuSeparatorRenderProps } from '../separator-root-cb685406.js';
import * as solid_js from 'solid-js';
import { ValidComponent, JSX, Setter, Accessor } from 'solid-js';
import { ElementOf, PolymorphicProps } from '../polymorphic/index.js';
import { a as PopperArrowOptions, c as PopperArrowCommonProps, d as PopperArrowRenderProps, g as PopperRootOptions, e as Placement } from '../popper-root-14a88a55.js';
import { c as MenubarMenuOptions, d as MenubarMenuProps, f as MenubarRootOptions, e as MenubarRootCommonProps, h as MenubarRootRenderProps, i as MenubarDataSet } from '../menubar-context-45b1ed7b.js';
import { b as MenuTriggerOptions, a as MenuTriggerCommonProps, c as MenuTriggerRenderProps } from '../menu-trigger-ad8c7614.js';
import { D as DismissableLayerRenderProps } from '../dismissable-layer-0aef6de3.js';
import { PointerDownOutsideEvent, FocusOutsideEvent, InteractOutsideEvent } from '../primitives/create-interact-outside/index.js';
import 'solid-js/web';
import '../button-root-da654b3e.js';

interface NavigationMenuArrowOptions extends PopperArrowOptions {
}
interface NavigationMenuArrowCommonProps<T extends HTMLElement = HTMLElement> extends PopperArrowCommonProps<T> {
}
interface NavigationMenuArrowRenderProps extends NavigationMenuArrowCommonProps, PopperArrowRenderProps {
}
type NavigationMenuArrowProps<T extends ValidComponent | HTMLElement = HTMLElement> = NavigationMenuArrowOptions & Partial<NavigationMenuArrowCommonProps<ElementOf<T>>>;
/**
 * An optional arrow element to render alongside the viewport content.
 * Must be rendered in the viewport.
 */
declare function NavigationMenuArrow<T extends ValidComponent = "div">(props: PolymorphicProps<T, NavigationMenuArrowProps<T>>): solid_js.JSX.Element;

type Motion = "to-start" | "to-end" | "from-start" | "from-end";
interface NavigationMenuContentOptions extends MenuContentOptions {
}
interface NavigationMenuContentCommonProps<T extends HTMLElement = HTMLElement> extends MenuContentCommonProps<T> {
    onPointerEnter: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerLeave: JSX.EventHandlerUnion<T, PointerEvent>;
}
interface NavigationMenuContentRenderProps extends MenuContentRenderProps, NavigationMenuContentCommonProps {
    "data-motion"?: Motion;
}
type NavigationMenuContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = NavigationMenuContentOptions & Partial<NavigationMenuContentCommonProps<ElementOf<T>>>;
declare function NavigationMenuContent<T extends ValidComponent = "ul">(props: PolymorphicProps<T, NavigationMenuContentProps<T>>): JSX.Element;

/**
 * An item of the navigation menu.
 */
declare function NavigationMenuItem<T extends ValidComponent = "a">(props: PolymorphicProps<T, MenuItemProps<T>>): solid_js.JSX.Element;

interface NavigationMenuMenuOptions extends MenubarMenuOptions {
}
interface NavigationMenuMenuProps extends MenubarMenuProps {
}
/**
 * Displays a menu to the user —such as a set of actions or functions— triggered by a button.
 */
declare function NavigationMenuMenu(props: NavigationMenuMenuProps): solid_js.JSX.Element;

interface NavigationMenuPortalProps extends MenuPortalProps {
}
/**
 * Portals its children into the NavigationMenu.Viewport when the menu is open.
 */
declare function NavigationMenuPortal(props: NavigationMenuPortalProps): solid_js.JSX.Element;

interface NavigationMenuRootOptions extends MenubarRootOptions, Omit<PopperRootOptions, "anchorRef" | "contentRef" | "onCurrentPlacementChange"> {
    /**
     * Delay before the menu opens on hover (default 200).
     */
    delayDuration?: number;
    /**
     * Open immediately if hovered again within delay (default 300).
     */
    skipDelayDuration?: number;
    /**
     * Used to force mounting when more control is needed.
     * Useful when controlling animation with SolidJS animation libraries.
     */
    forceMount?: boolean;
    autoFocusMenu?: boolean;
    onAutoFocusMenuChange?: Setter<boolean>;
}
interface NavigationMenuRootCommonProps<T extends HTMLElement = HTMLElement> extends MenubarRootCommonProps<T> {
    ref: T | ((el: T) => void);
}
interface NavigationMenuRootRenderProps extends NavigationMenuRootCommonProps, MenubarRootRenderProps {
}
type NavigationMenuRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = NavigationMenuRootOptions & Partial<NavigationMenuRootCommonProps<ElementOf<T>>>;
/**
 * A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
 */
declare function NavigationMenuRoot<T extends ValidComponent = "ul">(props: PolymorphicProps<T, NavigationMenuRootProps<T>>): JSX.Element;

interface NavigationMenuTriggerOptions extends MenuTriggerOptions {
}
interface NavigationMenuTriggerCommonProps<T extends HTMLElement = HTMLElement> extends MenuTriggerCommonProps<T> {
    onPointerEnter: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerLeave: JSX.EventHandlerUnion<T, PointerEvent>;
}
interface NavigationMenuTriggerRenderProps extends NavigationMenuTriggerCommonProps, MenuTriggerRenderProps {
}
type NavigationMenuTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = NavigationMenuTriggerOptions & Partial<NavigationMenuTriggerCommonProps<ElementOf<T>>>;
/**
 * The button that toggles the menubar menu or a menubar link.
 */
declare function NavigationMenuTrigger<T extends ValidComponent = "button">(props: PolymorphicProps<T, NavigationMenuTriggerProps<T>>): JSX.Element;

interface NavigationMenuViewportOptions {
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
interface NavigationMenuViewportCommonProps<T extends HTMLElement = HTMLElement> {
    ref: T | ((el: T) => void);
    style: JSX.CSSProperties | string;
}
interface NavigationMenuViewportRenderProps extends NavigationMenuViewportCommonProps, DismissableLayerRenderProps, MenubarDataSet {
    "data-orientation": Orientation;
}
type NavigationMenuViewportProps<T extends ValidComponent | HTMLElement = HTMLElement> = NavigationMenuViewportOptions & Partial<NavigationMenuViewportCommonProps<ElementOf<T>>>;
declare function NavigationMenuViewport<T extends ValidComponent = "li">(props: PolymorphicProps<T, NavigationMenuViewportProps<T>>): JSX.Element;

interface NavigationMenuDataSet {
    "data-expanded": string | undefined;
    "data-closed": string | undefined;
}
interface NavigationMenuContextValue {
    dataset: Accessor<NavigationMenuDataSet>;
    delayDuration: Accessor<number>;
    skipDelayDuration: Accessor<number>;
    autoFocusMenu: Accessor<boolean>;
    setAutoFocusMenu: Setter<boolean>;
    startLeaveTimer: () => void;
    cancelLeaveTimer: () => void;
    rootRef: Accessor<HTMLElement | undefined>;
    setRootRef: Setter<HTMLElement>;
    viewportRef: Accessor<HTMLElement | undefined>;
    setViewportRef: Setter<HTMLElement>;
    viewportPresent: Accessor<boolean>;
    currentPlacement: Accessor<Placement>;
    previousMenu: Accessor<string | undefined>;
    setPreviousMenu: Setter<string | undefined>;
}
declare function useNavigationMenuContext(): NavigationMenuContextValue;

declare const NavigationMenu: typeof NavigationMenuRoot & {
    Arrow: typeof NavigationMenuArrow;
    CheckboxItem: typeof MenuCheckboxItem;
    Content: typeof NavigationMenuContent;
    Group: typeof MenuGroup;
    GroupLabel: typeof MenuGroupLabel;
    Icon: typeof MenuIcon;
    Item: typeof NavigationMenuItem;
    ItemDescription: typeof MenuItemDescription;
    ItemIndicator: typeof MenuItemIndicator;
    ItemLabel: typeof MenuItemLabel;
    Portal: typeof NavigationMenuPortal;
    RadioGroup: typeof MenuRadioGroup;
    RadioItem: typeof MenuRadioItem;
    Menu: typeof NavigationMenuMenu;
    Separator: typeof SeparatorRoot;
    Sub: typeof MenuSub;
    SubContent: typeof MenuSubContent;
    SubTrigger: typeof MenuSubTrigger;
    Trigger: typeof NavigationMenuTrigger;
    Viewport: typeof NavigationMenuViewport;
};

export { NavigationMenuArrow as Arrow, MenuCheckboxItem as CheckboxItem, NavigationMenuContent as Content, MenuGroup as Group, MenuGroupLabel as GroupLabel, MenuIcon as Icon, NavigationMenuItem as Item, MenuItemDescription as ItemDescription, MenuItemIndicator as ItemIndicator, MenuItemLabel as ItemLabel, NavigationMenuMenu as Menu, Motion, NavigationMenu, NavigationMenuArrowCommonProps, NavigationMenuArrowOptions, NavigationMenuArrowProps, NavigationMenuArrowRenderProps, NavigationMenuContentCommonProps, NavigationMenuContentOptions, NavigationMenuContentProps, NavigationMenuContentRenderProps, NavigationMenuContextValue, MenuItemProps as NavigationMenuItemProps, NavigationMenuMenuOptions, NavigationMenuMenuProps, NavigationMenuPortalProps, NavigationMenuRootCommonProps, NavigationMenuRootOptions, NavigationMenuRootProps, NavigationMenuRootRenderProps, NavigationMenuTriggerCommonProps, NavigationMenuTriggerOptions, NavigationMenuTriggerProps, NavigationMenuTriggerRenderProps, NavigationMenuViewportCommonProps, NavigationMenuViewportOptions, NavigationMenuViewportProps, NavigationMenuViewportRenderProps, NavigationMenuPortal as Portal, MenuRadioGroup as RadioGroup, MenuRadioItem as RadioItem, NavigationMenuRoot as Root, SeparatorRoot as Separator, MenuSub as Sub, MenuSubContent as SubContent, MenuSubTrigger as SubTrigger, NavigationMenuTrigger as Trigger, NavigationMenuViewport as Viewport, useNavigationMenuContext };
