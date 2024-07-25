function MythClothBox({ borderColor }: { borderColor: string }) {
  console.log(borderColor);
  return (
    <svg
      width={210}
      height={250}
      style={{ border: "blue solid" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter
        id="nnnoise-filter"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="linearRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.05"
          numOctaves="4"
          seed="15"
          stitchTiles="stitch"
          result="turbulence"
        />
        <feSpecularLighting
          surfaceScale="13"
          specularConstant="1.2"
          specularExponent="20"
          lightingColor="#B6BACD"
          in="turbulence"
          result="specularLighting"
        >
          <feDistantLight azimuth="3" elevation="66"></feDistantLight>
        </feSpecularLighting>
      </filter>
      <rect x={0} y={0} width={210} height={250} fill="#62627D" />
      <rect
        x={0}
        y={0}
        width={210}
        height={250}
        fill="#b6bacd"
        filter="url(#nnnoise-filter)"
      />

      <path
        d="M25 10 H190 V20 H200 V230 H190 V240 H20 V230 H10 V20 H20 V10 Z"
        fill="#3A2C34"
      />
      <path
        stroke="#2E364A"
        strokeWidth={0.7}
        d="M25 10 H190 V20 H200 V230 H190 V240 H20 V230 H10 V20 H20 V10 Z M25 15 H185 V25 H195 V225 H185 V235 H25 V225 H15 V25 H25 V15 Z"
        fill={borderColor}
        fillRule="evenodd"
      />
      <path stroke="#D3CED4" strokeWidth={0.7} d="M185 25 H195" />
      <path stroke="#D3CED4" strokeWidth={0.7} d="M25 225 V235" />
      <path
        stroke="#D3CED4"
        strokeWidth={0.7}
        d="M15 225 V25 H25 V15 H185"
        fill="none"
      />
      <path stroke="#D3CED4" strokeWidth={0.7} d="M10 230 H20" />
      <path
        stroke="#D3CED4"
        strokeWidth={0.7}
        d="M20 240 H190 V230 H200 V20"
        fill="none"
      />
      <image
        x={50}
        width={210}
        height={250}
        preserveAspectRatio="none"
        href="seiya.png"
      />
      <image
        x={27}
        y={188}
        width={160}
        height={38}
        preserveAspectRatio="none"
        href="logo.png"
      />
      <image
        x={20}
        y={20}
        width={50}
        preserveAspectRatio="none"
        href="logo-series.png"
      />
      <image
        x={178}
        y={220}
        width={23}
        preserveAspectRatio="none"
        href="bandai.png"
      />
    </svg>
  );
}
/*
function MythBox() {
  return (
    <svg
      width={210}
      height={250}
      style={{ border: "blue solid" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="filter">
        <feTurbulence baseFrequency={0.1} />
        <feColorMatrix
          values="0.1 0.2 0.3 0.4 0.5
                  0 0 0 0 0
                  0 0 0 0 0
                  0 0 0 0 0"
        />
      </filter>
      <rect
        x={0}
        y={0}
        width={210}
        height={250}
        filter="url(#filter)"
        fill="#62627D"
      />

      <path stroke="grey" strokeWidth={0.4} d="M0 10 H210" />
      <path stroke="grey" strokeWidth={0.4} d="M0 15 H210" />
      <path stroke="grey" strokeWidth={0.4} d="M0 20 H210" />
      <path stroke="grey" strokeWidth={0.4} d="M0 25 H210" />
      <path stroke="grey" strokeWidth={0.4} d="M0 225 H210" />
      <path stroke="grey" strokeWidth={0.4} d="M0 230 H210" />
      <path stroke="grey" strokeWidth={0.4} d="M0 235 H210" />
      <path stroke="grey" strokeWidth={0.4} d="M0 240 H210" />
      <path stroke="grey" strokeWidth={0.4} d="M10 0 V250" />
      <path stroke="grey" strokeWidth={0.4} d="M15 0 V250" />
      <path stroke="grey" strokeWidth={0.4} d="M20 0 V250" />
      <path stroke="grey" strokeWidth={0.4} d="M25 0 V250" />
      <path stroke="grey" strokeWidth={0.4} d="M185 0 V250" />
      <path stroke="grey" strokeWidth={0.4} d="M190 0 V250" />
      <path stroke="grey" strokeWidth={0.4} d="M195 0 V250" />
      <path stroke="grey" strokeWidth={0.4} d="M200 0 V250" />
      <path
        d="M25 10 H190 V20 H200 V230 H190 V240 H20 V230 H10 V20 H20 V10 Z"
        fill="#3A2C34"
      />
      <path
        stroke="#2E364A"
        strokeWidth={0.7}
        d="M25 10 H190 V20 H200 V230 H190 V240 H20 V230 H10 V20 H20 V10 Z M25 15 H185 V25 H195 V225 H185 V235 H25 V225 H15 V25 H25 V15 Z"
        fill="#287FBA"
        fillRule="evenodd"
      />
      <path stroke="#D3CED4" strokeWidth={0.7} d="M185 25 H195" />
      <path stroke="#D3CED4" strokeWidth={0.7} d="M25 225 V235" />
      <path
        stroke="#D3CED4"
        strokeWidth={0.7}
        d="M15 225 V25 H25 V15 H185"
        fill="none"
      />
      <path stroke="#D3CED4" strokeWidth={0.7} d="M10 230 H20" />
      <path
        stroke="#D3CED4"
        strokeWidth={0.7}
        d="M20 240 H190 V230 H200 V20"
        fill="none"
      />
      <image
        x={50}
        width={210}
        height={250}
        preserveAspectRatio="none"
        href="seiya.png"
      />
      <image
        x={27}
        y={188}
        width={160}
        height={38}
        preserveAspectRatio="none"
        href="logo.png"
      />
      <image
        x={20}
        y={20}
        width={50}
        preserveAspectRatio="none"
        href="logo-series.png"
      />
      <image
        x={178}
        y={220}
        width={23}
        preserveAspectRatio="none"
        href="bandai.png"
      />
    </svg>
  );
}
// xlinkHref="https://imagizer.imageshack.com/img924/117/ieWbtY.png"
*/
export default MythClothBox;
