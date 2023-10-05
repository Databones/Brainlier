// ==UserScript==
// @name         Brainlier
// @version      1.0
// @description  Removes the locked Brainly questions.
// @author       Databones
// @match        *://brainly.in/*
// @match        *://brainly.com/*
// @match        *://brainly.ro/*
// @match        *://brainly.pl/*
// @match        *://brainly.ph/*
// @match        *://brainly.lat/*
// @match        *://brainly.com.br/*
// @match        *://brainly.co.id/*
// @match        *://brainly.ro/*
// @match        *://nosdevoirs.fr/*
// @match        *://znanija.com/*
// @run-at       document-start
// ==/UserScript==

const itemsToRemove=["social-qa/telemetry","simple-funnel-name","flexible-funnel-cycle-data"];itemsToRemove.forEach((e=>{localStorage.getItem(e)&&localStorage.removeItem(e)}));
