export const module = {
  rules: [
    {
      test: /\.svg$/,
      use: [
        {
          loader: "@svg/webpack",
          options: {}
        }
      ]
    }
  ]
};
