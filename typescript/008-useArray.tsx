
// This is a React problem from BFE.dev
// https://bigfrontend.dev/react/useArray


import React, { useState, useCallback } from 'react'

type UseArrayActions<T> = {
  push: (item: T) => void,
  removeByIndex: (index: number) => void
}

export function useArray<T>(initialValue: T[]): { value: T[] } & UseArrayActions<T> {


  const [state, setState] = useState(initialValue)

  function push(item: T) {
    setState([...state, item])
  }
  const pushCb = useCallback(push, [])

  const removeCb = useCallback(removeByIndex, [])
  function removeByIndex(index: number) {

    state.splice(index, 1)
    setState([...state])

  }
  return {
    value: state,
    push: pushCb,
    removeByIndex: removeCb
  }
}


// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   const { value } = useArray([1, 2, 3])
//   return <div>
//     {value}
//   </div>
// }



