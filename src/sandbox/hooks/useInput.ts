import { Dispatch, SetStateAction, useState } from 'react'

type UseInputType = (defaultValue?: string) => {
  value: string
  onChange: Dispatch<SetStateAction<string>>
  reset: () => void
}

const useInput: UseInputType = (defaultValue = '') => {
  const [value, onChange] = useState<string>(defaultValue)

  const reset = () => onChange('')

  return { value, onChange, reset }
}

export default useInput
