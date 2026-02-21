// Simple theme system - just change the export to switch themes
// No CSS files, no complex setup, just clean Tailwind classes

export const themes = {
  // Current blue-cyan theme (default)
  current: {
    background: "bg-gradient-to-br from-cyan-50 via-teal-50 to-cyan-100",
    titleGradient1: "bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent",
    titleGradient2: "bg-gradient-to-r from-cyan-600 via-blue-500 to-blue-600 bg-clip-text text-transparent",
    button: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700",
    trustBorder: "border-sky-200",
    trustNumber: "bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent",
    valueSection: "bg-gradient-to-r from-cyan-50/30 via-teal-50/20 to-cyan-100/30",
    icon1: "bg-gradient-to-br from-blue-600 to-cyan-600",
    icon2: "bg-gradient-to-br from-cyan-600 to-blue-500",
    icon3: "bg-gradient-to-br from-cyan-600 to-blue-600",
    signupSection: "bg-gradient-to-r from-cyan-50/80 to-teal-50/80",
    signupButton: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
  },

  // Purple theme
  purple: {
    background: "bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100",
    titleGradient1: "bg-gradient-to-r from-slate-900 via-purple-600 to-slate-900 bg-clip-text text-transparent",
    titleGradient2: "bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent",
    button: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
    trustBorder: "border-purple-200",
    trustNumber: "bg-gradient-to-r from-slate-900 via-purple-600 to-slate-900 bg-clip-text text-transparent",
    valueSection: "bg-gradient-to-r from-purple-50/30 via-pink-50/20 to-purple-100/30",
    icon1: "bg-gradient-to-br from-purple-600 to-pink-600",
    icon2: "bg-gradient-to-br from-pink-600 to-purple-500",
    icon3: "bg-gradient-to-br from-purple-600 to-pink-600",
    signupSection: "bg-gradient-to-r from-purple-50/80 to-pink-50/80",
    signupButton: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
  },

  // Green theme
  green: {
    background: "bg-gradient-to-br from-green-50 via-emerald-50 to-green-100",
    titleGradient1: "bg-gradient-to-r from-slate-900 via-green-600 to-slate-900 bg-clip-text text-transparent",
    titleGradient2: "bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent",
    button: "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700",
    trustBorder: "border-green-200",
    trustNumber: "bg-gradient-to-r from-slate-900 via-green-600 to-slate-900 bg-clip-text text-transparent",
    valueSection: "bg-gradient-to-r from-green-50/30 via-emerald-50/20 to-green-100/30",
    icon1: "bg-gradient-to-br from-green-600 to-emerald-600",
    icon2: "bg-gradient-to-br from-emerald-600 to-green-500",
    icon3: "bg-gradient-to-br from-green-600 to-emerald-600",
    signupSection: "bg-gradient-to-r from-green-50/80 to-emerald-50/80",
    signupButton: "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
  },

  // Sunset theme - Orange-Red warm
  sunset: {
    background: "bg-gradient-to-br from-orange-50 via-red-50 to-orange-100",
    titleGradient1: "bg-gradient-to-r from-slate-900 via-orange-600 to-slate-900 bg-clip-text text-transparent",
    titleGradient2: "bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 bg-clip-text text-transparent",
    button: "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700",
    trustBorder: "border-orange-200",
    trustNumber: "bg-gradient-to-r from-slate-900 via-orange-600 to-slate-900 bg-clip-text text-transparent",
    valueSection: "bg-gradient-to-r from-orange-50/30 via-red-50/20 to-orange-100/30",
    icon1: "bg-gradient-to-br from-orange-600 to-red-600",
    icon2: "bg-gradient-to-br from-red-600 to-orange-500",
    icon3: "bg-gradient-to-br from-orange-600 to-red-600",
    signupSection: "bg-gradient-to-r from-orange-50/80 to-red-50/80",
    signupButton: "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
  },

  // Professional theme - Monochrome sophisticated
  professional: {
    background: "bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100",
    titleGradient1: "bg-gradient-to-r from-slate-900 via-gray-700 to-slate-900 bg-clip-text text-transparent",
    titleGradient2: "bg-gradient-to-r from-gray-700 via-slate-600 to-gray-700 bg-clip-text text-transparent",
    button: "bg-gradient-to-r from-gray-800 to-slate-800 hover:from-gray-900 hover:to-slate-900",
    trustBorder: "border-gray-200",
    trustNumber: "bg-gradient-to-r from-slate-900 via-gray-700 to-slate-900 bg-clip-text text-transparent",
    valueSection: "bg-gradient-to-r from-gray-50/30 via-slate-50/20 to-gray-100/30",
    icon1: "bg-gradient-to-br from-gray-700 to-slate-700",
    icon2: "bg-gradient-to-br from-slate-700 to-gray-600",
    icon3: "bg-gradient-to-br from-gray-700 to-slate-700",
    signupSection: "bg-gradient-to-r from-gray-50/80 to-slate-50/80",
    signupButton: "bg-gradient-to-r from-gray-800 to-slate-800 hover:from-gray-900 hover:to-slate-900"
  },

  // Dark Purple theme
  darkPurple: {
    background: "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800",
    titleGradient1: "bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent",
    titleGradient2: "bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent",
    button: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500",
    trustBorder: "border-purple-700",
    trustNumber: "bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent",
    valueSection: "bg-gradient-to-r from-slate-800/50 via-purple-900/30 to-slate-800/50",
    icon1: "bg-gradient-to-br from-purple-600 to-pink-600",
    icon2: "bg-gradient-to-br from-pink-600 to-purple-500",
    icon3: "bg-gradient-to-br from-purple-600 to-pink-600",
    signupSection: "bg-gradient-to-r from-slate-800/80 to-purple-900/80",
    signupButton: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"
  }
};

// Change this line to switch themes instantly:
export const currentTheme = themes.purple;