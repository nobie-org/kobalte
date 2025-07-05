export { COLOR_MODE_STORAGE_KEY, ColorMode, ColorModeContext, ColorModeContextType, ColorModeOptions, ColorModeProvider, ColorModeProviderProps, ColorModeScript, ColorModeScriptProps, ColorModeStorageManager, ConfigColorMode, MaybeConfigColorMode, cookieStorageManager, cookieStorageManagerSSR, createCookieStorageManager, createLocalStorageManager, localStorageManager, useColorMode, useColorModeValue } from './color-mode/index.js';
import { MaybeAccessor, ValidationState, Orientation } from '@kobalte/utils';
export { OverrideComponentProps, OverrideProps } from '@kobalte/utils';
import { f as FormControlContextValue } from './form-control-description-330657bc.js';
export { g as FormControlContext, F as FormControlDataSet, a as FormControlDescription, c as FormControlDescriptionCommonProps, b as FormControlDescriptionOptions, e as FormControlDescriptionProps, d as FormControlDescriptionRenderProps, u as useFormControlContext } from './form-control-description-330657bc.js';
export { F as FormControlErrorMessage, b as FormControlErrorMessageCommonProps, a as FormControlErrorMessageOptions, d as FormControlErrorMessageProps, c as FormControlErrorMessageRenderProps } from './form-control-error-message-9efcbea8.js';
export { F as FormControlLabel, b as FormControlLabelCommonProps, a as FormControlLabelOptions, d as FormControlLabelProps, c as FormControlLabelRenderProps } from './form-control-label-2a5ca7a3.js';
export { DateFormatterOptions, Direction, Filter, I18nProvider, RTL_LANGS, createCollator, createDateFormatter, createDefaultLocale, createFilter, createNumberFormatter, getDefaultLocale, getReadingDirection, isRTL, useLocale } from './i18n/index.js';
import { M as MultipleSelectionManager, K as KeyboardDelegate, F as FocusStrategy } from './create-list-state-d9a0f1f2.js';
export { C as CreateListStateProps, b as CreateMultipleSelectionStateProps, i as FocusState, L as ListState, g as MultipleSelection, k as MultipleSelectionState, h as Selection, a as SelectionBehavior, e as SelectionManager, S as SelectionMode, f as SingleSelection, j as SingleSelectionState, c as createListState, d as createMultipleSelectionState } from './create-list-state-d9a0f1f2.js';
import * as solid_js from 'solid-js';
import { Accessor, JSX } from 'solid-js';
import { C as Collection, a as CollectionNode } from './types-f8ae18e5.js';
export { b as CollectionBase, d as CollectionItem, c as CollectionItemWithRef } from './types-f8ae18e5.js';
export { C as CreateSingleSelectListStateProps, S as SingleSelectListState, i as Tabs, c as createSingleSelectListState } from './index-d652f235.js';
export { ElementOf, Polymorphic, PolymorphicAttributes, PolymorphicCallbackProps, PolymorphicProps } from './polymorphic/index.js';
export { CreateCollectionProps, createCollection, getItemCount } from './primitives/create-collection/index.js';
export { CreateControllableSignalProps, createControllableArraySignal, createControllableBooleanSignal, createControllableSetSignal, createControllableSignal } from './primitives/create-controllable-signal/index.js';
export { CreateDisclosureStateProps, CreateDisclosureStateResult, createDisclosureState } from './primitives/create-disclosure-state/index.js';
export { CreateEscapeKeyDownProps, createEscapeKeyDown } from './primitives/create-escape-key-down/index.js';
export { CreateFocusScopeProps, createFocusScope } from './primitives/create-focus-scope/index.js';
export { createFormResetListener } from './primitives/create-form-reset-listener/index.js';
export { CreateHideOutsideProps, ariaHideOutside, createHideOutside } from './primitives/create-hide-outside/index.js';
export { CreateInteractOutsideProps, FocusOutsideEvent, InteractOutsideEvent, PointerDownOutsideEvent, createInteractOutside } from './primitives/create-interact-outside/index.js';
export { createRegisterId } from './primitives/create-register-id/index.js';
export { createTagName } from './primitives/create-tag-name/index.js';
export { CreateToggleStateProps, ToggleState, createToggleState } from './primitives/create-toggle-state/index.js';
export { TransitionOptions, TransitionResult, TransitionStyles, createTransition } from './primitives/create-transition/index.js';
export { i as Toast, t as toaster } from './index-766ec211.js';
export { i as Accordion } from './index-4cb1a0c7.js';
export { i as Alert } from './index-3a4165aa.js';
export { i as AlertDialog } from './index-637af6a3.js';
export { i as Breadcrumbs } from './index-a8504bc6.js';
export { i as Button } from './index-79050fd4.js';
export { i as Checkbox } from './index-4860350b.js';
export { i as Collapsible } from './index-64ed0578.js';
export { i as Combobox } from './index-42fe8e12.js';
export { i as ContextMenu } from './index-c05c1f9b.js';
export { i as Dialog } from './index-df27bfc9.js';
export { i as DropdownMenu } from './index-4938fb29.js';
export { i as HoverCard } from './index-23432411.js';
export { i as Image } from './index-71913923.js';
export { i as Link } from './index-78f1e72b.js';
export { i as Listbox } from './index-29c57b8d.js';
export { i as Menubar } from './index-f664825e.js';
export { i as NumberField } from './index-72e4cb77.js';
export { i as Pagination } from './index-19a0ff67.js';
export { i as Popover } from './index-e5682983.js';
export { i as Progress } from './index-5eae1bf9.js';
export { i as RadioGroup } from './index-d734f7ac.js';
export { i as Select } from './index-30251fee.js';
export { i as Separator } from './index-4933558f.js';
export { i as Skeleton } from './index-8dfcce13.js';
export { i as Slider } from './index-929e4c7c.js';
export { i as Switch } from './index-2a97f0d5.js';
export { i as TextField } from './index-8b78f50e.js';
export { i as ToggleButton } from './index-339032c6.js';
export { i as ToggleGroup } from './index-68c6e688.js';
export { i as Tooltip } from './index-e2a3bfb4.js';
import '@internationalized/date';
import '@internationalized/number';
import './types-6adf33e1.js';
import './button-root-da654b3e.js';
import './collapsible-trigger-6358fcd4.js';
import './dialog-trigger-f96c918f.js';
import './dismissable-layer-0aef6de3.js';
import 'solid-js/web';
import './combobox-root-a533b55f.js';
import './listbox-section-58338bda.js';
import './popper-root-14a88a55.js';
import './listbox-item-indicator-b8390ce9.js';
import './menu-sub-trigger-f49e6466.js';
import './separator-root-cb685406.js';
import './menu-trigger-ad8c7614.js';
import './link-root-bf54d4f3.js';
import './menubar-context-45b1ed7b.js';
import './number-field-root-30f25adc.js';
import './spin-button-root-3a44420a.js';
import './meter-value-label-797727cd.js';
import './radio-group-root-0af7f9b9.js';
import './slider-value-label-2be90f59.js';
import './text-field-root-0b8dfa5a.js';
import './toggle-button-root-1cfacf95.js';

