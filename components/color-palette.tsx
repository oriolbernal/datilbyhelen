export function ColorPalette() {
  const colors = [
    { name: "Beige", class: "bg-datil-beige", hex: "#EAD9A7" },
    { name: "White", class: "bg-datil-white", hex: "#FFFFFF" },
    { name: "Brown", class: "bg-datil-brown", hex: "#462A1E" },
    { name: "Yellow", class: "bg-datil-yellow", hex: "#B5A81C" },
    { name: "Orange", class: "bg-datil-orange", hex: "#E05D2A" },
    { name: "Blue", class: "bg-datil-blue", hex: "#7BA0C9" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {colors.map((color) => (
        <div key={color.name} className="flex flex-col">
          <div className={`${color.class} h-24 rounded-md shadow-md`} aria-label={`${color.name} color`}></div>
          <div className="mt-2 text-center">
            <p className="font-medium">{color.name}</p>
            <p className="text-sm text-muted-foreground">{color.hex}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

