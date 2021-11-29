import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import JobsList from "./components/jobslist";
import localeEsMessages  from "./locales/es";
import localeEnMessages  from "./locales/en";

let lang = navigator.language
let loc

lang === "es-ES"? loc=localeEsMessages: loc=localeEnMessages;

ReactDOM.render(
    <IntlProvider locale={lang} messages={loc}>
        <JobsList />
    </IntlProvider>
    , document.getElementById("root")
);
