<template>
  <button class="br-button" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface ColorStyleModel {
	primaryColor50: string
    primaryColor100: string
    primaryColor200: string,
    primaryColor300: string,
    primaryColor400: string,
	primaryColor500: string,
    primaryColor600: string,
    primaryColor700: string,
    primaryColor800: string,
    primaryColor900: string,
	primaryColor950: string,
}

type Lightness = 'lighten' | 'darken'

export default defineComponent({
  name: 'BrButton',
  setup() {
	function shadeColor (mainColor: string, percent: number, lightness: Lightness) : string {
		const colorConverted = toHSL(mainColor);
		const [ H, S, L ]  = colorConverted.replace(/[^0-9,]/g, '').split(',');
		let newLightnessValue = lightness == 'darken' ? parseInt(L) - percent : parseInt(L) + percent; 
		newLightnessValue = newLightnessValue > 0 ? newLightnessValue : 0;
		return toHexadecimal(parseInt(H), parseInt(S), newLightnessValue);
	}

	function toHSL (hex: string) : string {
		let R = parseInt(hex.substring(1,3),16);
		let G = parseInt(hex.substring(3,5),16);
		let B = parseInt(hex.substring(5,7),16);

		R /= 255, G /= 255, B /= 255;
		const max = Math.max(R, G, B),
			min = Math.min(R, G, B);
		let H, S, L = (max + min) / 2;

		if (max == min) {
			H = S = 0;
		} else {
			const D = max - min;
			S = L > 0.5 ? D / (2 - max - min) : D / (max + min);
			switch(max) {
				case R: 
					H = (G - B) / D + (G < B ? 6 : 0)
					break;
				case G:
					H = (B - R) / D + 2
					break;
				case B:
					H = (R - G) / D + 4;
					break;
			}
			H /= 6;
		}

		S = Math.round(S * 100);
		L = Math.round(L * 100);
		H = Math.round(360 * H);

		return `hsl(${ H }, ${ S }%, ${ L }%)`;
	}

	function toHexadecimal (H: number, S: number, L: number) : string {
		H /= 360, S /= 100, L /= 100;
		let R, G, B;
		if (S === 0) {
			R = G = B = L
		} else {
			const q = L < 0.5 ? L * (1 + S) : L + S - L * S;
			const p = 2 * L - q;
			const hueToRGB = (p, q, t) => {
				if (t < 0) t += 1;
				if (t > 1) t -= 1;
				if (t < 1 / 6) return p + (q - p) * 6 * t;
				if (t < 1 / 2) return q;
				if (t < 2 / 3) return p + (q - p) * (2/3 - t) * 6;
				return p;
			}

			R = hueToRGB(p, q, H + 1 / 3);
			G = hueToRGB(p, q, H);
			B = hueToRGB(p, q, H -1 / 3);        
		}

		const toHex = x => {
			const hex = Math.round(x * 255).toString(16);
			return hex.length === 1 ? `0${hex}`: hex;
		}
		return `#${ toHex(R) }${ toHex(G) }${ toHex(B) }`;

	}

	function colorsToStyleModel (mainColor: string) : string[] {
		const primaryColor50 = shadeColor(mainColor, 45, 'lighten');
		const primaryColor100 = shadeColor(mainColor, 40, 'lighten');
		const primaryColor200 = shadeColor(mainColor, 30,'lighten');
		const primaryColor300 = shadeColor(mainColor, 20,'lighten');
		const primaryColor400 = shadeColor(mainColor, 10,'lighten');
		const primaryColor500 = mainColor
		const primaryColor600 = shadeColor(mainColor, 10,'darken');
		const primaryColor700 = shadeColor(mainColor, 15,'darken');
		const primaryColor800 = shadeColor(mainColor, 20,'darken');
		const primaryColor900 = shadeColor(mainColor, 25,'darken');
		const primaryColor950 = shadeColor(mainColor, 30,'darken');

		return [
			primaryColor50,
			primaryColor100,
			primaryColor200,
			primaryColor300,
			primaryColor400,
			primaryColor500,
			primaryColor600,
			primaryColor700,
			primaryColor800,
			primaryColor900,
			primaryColor950,
		]
	}

    const onClick = (event: MouseEvent): void => {
      console.log('clicou no BrButton')
      console.log(event.target)
	  console.log(colorsToStyleModel('#0572e7'))
    }

    return {
      onClick,
    }
  },
})
</script>
