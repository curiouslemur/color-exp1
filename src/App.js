import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Routes, Route, useSearchParams } from 'react-router-dom';

// import ConsentEn from './locals/english/consentEn';
import * as navigator from './_components/_route'

import './App.css';

import { StudyContext } from './_utils/contexts';
import { loadPages_inLang } from './_utils/page-loader'


function App() {

  // const [searchParams, setSearchParams] = useSearchParams();
  // const expLang = searchParams.get("lang")
  const expLang = "en"
  const expPages = loadPages_inLang(expLang) // these are the pages to be used depending on the language of the exp

  const meta = { language: expLang, expName: expLang + 'exp1' }

  console.log(expLang)

  return (
    <StudyContext.Provider value={{ expLang }}>
      <PageMeta meta={meta} />
      <Routes>
        <Route path="/color-exp1" element={<navigator.Consent config={meta}
          pages={expPages} />} />
        <Route path='/disp' element={<navigator.Display config={meta}
          pages={expPages} />} />
        <Route path='/intro' element={<navigator.Intro config={meta}
          pages={expPages} />} />
      </Routes>
    </StudyContext.Provider>
  );
}

const PageMeta = (props) => {
  if (props.meta.language === 'arabic' || props.meta.language === "hebrew") {
    return (
      <HelmetProvider>
        <Helmet htmlAttributes={{ lang: 'ar', dir: 'rtl' }}>
          <title>{props.meta.title}</title>
        </Helmet>
      </HelmetProvider >
    )
  } else {
    return (
      <HelmetProvider>
        <Helmet>
          <title>{props.meta.title}</title>
        </Helmet>
      </HelmetProvider>
    )
  }
}

export default App;
