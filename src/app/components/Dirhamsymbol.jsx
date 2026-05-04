export const DirhamSymbol = ({ size = 16 }) => (
  <span className="relative inline-block font-bold" style={{ fontSize: size }}>
    <span className="relative inline-block" style={{ fontFamily: "Georgia, serif" }}>
      D
      <span className="absolute left-0" style={{
        top: "40%",
        width: "110%",
        borderTop: "1.5px solid currentColor"
      }}></span>
      <span className="absolute left-0" style={{
        top: "58%",
        width: "110%",
        borderTop: "1.5px solid currentColor"
      }}></span>
    </span>
  </span>
)

// 
