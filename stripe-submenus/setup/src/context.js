import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(true)
  const [submenuOpen, setSubmenuOpen] = useState(true)

  const openSidebar = () => {
    setSideBarOpen(true)
  }
  const closeSidebar = () => {
    setSideBarOpen(false)
  }
  const openSubmenu = () => {
    setSubmenuOpen(true)
  }
  const closeSubmenu = () => {
    setSubmenuOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        openSubmenu,
        closeSubmenu,
        closeSidebar,
        openSidebar,
        sideBarOpen,
        submenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
