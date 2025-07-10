import {
  computePosition,
  flip,
  shift,
  offset,
  arrow,
} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.7/+esm';

document.addEventListener("DOMContentLoaded", () => {

  const body = document.body;
  const colorWallpaper = document.querySelector('.colorWallpaper');
  const inputColor = document.querySelector("#inputColor");

  const colorCard = document.querySelector("#colorCard");
  const hexText = document.querySelector("#hexText");
  const rgbText = document.querySelector("#rgbText");
  const hslText = document.querySelector("#hslText");
  const hwbText = document.querySelector("#hwbText");
  const RandBtn = document.querySelector("#RandBtn");
  const copyButtons = document.querySelectorAll('button.copyBtn');
  const CopyTo = document.querySelector('#CopyTo');
  const Copied = document.querySelector('#Copied');

  const controlPanel = document.querySelector("#controlPanel");
  const inputRangeR = document.querySelector("#inputRangeR");
  const inputRangeG = document.querySelector("#inputRangeG");
  const inputRangeB = document.querySelector("#inputRangeB");
  const inputRangeH = document.querySelector("#inputRangeH");
  const inputRangeS = document.querySelector("#inputRangeS");
  const inputRangeL = document.querySelector("#inputRangeL");
  const inputRangeA = document.querySelector("#inputRangeA");

  let runFlag = null;

  // private method
  // ----------------------------------------------------------------------------------------
  const colorProxy = new Proxy({ hex: null, hsl: null, alpha: 100 }, {
    set(obj, prop, value) {
      obj[prop] = value;
      let hex, hsl, rgb, hwb, inverseRGB;

      switch (prop) {
        case 'alpha':
          hex = obj.hex;
          rgb = colorCalc({ hex }, 'rgb');
          inverseRGB = `rgb(${(255 - rgb.r)} ${(255 - rgb.g)} ${(255 - rgb.b)})`;
          hsl = colorCalc({ rgb }, 'hsl');
          hwb = colorCalc({ hsl }, 'hwb');
          break;

        case 'hex':
          hex = value;
          rgb = colorCalc({ hex }, 'rgb');
          inverseRGB = `rgb(${(255 - rgb.r)} ${(255 - rgb.g)} ${(255 - rgb.b)})`;
          hsl = colorCalc({ rgb }, 'hsl');
          hwb = colorCalc({ hsl }, 'hwb');

          break;
        case 'hsl':
          hsl = value;

          hex = colorCalc({ hsl }, 'hex');
          rgb = colorCalc({ hex }, 'rgb');
          inverseRGB = `rgb(${(255 - rgb.r)} ${(255 - rgb.g)} ${(255 - rgb.b)})`;
          hwb = colorCalc({ hsl }, 'hwb');
          break;

      }

      controlPanel.style.setProperty('--color', `hsl(${hsl.h}, 100%, ${hsl.l}%)`);
      controlPanel.style.setProperty('--inverseColor', inverseRGB);
      colorCard.style.setProperty('--inverseColor', inverseRGB);


      if (obj.alpha === 100) {
        colorWallpaper.style.backgroundColor = hex;
        hexText.innerText = hex;
        rgbText.innerText = `rgb(${rgb.r} ${rgb.g} ${rgb.b})`;
        hslText.innerText = `hsl(${hsl.h} ${hsl.s}% ${hsl.l}%)`;
        hwbText.innerHTML = `hwb(${hwb.h} ${hwb.w}% ${hwb.b}%)`;
      }
      else {
        colorWallpaper.style.backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, ${obj.alpha / 100})`;
        hexText.innerText = `${hex}${Math.round(obj.alpha / 100 * 255).toString(16).padStart(2, '0')}`;
        rgbText.innerText = `rgb(${rgb.r} ${rgb.g} ${rgb.b} / ${obj.alpha / 100})`;
        hslText.innerText = `hsl(${hsl.h} ${hsl.s}% ${hsl.l}% / ${obj.alpha / 100})`;
        hwbText.innerHTML = `hwb(${hwb.h} ${hwb.w}% ${hwb.b}% / ${obj.alpha / 100})`;
      }

      inputColor.value = hex;
      inputRangeR.value = rgb.r;
      inputRangeG.value = rgb.g;
      inputRangeB.value = rgb.b;
      inputRangeH.value = hsl.h;
      inputRangeS.value = hsl.s;
      inputRangeL.value = hsl.l;

      return true;
    },

  })

  const colorCalc = (from, to) => {
    switch (Object.keys(from)[0]) {
      case 'hex':
        switch (to) {
          case 'rgb':
            return {
              r: parseInt(from.hex.slice(1, 3), 16),
              g: parseInt(from.hex.slice(3, 5), 16),
              b: parseInt(from.hex.slice(5, 7), 16)
            };
        }
        break;
      case 'rgb':
        switch (to) {
          case 'hsl':
            const { r, g, b } = { r: from.rgb.r / 255, g: from.rgb.g / 255, b: from.rgb.b / 255 };
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            let h, s, l = (max + min) / 2;
            if (max === min) h = s = 0;
            else {
              const d = max - min;
              s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
              }
              h /= 6;
            }
            return {
              h: Math.round(h * 360),
              s: Number((s * 100).toFixed(1)),
              l: Number((l * 100).toFixed(1))
            };
          case 'hex':
            return '#' + Object.values(from.rgb).map(x => x.toString(16).padStart(2, '0')).join('');
        }
        break;
      case 'hsl':
        let { h, s, l } = { ...from.hsl };
        switch (to) {
          case 'hwb':
            const halfChroma = s * (1 - Math.abs(l / 50 - 1)) / 2;
            const w = l - halfChroma;
            const b = 100 - l - halfChroma;
            return {
              h: Number(h.toFixed(1)),
              w: Number(w.toFixed(1)),
              b: Number(b.toFixed(1))
            };
          case 'hex':
            l /= 100;
            const f = n => {
              const k = (n + h / 30) % 12;
              const color = l - (s * Math.min(l, 1 - l) / 100) * Math.max(Math.min(k - 3, 9 - k, 1), -1);
              return Math.round(255 * color).toString(16).padStart(2, '0');
            };
            return `#${f(0)}${f(8)}${f(4)}`;
        }
    }
  }

  const randHex = () => {
    colorProxy.hex = colorCalc({
      rgb: {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
      }
    }, 'hex');
  }


  const showTooltip = (e, tooltip = CopyTo) => {
    tooltip.style.display = 'block';
    computePosition(e.target, tooltip, {
      placement: 'top',
      middleware: [
        offset(10),
        flip(),
        shift({ padding: 5 }),
        arrow({ element: tooltip.querySelector('.arrow') }),
      ],
    }).then(({ x, y, placement, middlewareData }) => {
      Object.assign(tooltip.style, {
        left: `${x}px`,
        top: `${y}px`,
      });

      const { x: arrowX, y: arrowY } = middlewareData.arrow;

      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[placement.split('-')[0]];

      Object.assign(tooltip.querySelector('.arrow').style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide]: '-4px',
      });
    });
  }

  const hideTooltip = (e, tooltip = CopyTo) => {
    tooltip.style.display = '';
  }

  const actionTooltip = (e) => {
    navigator.clipboard.writeText(e.target.closest('li').querySelector('label').innerText);
    hideTooltip(e, CopyTo);
    showTooltip(e, Copied);
    setTimeout(() => hideTooltip(e, Copied), 2000);
  }

  //  event
  // ----------------------------------------------------------------------------------------

  // stop propagation
  [colorCard, controlPanel, inputColor]
    .forEach((e) => e.addEventListener("click", (e) => e.stopPropagation()));


  // set color value
  body.addEventListener("click", (e) => {
    Object.assign(inputColor.style, {
      left: `${e.clientX}px`, top: `${e.clientY}px`
    });
    requestAnimationFrame(() => inputColor.click());
  })
  inputColor.addEventListener("input", (e) => colorProxy.hex = e.target.value);

  // rgb-bar change
  [inputRangeR, inputRangeG, inputRangeB]
    .forEach((inputRGB) => inputRGB.addEventListener("input", () => colorProxy.hex =
      colorCalc({
        rgb: {
          r: Number(inputRangeR.value),
          g: Number(inputRangeG.value),
          b: Number(inputRangeB.value)
        }
      }, 'hex')
    ));

  //hsl-bar change
  [inputRangeH, inputRangeS, inputRangeL]
    .forEach((inputRGB) => inputRGB.addEventListener("input", () => colorProxy.hsl =
    {
      h: Number(inputRangeH.value),
      s: Number(inputRangeS.value),
      l: Number(inputRangeL.value)
    }
    ));

  //alpha-bar change
  inputRangeA.addEventListener("input", (e) => colorProxy.alpha = Number(e.target.value));

  // random color
  [
    ['click', () => randHex()],
    ['mousedown', () => runFlag = setInterval(randHex, 100)],
    ['mouseup', () => clearInterval(runFlag)]
  ].forEach(([event, listener]) => RandBtn.addEventListener(event, listener));

  // copy to clipboard
  [hexText, rgbText, hslText, hwbText]
    .forEach((text) => text.addEventListener("click", () => navigator.clipboard.writeText(text.innerText)));


  // tooltip event
  [
    ['mouseenter', showTooltip],
    ['mouseleave', hideTooltip],
    ['click', actionTooltip],
  ].forEach(([event, listener]) => copyButtons.forEach(button => button.addEventListener(event, listener)));


  // init
  // ----------------------------------------------------------------------------------------
  randHex();

});