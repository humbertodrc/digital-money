'use client'
import { useState, useEffect, SetStateAction } from 'react'

export default function useLocalStorage(key: string){
  const [storedValue, setStoredValue] = useState("")

  useEffect(() => {
    try {
      const initialValue = JSON.parse(window.localStorage.getItem(key) || "")
      initialValue.reverse()
      setStoredValue(initialValue ?? "")
    } catch (error) {
      setStoredValue("")
    }
  }, [key])

  const setValue = (value: string) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
    }
  }

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key)
      setStoredValue("")
    } catch (error) {
      console.error(error);
    }
  }

  return { storedValue, setValue, removeValue }
}