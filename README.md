## Installation steps

1. Clone the repository
2. Being in the `master` branch, install all the packages needed using `yarn install` or `npm install`
3. You can switch between `layout (design)` and `interactive (js interaction)` branches.s
4. Run the project with `yarn start` or `npm start`
5. The votes are stored in the localStorage so, if you need to reset the votes please clear the localStorage

## Additional information

- I was thinking what should happen if the votes are the same (50% - 50%). So, i decided to change the icon and the background color to a question mark and a gradient between thumbs up and thumbs down color to show the indecision.
- I tried to be careful with the details, for example you will see links to the real data. (Pope francis wikipedia link, Zemoga's facebook and twitter)
- I add a decimal to the percentages because if i applied the Math.Round() the percentages were wrong in some cases. For example. If you have 80 thumbs up and 79 thumbs down this will show 50% for both sides and that is not true.
- I use bootstrap as a css framework and makes uses of the mobile menu functionality, but i never used directly JQuery code.
- I couldn't find the background image for the last section (the one with the Submit a Name button)
- I wish i could show my node basic knowledge, but for some unexpected troubles i couldn't add this to the project, so i decided to go with the localStorage
