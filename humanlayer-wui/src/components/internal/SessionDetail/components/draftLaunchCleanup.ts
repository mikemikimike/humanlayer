export async function runWithLaunchCleanup<T>(
  operation: () => Promise<T>,
  cleanup: () => void,
): Promise<T> {
  try {
    return await operation()
  } finally {
    cleanup()
  }
}
