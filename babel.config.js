const presets = [
  [
    "@babel/env",
    {
      // какой пресет использовать
      targets: {
        // какие версии браузеров поддерживать
        edge: "99",
        ie: "11",
        firefox: "99",
        chrome: "96",
        safari: "15.4",
      },

      // использовать полифиллы для браузеров из свойства target
      // по умолчанию babel использует поллифиллы библиотеки core-js
      useBuiltIns: "entry",
    },
  ],
];

module.exports = { presets };
