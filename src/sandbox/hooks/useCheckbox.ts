import { useState } from 'react'

const useCheckbox = (defaultValue: boolean = false) => {
  const [checked, onChange] = useState<boolean>(defaultValue)
  return { checked, onChange }
}

export default useCheckbox
