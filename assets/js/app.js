// assets/js/app.js
// Nada persistente. Pequeños helpers: actualizar “progreso” visual, utilidades de UI.

(function(){
  const bar = document.querySelector(".progress > i");
  if(bar){
    // “Progreso” simbólico: variar ancho según la página (sin guardar)
    const map = {
      "index.html": 20,
      "oraculo-ideas.html": 40,
      "pnj-express.html": 45,
      "estados-escena.html": 55,
      "complica-escena.html": 65,
      "conectores-equipo.html": 75,
      "reparto-coral.html": 80,
      "ritmo-cortes.html": 88,
      "objetos-aire.html": 92
    };
    const path = location.pathname.split("/").pop() || "index.html";
    const pct = map[path] || 30;
    requestAnimationFrame(()=> bar.style.width = pct + "%");
  }

  // Pequeños toasts efímeros (solo visual)
  window.toast = (msg) => {
    const el = document.createElement("div");
    el.textContent = msg;
    Object.assign(el.style, {
      position:"fixed", left:"50%", bottom:"22px", transform:"translateX(-50%)",
      background:"linear-gradient(90deg, #222, #2a2f3a)", color:"#e6e8f0",
      border:"1px solid rgba(255,255,255,.18)", borderRadius:"12px",
      padding:"10px 14px", zIndex:9999, boxShadow:"0 10px 24px -12px rgba(0,0,0,.7)"
    });
    document.body.appendChild(el);
    setTimeout(()=> el.remove(), 1800);
  };
})();
