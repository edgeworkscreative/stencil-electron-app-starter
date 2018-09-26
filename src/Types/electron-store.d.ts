// https://github.com/sindresorhus/electron-store
export interface ElectronStore {
  
  /**
   * The value must be JSON serializable.
   * @param {string} key
   * @param {string | {[p: string]: any}} value
   */
  set: (key: string, value: string | number | { [key: string]: any }) => void;
  
  /**
   * Get an item or defaultValue if the item does not exist.
   * @param {string} key
   * @param {string | {[p: string]: any}} defaultValue
   * @return {any}
   */
  get: (key: string, defaultValue?: string | { [key: string]: any }) => any;
  
  /**
   * Check if an item exists.
   * @param {string} key
   * @return {boolean}
   */
  has: (key: string) => boolean;
  
  /**
   * Delete an item.
   * @param {string} key
   */
  delete: (key: string) => void;
  
  /**
   * Delete all items.
   */
  clear: () => void;
  
  /**
   * Watches the given key, calling callback on any changes. When a key is first set oldValue will be undefined, and when a key is deleted newValue will be undefined.
   * @param {string} key
   * @param {(newValue, oldValue) => {}} callback
   */
  onDidChange: (key: string, callback: (newValue, oldValue) => {}) => void;
  
  /**
   * Get the item count.
   */
  size: number;
  
  /**
   * Get all the data as an object or replace the current data with an object:
   */
  store: any;
  
  /**
   * Get the path to the storage file.
   */
  path: string;
  
  /**
   * Open the storage file in the user's editor.
   */
  openInEditor: () => void;
}
