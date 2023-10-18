import * as THREE from "three";

const obj2s = (o) => {
  if (typeof o == "string") return o;
  if (typeof o == "object") return JSON.stringify(o, null, "  ");
  return s;
};

export const createTextWindow = (x = 0, y = 0, z = -2, width = 400, height = 800) => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  const geometry = new THREE.PlaneGeometry(canvas.width / 600, canvas.height / 600);
  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const mesh = new THREE.Mesh(geometry, material);

  const fontSize = 20;
  const padding = 10;
  const lineSpace = 2;
  const text = [];
  const nline = Math.floor((height - padding * 2) / (fontSize + lineSpace));
  mesh.update = () => {
    ctx.fillStyle = "#282828";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f8f8f8";
    ctx.font = `${fontSize}px sans-serif`;
    text.forEach((text, i) => {
      ctx.fillText(text, padding, padding + (fontSize + lineSpace) * (i + 1));
    });
    material.map.needsUpdate = true;
  };
  mesh.set = (s) => {
    s = obj2s(s);
    text.length = 0;
    const ss = s.split("\n");
    if (ss.length < nline) {
      for (let i = 0; i < ss.length; i++) {
        text[i] = ss[i];
      }
    } else {
      for (let i = 0; i < nline; i++) {
        text[i] = ss[ss.length - nline + i];
      }
    }
    mesh.update();
  };
  mesh.log = (s) => {
    s = obj2s(s);
    const ss = s.split("\n");
    for (const s of ss) {
      if (text.length == nline) {
        text.shift();
      }
      text.push(s);
    }
    mesh.update();
  };
  mesh.update();
  mesh.position.set(x, y, z);
  return mesh;
};
