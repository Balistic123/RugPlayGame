import { w as writable } from './index2-D4eROfHK.js';

const defaultSettings = {
  master: 0.7,
  muted: false
};
function createVolumeSettings() {
  const { subscribe, set, update } = writable(defaultSettings);
  return {
    subscribe,
    load: () => {
    },
    setMaster: (value) => {
      update((settings) => {
        const newSettings = { ...settings, master: Math.max(0, Math.min(1, value)) };
        return newSettings;
      });
    },
    setMuted: (value) => {
      update((settings) => {
        const newSettings = { ...settings, muted: value };
        return newSettings;
      });
    }
  };
}
const volumeSettings = createVolumeSettings();

export { volumeSettings as v };
//# sourceMappingURL=volume-settings-DX3g8058.js.map