interface CreateFormControlProps {
    /**
     * A unique identifier for the component.
     * The id is used to generate id attributes for nested components.
     * If no id prop is provided, a generated id will be used.
     */
    id?: MaybeAccessor<string | undefined>;
    /**
     * The name of the form control.
     * Submitted with its owning form as part of a name/value pair.
     */
    name?: MaybeAccessor<string | undefined>;
    /** Whether the form control should display its "valid" or "invalid" visual styling. */
    validationState?: MaybeAccessor<ValidationState | undefined>;
    /** Whether the user must fill the form control before the owning form can be submitted. */
    required?: MaybeAccessor<boolean | undefined>;
    /** Whether the form control is disabled. */
    disabled?: MaybeAccessor<boolean | undefined>;
    /** Whether the form control is read only. */
    readOnly?: MaybeAccessor<boolean | undefined>;
}
declare const FORM_CONTROL_PROP_NAMES: readonly ["id", "name", "validationState", "required", "disabled", "readOnly"];
declare function createFormControl(props: CreateFormControlProps): {
    formControlContext: FormControlContextValue;
};

interface CreateFormControlFieldProps {
    /**
     * The HTML id attribute of the field.
     * If no id prop is provided, a generated id will be used.
     */
    id?: MaybeAccessor<string | undefined>;
    /** The HTML aria-label attribute of the field. */
    "aria-label"?: MaybeAccessor<string | undefined>;
    /** The HTML aria-labelledby attribute of the field. */
    "aria-labelledby"?: MaybeAccessor<string | undefined>;
    /** The HTML  attribute of the field. */
    "aria-describedby"?: MaybeAccessor<string | undefined>;
}
declare const FORM_CONTROL_FIELD_PROP_NAMES: readonly ["id", "aria-label", "aria-labelledby", "aria-describedby"];
declare function createFormControlField(props: CreateFormControlFieldProps): {
    fieldProps: {
        id: () => string;
        ariaLabel: () => string | undefined;
        ariaLabelledBy: () => string | undefined;
        ariaDescribedBy: () => string | undefined;
    };
};

