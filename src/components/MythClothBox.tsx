import "../styles/myth-cloth-styles.css";

function MythClothBox({
  characterName,
  boxStyle,
}: {
  characterName: string;
  boxStyle: BoxStyle;
}) {
  const myhCharacterName = "characters/" + characterName + ".png";

  return (
    <svg
      width={boxStyle.width}
      height={boxStyle.height}
      xmlns="http://www.w3.org/2000/svg"
    >
      // backgroud
      <filter id="bgFilter">
        <feTurbulence baseFrequency={0.3} />
        <feColorMatrix
          values="0 0 0 9 -4
                  0 0 0 9 -4
                  0 0 0 9 -4
                  0 0 0 0 1"
        />
      </filter>
      <rect
        width={boxStyle.width}
        height={boxStyle.height}
        filter="url(#bgFilter)"
      />
      // outer border
      <path
        d="M0 0 H200 V255 H0 Z
           M19 11 H181 V19 H189 V236 H181 V244 H19 V236 H11 V19 H19 Z"
        fill="#5B7094"
        fillRule="evenodd"
      />
      // inner border
      <path
        d="M19 11 H181 V19 H189 V236 H181 V244 H19 V236 H11 V19 H19 Z 
           M23 15 H177 V23 H185 V232 H177 V240 H23 V232 H15 V23 H23 Z"
        fill={boxStyle.borderColor}
        fillRule="evenodd"
      />
      // inner border (shadow)
      <path stroke="#D3CED4" strokeWidth={0.7} d="M177 23 H185" />
      <path stroke="#D3CED4" strokeWidth={0.7} d="M23 232 V240" />
      <path
        stroke="#D3CED4"
        strokeWidth={0.7}
        d="M15 232 V23 H23 V15 H177"
        fill="none"
      />
      <path stroke="#D3CED4" strokeWidth={0.7} d="M11 236 H19" />
      <path
        stroke="#D3CED4"
        strokeWidth={0.7}
        d="M19 244 H181 V236 H189"
        fill="none"
      />
      // The actual character.
      <image
        x={80}
        width={118}
        preserveAspectRatio="none"
        href={myhCharacterName}
        className="border-shadow"
      />
      <image
        x={27}
        y={188}
        width={150}
        preserveAspectRatio="none"
        href="boxStyle/mythcloth-logo.png"
      />
      <image
        x={20}
        y={20}
        width={50}
        preserveAspectRatio="none"
        href="boxStyle/classic-series-logo.png"
      />
      <image
        x={170}
        y={223}
        width={23}
        preserveAspectRatio="none"
        href="boxStyle/bandai-red-logo.png"
      />
    </svg>
  );
}

// xlinkHref="https://imagizer.imageshack.com/img924/117/ieWbtY.png"
export default MythClothBox;
