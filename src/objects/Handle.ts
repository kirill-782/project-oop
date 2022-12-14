import { EventCallback, EventSettings, EventTarget } from "../services/EventTarget";
import { RemoveHandleEvent } from "./events/RemoveHandleEvent";

export type Dispatcher<T, S> = (currentValue: T, arg: S) => T;
export type Setter<T, S> = T | Dispatcher<T, S>;

export interface Handle {
  [key: string]: any;
}

export interface NullHandle {
  toHandle: () => null;
}

export const Null: NullHandle = {
  toHandle: () => null,
};

export class Handle extends EventTarget {
  protected handle: HHandle | null;

  public constructor(handle: HHandle) {
    super();
    this.handle = handle;
  }

  public remove() {
    let isRemoved = false;

    this.dispatchEvent(new RemoveHandleEvent(this));

    switch (type(this.handle)) {
      case "unit":
        RemoveUnit(this.handle as HUnit);
        isRemoved = true;
        break;

      case "timer":
        DestroyTimer(this.handle as HTimer);
        isRemoved = true;
        break;

      case "item":
        RemoveItem(this.handle as HItem);
        isRemoved = true;
        break;

      case "player":
        throw new Error("Unable remove player");
    }

    if (isRemoved) {
      this.handle = null;
    }
  }

  public isHandleAlive() {
    return this.handle !== null;
  }

  public toHandle() {
    return this.handle;
  }

  public addEventListener(type: "remove", listener: (event: RemoveHandleEvent<Handle>) => void, once?: EventSettings): void;
  public addEventListener(type: string, listener: EventCallback, settings?: EventSettings): void;
  public addEventListener(type: string, listener: EventCallback, settings?: EventSettings) {
    super.addEventListener(type, listener, settings);
  }

  get handleId() {
    return GetHandleId(this.handle);
  }

  get type() {
    return type(this.handle);
  }
}