interface CreateSelectableCollectionProps {
    /** An interface for reading and updating multiple selection state. */
    selectionManager: MaybeAccessor<MultipleSelectionManager>;
    /** A delegate object that implements behavior for keyboard focus movement. */
    keyboardDelegate: MaybeAccessor<KeyboardDelegate>;
    /** Whether the collection or one of its items should be automatically focused upon render. */
    autoFocus?: MaybeAccessor<boolean | FocusStrategy | undefined>;
    /** Whether the autofocus should run on next tick. */
    deferAutoFocus?: MaybeAccessor<boolean | undefined>;
    /** Whether focus should wrap around when the end/start is reached. */
    shouldFocusWrap?: MaybeAccessor<boolean | undefined>;
    /** Whether the collection allows empty selection. */
    disallowEmptySelection?: MaybeAccessor<boolean | undefined>;
    /** Whether the collection allows the user to select all items via keyboard shortcut. */
    disallowSelectAll?: MaybeAccessor<boolean | undefined>;
    /** Whether selection should occur automatically on focus. */
    selectOnFocus?: MaybeAccessor<boolean | undefined>;
    /** Whether typeahead is disabled. */
    disallowTypeAhead?: MaybeAccessor<boolean | undefined>;
    /** Whether the collection items should use virtual focus instead of being focused directly. */
    shouldUseVirtualFocus?: MaybeAccessor<boolean | undefined>;
    /** Whether navigation through tab key is enabled. */
    allowsTabNavigation?: MaybeAccessor<boolean | undefined>;
    /** Whether the collection items are contained in a virtual scroller. */
    isVirtualized?: MaybeAccessor<boolean | undefined>;
    /** When virtualized, the Virtualizer function used to scroll to the item of the key provided. */
    scrollToKey?: (key: string) => void;
    /** The orientation of the selectable collection interactions. */
    orientation?: MaybeAccessor<Orientation | undefined>;
}
/**
 * Handles interactions with selectable collections.
 * @param props Props for the collection.
 * @param ref The ref attached to the element representing the collection.
 * @param scrollRef The ref attached to the scrollable body. Used to provide automatic scrolling on item focus for non-virtualized collections. If not provided, defaults to the collection ref.
 */
declare function createSelectableCollection<T extends HTMLElement, U extends HTMLElement = T>(props: CreateSelectableCollectionProps, ref: Accessor<T | undefined>, scrollRef?: Accessor<U | undefined>): {
    tabIndex: Accessor<0 | -1 | undefined>;
    onKeyDown: JSX.EventHandler<HTMLElement, KeyboardEvent>;
    onMouseDown: JSX.EventHandler<HTMLElement, MouseEvent>;
    onFocusIn: JSX.EventHandler<HTMLElement, FocusEvent>;
    onFocusOut: JSX.EventHandler<HTMLElement, FocusEvent>;
};

