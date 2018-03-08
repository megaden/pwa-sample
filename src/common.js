let subscriptionManager = null;
let handler = null;
let dataHandler = null;

export function getSubscribedStatus() { return subscriptionManager != null && subscriptionManager.isSubscribed(); }

export function saveSubscriptionManager(manager) {
  subscriptionManager = manager;
  if (handler) {
    subscriptionManager.handler = handler;
    handler();
  }
}

export function onSubscriptionChange(hndlr, dataHndlr) {
  handler = hndlr;
  dataHandler = dataHndlr;
  if (subscriptionManager) subscriptionManager.handler = handler;
}

export function subscribe() {
  subscriptionManager.subscribe();
}

export function unsubscribe() {
  subscriptionManager.unsubscribe();
}

export function saveSubscriptionData(data) {
  if (dataHandler) dataHandler(data);
}
