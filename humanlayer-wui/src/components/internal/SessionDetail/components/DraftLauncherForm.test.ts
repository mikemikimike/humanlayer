import { describe, expect, test, mock } from 'bun:test'

import { runWithLaunchCleanup } from './draftLaunchCleanup'

describe('runWithLaunchCleanup', () => {
  test('runs cleanup when draft launch fails', async () => {
    const cleanup = mock(() => {})

    await expect(
      runWithLaunchCleanup(async () => {
        throw new Error('launch failed')
      }, cleanup),
    ).rejects.toThrow('launch failed')

    expect(cleanup).toHaveBeenCalledTimes(1)
  })

  test('runs cleanup when error formatting also fails', async () => {
    const cleanup = mock(() => {})

    await expect(
      runWithLaunchCleanup(async () => {
        throw new Error('formatting failed')
      }, cleanup),
    ).rejects.toThrow('formatting failed')

    expect(cleanup).toHaveBeenCalledTimes(1)
  })
})
