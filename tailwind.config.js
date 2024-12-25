/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '12px' : '12px',
        '152px' : '152px',
        '322px' : '322px',
        '330px' : '330px',
        '352px' : '352px',
        '125px' : '125px',
        '124px' : '124px',
        '308px' : '308px',
        '232px' : '232px',
        '519px' : '519px',
        '144px' : '144px',
        '100%' : '100%',
      },
      padding:{
        '40px' : '40px',
        '24px' : '24px',
        '8px' : '8px',
      },
      fontSize:{
        '32px' : '32px',
        '12px' : '12px',
        '14px' : '14px',
        '16px' : '16px',
        '20px' : '20px',
        '80px' : '80px',
        '52px' : '52px',
        '64px' : '64px',
        '44px' : '44px',
        '24px' : '24px',
        '26px' : '26px',
        '18px' : '18px',
      },
      fontWeight:{
        '400' : '400'
      },
      letterSpacing:{
        '-2.08px' : '-2.08px',
        '-0.32px' : '-0.32px'
      },
      lineHeight:{
        '120%' : '120%',
        '110%' : '110%',
        '140%' : '140%',
        '150%' : '150%'
      },
      margin:{
        '40px' : '40px',
        '120px' : '120px',
        '24px' : '24px',
      },
      width:{
        '1024px' : '1024px',
        '460px' : '460px',
        '389px' : '389px',
        '297px' : '297px',
        '390px' : '390px',
        '12px' : '12px',
        '170px' : '170px',
        '134.5px' : '134.5px',
      },
      gap:{
        '24px' : '24px',
        '16px' : '16px',
      },
      borderRadius:{
        '28px': '28px',
        '16px': '16px'
      },
      colors:{
        'customGrey' : '#3B4572',
        'customCardGrey' : '#2E3450',
        'customWhite' : '#FFF5DB',
        'customRed' : '#E82900',
        'customTextHeader' : '#7D83A0',
        'customBorder' : '#32343D',
        'customBackground' : '#1E1F24',
        'customFontSub' : '#9B9FB6'
      },
      opacity:{
        '16%' : '16%'
      },
      fontFamily: {
        youngSerif: ['Young Serif', 'sans-serif'], // Example for Google Fonts
        custom: ['MyCustomFont', 'sans-serif'], // Example for local font
      },
  
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* For Webkit browsers like Chrome, Safari, Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* For Firefox */
          'scrollbar-width': 'none',
          /* For Internet Explorer / Edge */
          '-ms-overflow-style': 'none',
        },
      });
    },
  ],
}

