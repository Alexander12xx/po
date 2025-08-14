module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Electric Blue
        primary: {
          DEFAULT: "#00D4FF", // electric-blue
          50: "#E6F9FF", // electric-blue-50
          100: "#CCF3FF", // electric-blue-100
          200: "#99E7FF", // electric-blue-200
          300: "#66DBFF", // electric-blue-300
          400: "#33CFFF", // electric-blue-400
          500: "#00D4FF", // electric-blue-500
          600: "#00A3CC", // electric-blue-600
          700: "#007299", // electric-blue-700
          800: "#004166", // electric-blue-800
          900: "#001033", // electric-blue-900
        },
        // Secondary Colors - Neon Purple
        secondary: {
          DEFAULT: "#8B5CF6", // neon-purple
          50: "#F3EFFF", // neon-purple-50
          100: "#E7DFFF", // neon-purple-100
          200: "#CFBFFF", // neon-purple-200
          300: "#B79FFF", // neon-purple-300
          400: "#9F7FFF", // neon-purple-400
          500: "#8B5CF6", // neon-purple-500
          600: "#6F4AC5", // neon-purple-600
          700: "#533894", // neon-purple-700
          800: "#372663", // neon-purple-800
          900: "#1B1432", // neon-purple-900
        },
        // Accent Colors - Cyber Green
        accent: {
          DEFAULT: "#00FF88", // cyber-green
          50: "#E6FFEF", // cyber-green-50
          100: "#CCFFDF", // cyber-green-100
          200: "#99FFBF", // cyber-green-200
          300: "#66FF9F", // cyber-green-300
          400: "#33FF7F", // cyber-green-400
          500: "#00FF88", // cyber-green-500
          600: "#00CC6D", // cyber-green-600
          700: "#009952", // cyber-green-700
          800: "#006637", // cyber-green-800
          900: "#00331C", // cyber-green-900
        },
        // Background Colors
        background: "#0A0A0F", // deep-space
        surface: {
          DEFAULT: "#1A1A2E", // subtle-elevation
          light: "#2A2A3E", // surface-light
          lighter: "#3A3A4E", // surface-lighter
        },
        // Text Colors
        text: {
          primary: "#FFFFFF", // white
          secondary: "#A0A0B8", // text-secondary
          muted: "#808090", // text-muted
          disabled: "#606070", // text-disabled
        },
        // Status Colors
        success: "#00FF88", // cyber-green
        warning: {
          DEFAULT: "#FFB800", // warning-amber
          50: "#FFF9E6", // warning-50
          100: "#FFF3CC", // warning-100
          200: "#FFE799", // warning-200
          300: "#FFDB66", // warning-300
          400: "#FFCF33", // warning-400
          500: "#FFB800", // warning-500
          600: "#CC9300", // warning-600
          700: "#996E00", // warning-700
          800: "#664900", // warning-800
          900: "#332500", // warning-900
        },
        error: {
          DEFAULT: "#FF4757", // error-red
          50: "#FFE8EA", // error-50
          100: "#FFD1D5", // error-100
          200: "#FFA3AB", // error-200
          300: "#FF7581", // error-300
          400: "#FF4757", // error-400
          500: "#FF1929", // error-500
          600: "#CC1421", // error-600
          700: "#990F19", // error-700
          800: "#660A11", // error-800
          900: "#330508", // error-900
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'inter-display': ['Inter Display', 'sans-serif'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        display: ['Inter Display', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'glow-primary': '0 4px 20px rgba(0, 212, 255, 0.15)',
        'glow-secondary': '0 4px 20px rgba(139, 92, 246, 0.15)',
        'glow-accent': '0 4px 20px rgba(0, 255, 136, 0.15)',
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'large': '0 8px 32px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient-primary': {
          background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-accent': {
          background: 'linear-gradient(135deg, #00FF88, #00D4FF)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.bg-gradient-cyber': {
          background: 'linear-gradient(135deg, #00D4FF, #8B5CF6, #00FF88)',
        },
        '.border-gradient': {
          border: '1px solid transparent',
          background: 'linear-gradient(#0A0A0F, #0A0A0F) padding-box, linear-gradient(135deg, #00D4FF, #8B5CF6) border-box',
        },
        '.transition-smooth': {
          transition: 'all 300ms cubic-bezier(0, 0, 0.2, 1)',
        },
        '.transition-fast': {
          transition: 'all 150ms cubic-bezier(0, 0, 0.2, 1)',
        },
        '.transition-slow': {
          transition: 'all 500ms cubic-bezier(0, 0, 0.2, 1)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}