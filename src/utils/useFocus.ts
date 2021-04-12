import { useEffect, useRef, useState } from 'react'

export const useFocus = () => {
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        ref.current?.focus()
    })

    return ref
}