interface CreateSelectableItemProps {
    /** An interface for reading and updating multiple selection state. */
    selectionManager: MaybeAccessor<MultipleSelectionManager>;
    /** A unique key for the item. */
    key: MaybeAccessor<string>;
    /**
     * By default, selection occurs on pointer down. This can be strange if selecting an
     * item causes the UI to disappear immediately (e.g. menus).
     */
    shouldSelectOnPressUp?: MaybeAccessor<boolean | undefined>;
    /** Whether the option should use virtual focus instead of being focused directly. */
    shouldUseVirtualFocus?: MaybeAccessor<boolean | undefined>;
    /**
     * Whether selection requires the pointer/mouse down and up events to occur on the same target or triggers selection on
     * the target of the pointer/mouse up event.
     */
    allowsDifferentPressOrigin?: MaybeAccessor<boolean | undefined>;
    /** Whether the option is contained in a virtual scroller. */
    virtualized?: MaybeAccessor<boolean | undefined>;
    /** Whether the item is disabled. */
    disabled?: MaybeAccessor<boolean | undefined>;
    /** Function to focus the item. */
    focus?: () => void;
}
/**
 * Handles interactions with an item in a selectable collection.
 * @param props Props for the item.
 * @param ref Ref to the item.
 */
declare function createSelectableItem<T extends HTMLElement>(props: CreateSelectableItemProps, ref: Accessor<T | undefined>): {
    isSelected: () => boolean;
    isDisabled: () => boolean;
    allowsSelection: () => boolean;
    tabIndex: Accessor<0 | -1 | undefined>;
    dataKey: Accessor<string | undefined>;
    onPointerDown: JSX.EventHandler<any, PointerEvent>;
    onPointerUp: JSX.EventHandler<any, PointerEvent>;
    onClick: JSX.EventHandler<any, MouseEvent>;
    onKeyDown: JSX.EventHandler<any, KeyboardEvent>;
    onMouseDown: (e: MouseEvent) => void;
    onFocus: (e: FocusEvent) => void;
};

interface CreateTypeSelectProps {
    /** Whether the type to select should be disabled. */
    isDisabled?: MaybeAccessor<boolean | undefined>;
    /** A delegate that returns collection item keys with respect to visual layout. */
    keyboardDelegate: MaybeAccessor<KeyboardDelegate>;
    /** An interface for reading and updating multiple selection state. */
    selectionManager: MaybeAccessor<MultipleSelectionManager>;
    /** Called when an item is focused by typing. */
    onTypeSelect?: (key: string) => void;
}
/**
 * Handles typeahead interactions with collections.
 */
declare function createTypeSelect(props: CreateTypeSelectProps): {
    typeSelectHandlers: {
        onKeyDown: (e: KeyboardEvent) => void;
    };
};

interface CreateSelectableListProps {
    /** State of the collection. */
    collection: Accessor<Collection<CollectionNode>>;
    /** An interface for reading and updating multiple selection state. */
    selectionManager: MaybeAccessor<MultipleSelectionManager>;
    /** A delegate that returns collection item keys with respect to visual layout. */
    keyboardDelegate?: MaybeAccessor<KeyboardDelegate | undefined>;
    /** Whether the collection or one of its items should be automatically focused upon render. */
    autoFocus?: MaybeAccessor<boolean | FocusStrategy | undefined>;
    /** Whether the autofocus should run on next tick. */
    deferAutoFocus?: MaybeAccessor<boolean | undefined>;
    /** Whether focus should wrap around when the end/start is reached. */
    shouldFocusWrap?: MaybeAccessor<boolean | undefined>;
    /** Whether the collection allows empty selection. */
    disallowEmptySelection?: MaybeAccessor<boolean | undefined>;
    /** Whether selection should occur automatically on focus. */
    selectOnFocus?: MaybeAccessor<boolean | undefined>;
    /** Whether typeahead is disabled. */
    disallowTypeAhead?: MaybeAccessor<boolean | undefined>;
    /** Whether the collection items should use virtual focus instead of being focused directly. */
    shouldUseVirtualFocus?: MaybeAccessor<boolean | undefined>;
    /** Whether navigation through tab key is enabled. */
    allowsTabNavigation?: MaybeAccessor<boolean | undefined>;
    /** Whether the option is contained in a virtual scroller. */
    isVirtualized?: MaybeAccessor<boolean | undefined>;
    /** When virtualized, the Virtualizer function used to scroll to the item of the key provided. */
    scrollToKey?: MaybeAccessor<((key: string) => void) | undefined>;
    /** The orientation of the selectable list. */
    orientation?: MaybeAccessor<Orientation | undefined>;
}
/**
 * Handles interactions with a selectable list.
 * @param props Props for the list.
 * @param ref A ref to the list element.
 * @param scrollRef The ref attached to the scrollable body. Used to provide automatic scrolling on item focus for non-virtualized collections. If not provided, defaults to the collection ref.
 */
