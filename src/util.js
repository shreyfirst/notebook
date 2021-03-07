import { isEmpty } from 'lodash'

export const getName = path => {
  if (!path.includes('404') && (path !== "/")) {
    var hi = path
    hi = hi.replaceAll('_',' ')
    hi = hi.replaceAll('/','')
    hi = hi.replaceAll('+','')
    const mySentence = hi;
    const words = mySentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    hi = words.join(" ");
    console.log(hi)
    return words
  } else {
    return path
  }
  
}

export const hasDate = path =>
  !isEmpty(path.toString().match(/(\w{4})/))

export const getDate = path => {
  const match = path.match(/(\w{4})/)
  return match ? match[0] : ''
}

export const getDescription = path => {
  if (path === '/') {
    return 'Vote Shrey Gupta for IHS ASB President. Use this guide to learn why you should vote for him.'
  }
  let date = ''
  if (hasDate(path)) {
    date = new Date(getDate(path))
  }
  return `Post by Shrey Gupta on his personal Notebook blog.`
}

export const getImage = path => {
  if (path === '/') {
    return 'https://notebook-cards-sandy.vercel.app/Notebook.png?fontSize=400px'
  }
  let name = getName(path.toString())
  let caption
  let params = ''
  let theme = 'light'
  if (hasDate(path)) {
    let date = getDate(path)
    if (path.replace(/\//g, '') !== date) {
      caption = date
    }
    if (name.length > 30) {
      params += '&fontSize=225px'
    }
  } else {
    theme = 'dark'
    params += '&fontSize=275px'
  }
  name = encodeURIComponent(name)
  caption = encodeURIComponent(caption)
  return `https://notebook-cards-sandy.vercel.app/${name}.png?caption=${caption}&theme=${theme}${params}`
}
