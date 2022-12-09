/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/bfce84fee12a027d9cbc38b43e1747e3e4b4b169/packages/@react-stately/list/src/ListCollection.ts
 */

import { Collection, CollectionNode, CollectionKey } from "../primitives";

export class ListCollection implements Collection<CollectionNode> {
  private keyMap: Map<CollectionKey, CollectionNode> = new Map();
  private iterable: Iterable<CollectionNode>;
  private firstKey?: CollectionKey;
  private lastKey?: CollectionKey;

  constructor(nodes: Iterable<CollectionNode>) {
    this.iterable = nodes;

    const visit = (node: CollectionNode) => {
      this.keyMap.set(node.key, node);

      if (node.childNodes && node.type === "section") {
        for (const child of node.childNodes) {
          visit(child);
        }
      }
    };

    for (const node of nodes) {
      visit(node);
    }

    if (this.keyMap.size === 0) {
      return;
    }

    let last!: CollectionNode;
    let index = 0;

    for (const [key, node] of this.keyMap) {
      if (last) {
        last.nextKey = key;
        node.prevKey = last.key;
      } else {
        this.firstKey = key;
        node.prevKey = undefined;
      }

      if (node.type === "item") {
        node.index = index++;
      }

      last = node;

      // Set nextKey as undefined since this might be the last node
      // If it isn't the last node, last.nextKey will properly set at start of new loop
      last.nextKey = undefined;
    }

    this.lastKey = last.key;
  }

  *[Symbol.iterator]() {
    yield* this.iterable;
  }

  getSize() {
    return this.keyMap.size;
  }

  getKeys() {
    return this.keyMap.keys();
  }

  getKeyBefore(key: CollectionKey) {
    return this.keyMap.get(key)?.prevKey;
  }

  getKeyAfter(key: CollectionKey) {
    return this.keyMap.get(key)?.nextKey;
  }

  getFirstKey() {
    return this.firstKey;
  }

  getLastKey() {
    return this.lastKey;
  }

  getItem(key: CollectionKey) {
    return this.keyMap.get(key);
  }

  at(idx: number) {
    const keys = [...this.getKeys()];
    return this.getItem(keys[idx]);
  }
}