import { fireEvent } from '@solidjs/testing-library';
import { beforeAll, vi, afterAll } from 'vitest';

// src/events.ts
function installPointerEvent() {
  beforeAll(() => {
    vi.stubGlobal(
      "PointerEvent",
      class FakePointerEvent extends MouseEvent {
        _init;
        constructor(name, init) {
          super(name, init);
          this._init = init;
        }
        get pointerType() {
          return this._init.pointerType;
        }
        get pointerId() {
          return this._init.pointerId;
        }
        get pageX() {
          return this._init.pageX;
        }
        get pageY() {
          return this._init.pageY;
        }
        get width() {
          return this._init.width;
        }
        get height() {
          return this._init.height;
        }
      }
    );
  });
  afterAll(() => {
    global.PointerEvent = void 0;
  });
}
function createPointerEvent(type, opts) {
  const evt = new Event(type, { bubbles: true, cancelable: true });
  Object.assign(
    evt,
    {
      ctrlKey: false,
      metaKey: false,
      shiftKey: false,
      altKey: false,
      button: opts.button || 0,
      width: 1,
      height: 1
    },
    opts
  );
  return evt;
}

// src/events.ts
async function triggerTouch(element, opts) {
  fireEvent(
    element,
    createPointerEvent("pointerdown", {
      pointerId: 1,
      pointerType: "touch",
      ...opts
    })
  );
  await Promise.resolve();
  fireEvent(
    element,
    createPointerEvent("pointerup", {
      pointerId: 1,
      pointerType: "touch",
      ...opts
    })
  );
  await Promise.resolve();
}
function setupMatchMediaMock() {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      // deprecated
      removeListener: vi.fn(),
      // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
    }))
  });
}

export { createPointerEvent, installPointerEvent, setupMatchMediaMock, triggerTouch };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map