"use client"

import { createContext, useState, useContext, ReactNode } from "react"

type ContactModalContextType = {
  showModal: boolean
  openModal: () => void
  closeModal: () => void
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined)

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <ContactModalContext.Provider value={{ showModal, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const context = useContext(ContactModalContext)
  if (context === undefined) {
    throw new Error('useContactModal must be used within a ContactModalProvider')
  }
  return context
} 