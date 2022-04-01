import React, { createContext, useState } from 'react'


const AuthContext = createContext(false)

const AuThProvider = ({ children }: { children: any }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return <AuthContext.Provider value={isAuthenticated}>
    {children}
  </AuthContext.Provider>
}

export default AuThProvider