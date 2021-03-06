export interface ObjectUnsubscribedError extends Error {
}

export interface ObjectUnsubscribedErrorCtor {
  new(): ObjectUnsubscribedError;
}

function ObjectUnsubscribedErrorImpl(this: any) {
  Error.call(this);
  this.message = 'object unsubscribed';
  this.name = 'ObjectUnsubscribedError';
  return this;
}

ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);

/**
 * An error thrown when an action is invalid because the object has been
 * unsubscribed.
 *
 * @see {@link Subject}
 * @see {@link BehaviorSubject}
 * @see {@link Observable.prototype.forEach}
 *
 * @class ObjectUnsubscribedError
 */
export const ObjectUnsubscribedError: ObjectUnsubscribedErrorCtor = ObjectUnsubscribedErrorImpl as any;
