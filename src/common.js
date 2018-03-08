let subscriptionManager = null;
let handler = null;

export function getSubscribedStatus() { return subscriptionManager != null && subscriptionManager.isSubscribed(); }

export function saveSubscriptionManager(manager) {
  subscriptionManager = manager;
  if (handler) {
    subscriptionManager.handler = handler;
    handler();
  }
}

export function onSubscriptionChange(hndlr) {
  handler = hndlr;
  if (subscriptionManager) subscriptionManager.handler = handler;
}

export function subscribe() {
  subscriptionManager.subscribe();
}

export function unsubscribe() {
  subscriptionManager.unsubscribe();
}
