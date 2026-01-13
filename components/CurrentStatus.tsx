export default function CurrentStatus({ batteryLevel }: { batteryLevel: number }) {
  const getStatusColor = (level: number) => {
    if (level >= 75) return "text-emerald-600"
    if (level >= 50) return "text-blue-600"
    if (level >= 25) return "text-amber-600"
    return "text-red-600"
  }

  const getProgressColor = (level: number) => {
    if (level >= 75) return "bg-emerald-500"
    if (level >= 50) return "bg-blue-500"
    if (level >= 25) return "bg-amber-500"
    return "bg-red-500"
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 mb-6">
      <h2 className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-4">Current Status</h2>

      <div className="flex items-center justify-between mb-6">
        <div>
          <p className={`text-4xl sm:text-5xl font-bold ${getStatusColor(batteryLevel)}`}>{batteryLevel}%</p>
          <p className="text-gray-500 text-sm mt-1">Battery Charged</p>
        </div>

        <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full flex items-center justify-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full ${getProgressColor(batteryLevel)} transition-all duration-300`}
          style={{ width: `${batteryLevel}%` }}
        ></div>
      </div>

      <p className="text-gray-500 text-xs mt-3">Ready to trade or store energy</p>
    </div>
  )
}
