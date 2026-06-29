interface Props {
  height?: number
}

export default function LogoSVG({ height = 48 }: Props) {
  const w = Math.round(height * 2.85)

  return (
    <svg
      width={w}
      height={height}
      viewBox="0 0 285 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AHADI Group"
      role="img"
    >
      {/* Diagonale gauche du A — descend sous la barre */}
      <line
        x1="113" y1="6"
        x2="72" y2="93"
        stroke="#0FA7A0"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Diagonale droite du A — s'arrête à la barre */}
      <line
        x1="113" y1="6"
        x2="148" y2="57"
        stroke="#0FA7A0"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Barre horizontale */}
      <line
        x1="46" y1="57"
        x2="188" y2="57"
        stroke="#0FA7A0"
        strokeWidth="9"
        strokeLinecap="round"
      />
      {/* Cercle marine (contrepoids) */}
      <circle cx="59" cy="53" r="8" fill="#1C2B4B" />

      {/* Texte AHADI */}
      <text
        x="158"
        y="44"
        fontFamily="DM Serif Display, Georgia, serif"
        fontSize="30"
        fill="#1C2B4B"
        letterSpacing="1"
      >
        AHADI
      </text>

      {/* Texte GROUP */}
      <text
        x="162"
        y="71"
        fontFamily="DM Sans, Arial, sans-serif"
        fontSize="17"
        fill="#0FA7A0"
        letterSpacing="2.5"
      >
        GROUP
      </text>
    </svg>
  )
}
