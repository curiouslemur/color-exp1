import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Routes, Route, useNavigate } from 'react-router-dom';

// import ConsentEn from './locals/english/consentEn';
import * as navigator from './_components/_route'

import './App.css';

import { StudyContext } from './_utils/contexts';
import { loadPages_inLang, loadConcepts_inLang } from './_utils/content-loader'

function App() {
  // Uncomment the two lines below to collect experiment language from the experiment link ?lang=en
  // const [searchParams, setSearchParams] = useSearchParams(); 
  // const expLang = searchParams.get("lang")
  const expLang = "en"
  const expPages = loadPages_inLang(expLang) // these are the pages to be used depending on the language of the exp
  const concepts = loadConcepts_inLang(expLang)

  const meta = { language: expLang, expName: expLang + 'exp1', title: "color-exp1" }
  const navigate = useNavigate()
  const subdom = "/color-exp1"

  return (
    <StudyContext.Provider value={{ expLang, concepts }}>
      <PageMeta meta={meta} />
      <Routes>
        <Route path={subdom} element={<navigator.Consent config={meta} navigate={navigate}
          nextUrl={subdom + "/disp"} expPages={expPages} expLang={expLang} />} />

        <Route path={subdom + '/disp'} element={<navigator.Display config={meta} navigate={navigate}
          nextUrl={subdom + "/intro"} expPages={expPages} />} />

        <Route path={subdom + "/intro"} element={<navigator.Intro config={meta} navigate={navigate}
          nextUrl={subdom + "/trial"} expPages={expPages} conceptList={concepts} />} />

        <Route path={subdom + "/trial"} element={<navigator.Trial config={meta} navigate={navigate}
          nextUrl={subdom + "/outro"} expPages={expPages} />} />

        <Route path={subdom + "/outro"} element={<navigator.Outro config={meta} navigate={navigate}
          expPages={expPages} />} />
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
