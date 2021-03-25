import categories from '../data/categories.json';

export default function createTabs() {
  const tabs = []
  // COMING SOON!!!
  // const subcategories = [];

  // for (let i = 1; i <= 3; i++) {
  //   subcategories.push({
  //     as: `/s/${i}`,
  //     href: '/s/[...categorySlug]',
  //     text: `${subcategoryNames[i]}`
  //   })
  // }
  // EOF COMING SOON!!!

  for (let i = 1; i <= 10; i++) {
    tabs.push({
      as: `/s/${i}`,
      href: '/s/[...categorySlug]',
      text: categories[i],
      // COMING SOON!!!
      // items: subcategories,
      // EOF COMING SOON!!!
    })
  }

  return tabs
}
