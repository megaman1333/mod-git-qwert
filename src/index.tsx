import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './icon'
import 'react-app-polyfill/stable'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import GalleryPage from './pages/Gallery'
import TypingPage from './pages/Typing'
import mixpanel from 'mixpanel-browser'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useAtomValue } from 'jotai'
import { isOpenDarkModeAtom } from '@/store'
import process from 'process'

if (process.env.NODE_ENV === 'production') {
  // for prod
  mixpanel.init('bdc492847e9340eeebd53cc35f321691')
} else {
  // for dev
  mixpanel.init('5474177127e4767124c123b2d7846e2a', { debug: true })
}

dayjs.extend(utc)

const container = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)

function Root() {
  const darkMode = useAtomValue(isOpenDarkModeAtom)
  useEffect(() => {
    darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  }, [darkMode])

  return (
    <React.StrictMode>
      <BrowserRouter basename={REACT_APP_DEPLOY_ENV === 'pages' ? '/qwerty-learner' : ''}>
        <Routes>
          <Route index element={<TypingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

root.render(<Root />)
        if (isProxyModule) {
          code = await wrapImportProxy({url: reqPath, code: code.toString(), hmr: isHMR, config});
        }
        let contentType = path.extname(originalReqPath)
          ? mime.lookup(path.extname(originalReqPath))
          : 'application/javascript';
        // We almost never want an 'application/octet-stream' response, so just
        // convert to JS until we have proper "raw" handling in the URL for non-JS responses.
        if (contentType === 'application/octet-stream') {
          contentType = 'application/javascript';
        }
        return {
          contents: encodeResponse(code, encoding),
          originalFileLoc: null,
          contentType: path.extname(originalReqPath)
            ? mime.lookup(path.extname(originalReqPath))
            : 'application/javascript',
          contentType,
        };
      } catch (err) {
        const errorTitle = `Dependency Load Error`;