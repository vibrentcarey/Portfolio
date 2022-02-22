import hadgits from '../hadgits.png'
import spacestagram from '../spacestagram.png'
import applied from '../applied.png'
import restaurant from '../restaurant.png'

export const projects = [
  {
    title: 'Applied',
    description: 'Applied is a Full Stack job tracking application that allows users to keep track of all the jobs they apply to.',
    stack: ['React', 'Tailwind', 'TypeScript', 'Next', 'Node'],
    link: 'https://applied.vercel.app/',
    image: applied
  },
  {
    title: 'Hadgits',
    description: 'Hadgits is a Full Stack Application that allows users to keep track of their habits. It will keep track of your habit streak and allow you to add reasons and resources for keeping your streak going.',
    stack: ['React', 'Tailwind', 'TypeScript', 'Next', 'Node'],
    link: 'https://hadgits.vercel.app/',
    image: hadgits
  },
  {
    title: 'Green Bite',
    description: 'GreenBite is a Front End restaurant app that allows users to add items to their cart and checkout.',
    stack: ['React', 'Tailwind'],
    link: 'https://elated-haibt-a086eb.netlify.app/',
    image: restaurant
  },
  {
    title: 'Spacestagram',
    description: 'Spacestagram is an image gallery that uses the NASA API. This project was created for a Shopify internship take home challenge.',
    stack: ['React', 'CSS', 'Next'],
    link: 'https://spacestagram-sand.vercel.app/',
    image: spacestagram
  },

]