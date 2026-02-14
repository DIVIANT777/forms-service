{\rtf1\ansi\ansicpg1251\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // 1) \uc0\u1055 \u1086 \u1089 \u1083 \u1077  \u1076 \u1077 \u1087 \u1083 \u1086 \u1103  Apps Script \u1074 \u1089 \u1090 \u1072 \u1074 \u1100  \u1089 \u1102 \u1076 \u1072  URL:\
const API_URL = https:https://script.google.com/macros/s/AKfycbx_7Hvw6eV67qTS0Ths24i9D6iUjLhtRqjGe04B6FNiLRepnuRHG4Qz1sGrW2ekH4Di/exec;\
\
const grid = document.getElementById("formsGrid");\
const searchInput = document.getElementById("search");\
\
function escapeHtml(str) \{\
  return String(str).replace(/[&<>"']/g, s => (\{\
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"\
  \}[s]));\
\}\
\
function buildField(field, formId) \{\
  const id = `$\{formId\}_$\{field.name\}`;\
  const req = field.required ? "required" : "";\
\
  if (field.type === "textarea") \{\
    return `\
      <div class="field">\
        <label for="$\{id\}">$\{escapeHtml(field.label)\} $\{field.required ? "*" : ""\}</label>\
        <textarea id="$\{id\}" name="$\{escapeHtml(field.name)\}" $\{req\}></textarea>\
      </div>\
    `;\
  \}\
\
  if (field.type === "select") \{\
    const opts = (field.options || []).map(o => `<option value="$\{escapeHtml(o)\}">$\{escapeHtml(o)\}</option>`).join("");\
    return `\
      <div class="field">\
        <label for="$\{id\}">$\{escapeHtml(field.label)\} $\{field.required ? "*" : ""\}</label>\
        <select id="$\{id\}" name="$\{escapeHtml(field.name)\}" $\{req\}>\
          <option value="">\uc0\u1042 \u1099 \u1073 \u1077 \u1088 \u1080 \u1090 \u1077 ...</option>\
          $\{opts\}\
        </select>\
      </div>\
    `;\
  \}\
\
  return `\
    <div class="field">\
      <label for="$\{id\}">$\{escapeHtml(field.label)\} $\{field.required ? "*" : ""\}</label>\
      <input id="$\{id\}" name="$\{escapeHtml(field.name)\}" type="$\{escapeHtml(field.type || "text")\}" $\{req\} />\
    </div>\
  `;\
\}\
\
function renderForms(filter = "") \{\
  grid.innerHTML = "";\
\
  const forms = window.FORMS_CONFIG.filter(f =>\
    f.title.toLowerCase().includes(filter.toLowerCase())\
  );\
\
  forms.forEach(form => \{\
    const fieldsHtml = form.fields.map(field => buildField(field, form.formId)).join("");\
\
    const card = document.createElement("div");\
    card.className = "card";\
\
    card.innerHTML = `\
      <h2>$\{escapeHtml(form.title)\}</h2>\
      <form data-form-id="$\{escapeHtml(form.formId)\}">\
        $\{fieldsHtml\}\
\
        <div class="actions">\
          <button type="submit" class="btn-primary">\uc0\u1054 \u1090 \u1087 \u1088 \u1072 \u1074 \u1080 \u1090 \u1100 </button>\
          <button type="button" class="btn-secondary" data-reset="1">\uc0\u1054 \u1095 \u1080 \u1089 \u1090 \u1080 \u1090 \u1100 </button>\
          <span class="status" data-status="1"></span>\
        </div>\
      </form>\
    `;\
\
    grid.appendChild(card);\
  \});\
\
  attachHandlers();\
\}\
\
function attachHandlers() \{\
  document.querySelectorAll("form[data-form-id]").forEach(formEl => \{\
    const statusEl = formEl.querySelector("[data-status]");\
\
    formEl.addEventListener("submit", async (e) => \{\
      e.preventDefault();\
\
      if (!API_URL || API_URL.includes("PASTE_")) \{\
        statusEl.textContent = "\uc0\u10060  \u1053 \u1077  \u1091 \u1082 \u1072 \u1079 \u1072 \u1085  API_URL \u1074  app.js";\
        statusEl.className = "status bad";\
        return;\
      \}\
\
      const formId = formEl.getAttribute("data-form-id");\
      const config = window.FORMS_CONFIG.find(f => f.formId === formId);\
\
      const payload = \{\
        formId: config.formId,\
        sheetName: config.sheetName,\
        title: config.title,\
        timestamp: new Date().toISOString(),\
        data: \{\}\
      \};\
\
      config.fields.forEach(field => \{\
        const id = `$\{config.formId\}_$\{field.name\}`;\
        const el = document.getElementById(id);\
        payload.data[field.label] = el.value || "";\
      \});\
\
      statusEl.textContent = "\uc0\u9203  \u1054 \u1090 \u1087 \u1088 \u1072 \u1074 \u1082 \u1072 ...";\
      statusEl.className = "status";\
\
      try \{\
        const res = await fetch(API_URL, \{\
          method: "POST",\
          headers: \{ "Content-Type": "text/plain;charset=utf-8" \},\
          body: JSON.stringify(payload)\
        \});\
\
        const json = await res.json();\
\
        if (json.ok) \{\
          statusEl.textContent = "\uc0\u9989  \u1054 \u1090 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1086 ";\
          statusEl.className = "status ok";\
          formEl.reset();\
        \} else \{\
          statusEl.textContent = "\uc0\u10060  \u1054 \u1096 \u1080 \u1073 \u1082 \u1072 : " + (json.error || "\u1085 \u1077 \u1080 \u1079 \u1074 \u1077 \u1089 \u1090 \u1085 \u1086 ");\
          statusEl.className = "status bad";\
        \}\
      \} catch (err) \{\
        statusEl.textContent = "\uc0\u10060  \u1054 \u1096 \u1080 \u1073 \u1082 \u1072  \u1089 \u1077 \u1090 \u1080 /\u1076 \u1086 \u1089 \u1090 \u1091 \u1087 \u1072 ";\
        statusEl.className = "status bad";\
      \}\
    \});\
\
    formEl.querySelector("[data-reset]")?.addEventListener("click", () => \{\
      formEl.reset();\
      statusEl.textContent = "";\
      statusEl.className = "status";\
    \});\
  \});\
\}\
\
searchInput.addEventListener("input", (e) => \{\
  renderForms(e.target.value);\
\});\
\
renderForms();\
}
