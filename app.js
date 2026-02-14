// 1) После деплоя Apps Script вставь сюда URL:
const API_URL = https://script.google.com/macros/s/AKfycbxAIjXCk9kcOOP48zd3mXuDNVu8nsvMrLsa3PxgEviPHQOx0VMDfCmg8NrYNYk_hP_m/exec;

const grid = document.getElementById("formsGrid");
const searchInput = document.getElementById("search");

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[s]));
}

function buildField(field, formId) {
  const id = `${formId}_${field.name}`;
  const req = field.required ? "required" : "";

  if (field.type === "textarea") {
    return `
      <div class="field">
        <label for="${id}">${escapeHtml(field.label)} ${field.required ? "*" : ""}</label>
        <textarea id="${id}" name="${escapeHtml(field.name)}" ${req}></textarea>
      </div>
    `;
  }

  if (field.type === "select") {
    const opts = (field.options || []).map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join("");
    return `
      <div class="field">
        <label for="${id}">${escapeHtml(field.label)} ${field.required ? "*" : ""}</label>
        <select id="${id}" name="${escapeHtml(field.name)}" ${req}>
          <option value="">Выберите...</option>
          ${opts}
        </select>
      </div>
    `;
  }

  return `
    <div class="field">
      <label for="${id}">${escapeHtml(field.label)} ${field.required ? "*" : ""}</label>
      <input id="${id}" name="${escapeHtml(field.name)}" type="${escapeHtml(field.type || "text")}" ${req} />
    </div>
  `;
}

function renderForms(filter = "") {
  grid.innerHTML = "";

  const forms = window.FORMS_CONFIG.filter(f =>
    f.title.toLowerCase().includes(filter.toLowerCase())
  );

  forms.forEach(form => {
    const fieldsHtml = form.fields.map(field => buildField(field, form.formId)).join("");

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h2>${escapeHtml(form.title)}</h2>
      <form data-form-id="${escapeHtml(form.formId)}">
        ${fieldsHtml}

        <div class="actions">
          <button type="submit" class="btn-primary">Отправить</button>
          <button type="button" class="btn-secondary" data-reset="1">Очистить</button>
          <span class="status" data-status="1"></span>
        </div>
      </form>
    `;

    grid.appendChild(card);
  });

  attachHandlers();
}

function attachHandlers() {
  document.querySelectorAll("form[data-form-id]").forEach(formEl => {
    const statusEl = formEl.querySelector("[data-status]");

    formEl.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (!API_URL || API_URL.includes("PASTE_")) {
        statusEl.textContent = "❌ Не указан API_URL в app.js";
        statusEl.className = "status bad";
        return;
      }

      const formId = formEl.getAttribute("data-form-id");
      const config = window.FORMS_CONFIG.find(f => f.formId === formId);

      const payload = {
        formId: config.formId,
        sheetName: config.sheetName,
        title: config.title,
        timestamp: new Date().toISOString(),
        data: {}
      };

      config.fields.forEach(field => {
        const id = `${config.formId}_${field.name}`;
        const el = document.getElementById(id);
        payload.data[field.label] = el.value || "";
      });

      statusEl.textContent = "⏳ Отправка...";
      statusEl.className = "status";

      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload)
        });

        const json = await res.json();

        if (json.ok) {
          statusEl.textContent = "✅ Отправлено";
          statusEl.className = "status ok";
          formEl.reset();
        } else {
          statusEl.textContent = "❌ Ошибка: " + (json.error || "неизвестно");
          statusEl.className = "status bad";
        }
      } catch (err) {
        statusEl.textContent = "❌ Ошибка сети/доступа";
        statusEl.className = "status bad";
      }
    });

    formEl.querySelector("[data-reset]")?.addEventListener("click", () => {
      formEl.reset();
      statusEl.textContent = "";
      statusEl.className = "status";
    });
  });
}

searchInput.addEventListener("input", (e) => {
  renderForms(e.target.value);
});

renderForms();
