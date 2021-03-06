/**
 * Returns an environment variable. If the variable does not exist, returns the
 * default value. If the default value is not set, throws an exception
 * @param name
 * @param defaultValue
 * @throws aaa
 */
export function readEnvVariable(name: string, defaultValue?: string) {
  const result = process.env[name] || defaultValue;
  if (!result)
    throw new Error(`Cannot read environment variable. Variable name: ${name}`);
  return result;
}

/**
 * Returns whether or not the code is running in development mode
 */
export function isDevelopment(): boolean {
  if (!process.env.NODE_ENV) {
    throw new Error(
      "Could not determine Node environment. NODE_ENV is not set"
    );
  }
  return process.env.NODE_ENV === "development";
}
