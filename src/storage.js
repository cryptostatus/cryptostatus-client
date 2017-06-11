import R from 'ramda'

import Task from 'data.task'
import Maybe from 'data.maybe'

const toJSON = JSON.stringify

const concatIdPrefix = (
  R.concat('Cryptostatus.')
)

const safeLocalStorageItemId = (
  R.compose(
    R.map(concatIdPrefix),
    Maybe.fromNullable
  )
)

const safeLocalStorageItemContent = (
  R.compose(R.map(toJSON), Maybe.fromNullable)
)

const setLocalStorageItem = (
  R.useWith(
    (safeId, safeData) => (
      safeId.chain((id) => (
        safeData.chain((data) => (
          new Task((_, resolve) => {
            window.localStorage.setItem(id, data)

            resolve()
          })
        ))
      )).orElse(Task.rejected)
    ),
    [
      safeLocalStorageItemId,
      safeLocalStorageItemContent
    ]
  )
)

// setLocalStorageItem('a', { a: 'b' }).fork(() => console.error('Reject!'), () => console.log('Resolve!'))
// setLocalStorageItem(null, { a: 'b' }).fork(() => console.error('Reject!'), () => console.log('Resolve!'))
// setLocalStorageItem('a', null).fork(() => console.error('Reject!'), () => console.log('Resolve!'))

export const set = (path, data) => (
  window.localStorage.setItem(
    `Cryptostatus.${path}`,
    JSON.stringify(data)
  )
)

export const get = (path) => {
  const item = window.localStorage.getItem(`Cryptostatus.${path}`)
  return item && JSON.parse(item)
}

export const remove = (path) =>
  window.localStorage.removeItem(`Cryptostatus.${path}`)
