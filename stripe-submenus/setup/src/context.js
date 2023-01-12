import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })

  const openSidebar = () => {
    setSideBarOpen(true)
  }
  const closeSidebar = () => {
    setSideBarOpen(false)
  }
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text.toLowerCase())
    setPage(page)
    setLocation(coordinates)
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
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