declare function createSelectableList<T extends HTMLElement, U extends HTMLElement = T>(props: CreateSelectableListProps, ref: Accessor<T | undefined>, scrollRef?: Accessor<U | undefined>): {
    tabIndex: Accessor<0 | -1 | undefined>;
    onKeyDown: solid_js.JSX.EventHandler<HTMLElement, KeyboardEvent>;
    onMouseDown: solid_js.JSX.EventHandler<HTMLElement, MouseEvent>;
    onFocusIn: solid_js.JSX.EventHandler<HTMLElement, FocusEvent>;
    onFocusOut: solid_js.JSX.EventHandler<HTMLElement, FocusEvent>;
};

declare class ListCollection implements Collection<CollectionNode> {
    private keyMap;
    private iterable;
    private firstKey?;
    private lastKey?;
    constructor(nodes: Iterable<CollectionNode>);
    [Symbol.iterator](): Generator<CollectionNode<any>, void, undefined>;
    getSize(): number;
    getKeys(): IterableIterator<string>;
    getKeyBefore(key: string): string | undefined;
    getKeyAfter(key: string): string | undefined;
    getFirstKey(): string | undefined;
    getLastKey(): string | undefined;
    getItem(key: string): CollectionNode<any> | undefined;
    at(idx: number): CollectionNode<any> | undefined;
}

declare class ListKeyboardDelegate implements KeyboardDelegate {
    private collection;
    private ref?;
    private collator?;
    constructor(collection: Accessor<Collection<CollectionNode>>, ref?: Accessor<HTMLElement | undefined>, collator?: Accessor<Intl.Collator | undefined>);
    getKeyBelow(key: string): string | undefined;
    getKeyAbove(key: string): string | undefined;
    getFirstKey(): string | undefined;
    getLastKey(): string | undefined;
    private getItem;
    getKeyPageAbove(key: string): string | undefined;
    getKeyPageBelow(key: string): string | undefined;
    getKeyForSearch(search: string, fromKey?: string): string | undefined;
}

type Assertiveness = "assertive" | "polite";
declare const DATA_LIVE_ANNOUNCER_ATTR = "data-live-announcer";
/**
 * Announces the message using screen reader technology.
 */
declare function announce(message: string, assertiveness?: Assertiveness, timeout?: number): void;
/**
 * Stops all queued announcements.
 */
declare function clearAnnouncer(assertiveness: Assertiveness): void;
/**
 * Removes the announcer from the DOM.
 */
declare function destroyAnnouncer(): void;

export { Collection, CollectionNode, CreateFormControlFieldProps, CreateFormControlProps, CreateSelectableItemProps, CreateSelectableListProps, DATA_LIVE_ANNOUNCER_ATTR, FORM_CONTROL_FIELD_PROP_NAMES, FORM_CONTROL_PROP_NAMES, FocusStrategy, FormControlContextValue, KeyboardDelegate, ListCollection, ListKeyboardDelegate, MultipleSelectionManager, announce, clearAnnouncer, createFormControl, createFormControlField, createSelectableCollection, createSelectableItem, createSelectableList, createTypeSelect, destroyAnnouncer };
