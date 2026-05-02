import { useState, useEffect } from "react";

function Footer() {
  const [userAgent, setUserAgent] = useState('');

  useEffect(() => {
    localStorage.setItem('userAgent', navigator.userAgent)
    setUserAgent(localStorage.getItem('userAgent'));
  }, []);

  return (
    <footer className="pt-6 mt-10 border-t border-gray-200 text-center text-sm text-gray-400">
      <p>{userAgent}</p>
      <p>&copy; 2026 Глинка Микола.</p>
    </footer>
  )
}

export default Footer