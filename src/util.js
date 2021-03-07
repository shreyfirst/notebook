import { isEmpty } from 'lodash'

export const getName = path => {
  if (path.includes('404') || (path==='/')) {
    return path.replaceAll('/','')
  } else {  
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
    console.log(words)
    return hi
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
    return 'Lachlan Campbell’s personal blog, Notebook, with posts about whatever they want.'
  }
  let date = ''
  if (hasDate(path)) {
    date = new Date(getDate(path))
  }
  return `Post by Lachlan Campbell${date} on their personal Notebook blog.`
}

export const getImage = path => {
  if (path == '/') {
    return 'https://notebook-cards-sandy.vercel.app/Notebook.png?fontSize=400px'
  }
  if (path == "/") {
    return 'https://notebook-cards-sandy.vercel.app/Notebook.png?fontSize=400px'
  }
  if (path === '/404/') {
    return 'https://notebook-cards-sandy.vercel.app/Notebook.png?fontSize=400px'
  }
  if (path === '/404') {
    return 'https://notebook-cards-sandy.vercel.app/Notebook.png?fontSize=400px'
  }
  if (path === '404') {
    return 'https://notebook-cards-sandy.vercel.app/Notebook.png?fontSize=400px'
  }
  let name = getName(path.toString())
  let caption
  let params = ''
  let theme = 'light'
  theme = 'dark'
  params += '&fontSize=275px'
  name = encodeURIComponent(name)
  caption = encodeURIComponent(caption)
  return `https://notebook-cards-sandy.vercel.app/${name}.png?caption=${caption}&theme=${theme}${params}`
}
