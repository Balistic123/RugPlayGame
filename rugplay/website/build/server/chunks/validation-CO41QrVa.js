function validateSearchParams(searchParams) {
  return {
    /**
     * Gets a positive integer parameter with a default fallback
     * @param key - The parameter key
     * @param defaultValue - Default value if invalid or missing
     * @returns Valid positive integer or default
     */
    getPositiveInt: (key, defaultValue) => {
      const param = searchParams.get(key);
      const parsed = param ? parseInt(param, 10) : defaultValue;
      return Number.isInteger(parsed) && parsed > 0 ? parsed : defaultValue;
    },
    /**
     * Gets a non-negative float parameter with a default fallback
     * @param key - The parameter key
     * @param defaultValue - Default value if invalid or missing
     * @returns Valid non-negative float or default
     */
    getNonNegativeFloat: (key, defaultValue) => {
      const param = searchParams.get(key);
      const parsed = param ? parseFloat(param) : defaultValue;
      return !isNaN(parsed) && parsed >= 0 ? parsed : defaultValue;
    },
    /**
     * Gets a string parameter with optional validation
     * @param key - The parameter key
     * @param defaultValue - Default value if missing
     * @param validator - Optional validation function
     * @returns Valid string or default
     */
    getString: (key, defaultValue, validator) => {
      const param = searchParams.get(key);
      if (!param) return defaultValue;
      return validator ? validator(param) ? param : defaultValue : param;
    }
  };
}

export { validateSearchParams as v };
//# sourceMappingURL=validation-CO41QrVa.js.map
