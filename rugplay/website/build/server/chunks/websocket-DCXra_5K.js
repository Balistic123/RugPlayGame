import { w as writable } from './index2-D4eROfHK.js';
import './notifications-5V396xYk.js';
import { U as USER_DATA } from './user-data-CT5kjyaY.js';
import './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import './client-s_UYc3Sk.js';

let socket = null;
let activeCoin = "@global";
const liveTradesStore = writable([]);
const allTradesStore = writable([]);
const isConnectedStore = writable(false);
const isLoadingTrades = writable(false);
const commentSubscriptions = /* @__PURE__ */ new Map();
const priceUpdateSubscriptions = /* @__PURE__ */ new Map();
async function loadInitialTrades(mode = "preview") {
  return;
}
function isSocketConnected() {
  return socket?.readyState === WebSocket.OPEN;
}
function sendMessage(message) {
  if (isSocketConnected()) {
    socket.send(JSON.stringify(message));
  }
}
function setCoin(coinSymbol) {
  if (activeCoin !== coinSymbol && activeCoin !== "@global") {
    unsubscribeFromPriceUpdates(activeCoin);
  }
  activeCoin = coinSymbol;
  sendMessage({ type: "set_coin", coinSymbol });
}
function disconnect() {
  isConnectedStore.set(false);
}
function subscribeToComments(coinSymbol, callback) {
  commentSubscriptions.set(coinSymbol, callback);
}
function unsubscribeFromComments(coinSymbol) {
  commentSubscriptions.delete(coinSymbol);
}
function subscribeToPriceUpdates(coinSymbol, callback) {
  priceUpdateSubscriptions.set(coinSymbol, callback);
}
function unsubscribeFromPriceUpdates(coinSymbol) {
  priceUpdateSubscriptions.delete(coinSymbol);
}
class WebSocketController {
  connect() {
  }
  disconnect() {
    disconnect();
  }
  setCoin(coinSymbol) {
    setCoin(coinSymbol);
  }
  subscribeToComments(coinSymbol, callback) {
    subscribeToComments(coinSymbol, callback);
  }
  unsubscribeFromComments(coinSymbol) {
    unsubscribeFromComments(coinSymbol);
  }
  subscribeToPriceUpdates(coinSymbol, callback) {
    subscribeToPriceUpdates(coinSymbol, callback);
  }
  unsubscribeFromPriceUpdates(coinSymbol) {
    unsubscribeFromPriceUpdates(coinSymbol);
  }
  loadInitialTrades(mode = "preview") {
    loadInitialTrades(mode);
  }
  setUser(userId) {
  }
}
if (typeof window !== "undefined") {
  USER_DATA.subscribe((user) => {
    if (user?.id) {
      websocketController.setUser(user.id.toString());
    }
  });
}
const websocketController = new WebSocketController();

export { isConnectedStore as a, allTradesStore as b, isLoadingTrades as i, liveTradesStore as l };
//# sourceMappingURL=websocket-DCXra_5K.js.map
