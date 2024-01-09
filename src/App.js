import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";

import { ConsentEn } from "./locals/english/consentEn"

import './App.css';

import { StudyContext } from './_utils/contexts';
import { loadPages_inLang } from './_utils/page-loader'

import Button from '@mui/material/Button';

function App() {
  const expLang = "en"
  const expPages = loadPages_inLang(expLang) // these are the pages to be used depending on the language of the exp

  const meta = { language: expLang, expName: expLang + 'exp1' }

  const testContext1 = 1234
  const testContext2 = "Hello context"

  return (
    <StudyContext.Provider value={{ testContext1, testContext2, expLang }}>
      <PageMeta meta={meta} />
      <ConsentEn />
      <div className="App">
        <header className="App-header">
          <Button>Click me</Button>
        </header>
      </div>
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
