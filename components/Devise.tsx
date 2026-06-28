const items = ['Engagement', 'Transparence', 'Sérénité']

export default function Devise() {
  return (
    <div className="border-t border-b border-bordure bg-fond">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item}
              className={`flex flex-col items-center justify-center py-5 ${
                i < items.length - 1 ? 'border-r border-bordure' : ''
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-ahadi mb-2" aria-hidden="true" />
              <span
                className="text-gris-leger uppercase"
                style={{ fontSize: '11px', letterSpacing: '3px' }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
