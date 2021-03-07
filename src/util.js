import { isEmpty } from 'lodash'

export const getName = path => {

    var hi = path
    hi = hi.replace('head_','')
    hi = hi.replace('norm_','')
    hi = hi.replace(/\_/g,' ')
    hi = hi.replace(/\//g,'')
    hi = hi.replace(/\=/g,'')
    const mySentence = hi;
    const words = mySentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    hi = words.join(" ");
    console.log(words)
    return hi
  
  
}

export const hasDate = path =>
  !isEmpty(path.toString().match(/(\w{4})/))

export const getDate = path => {
  const match = path.match(/(\w{4})/)
  return match ? match[0] : ''
}

export const getDescription = path => {
  if (path === '/') {
    return "Learn more about why you should vote Shrey Gupta to be your IHS ASB President."
  }
  return "Learn more about why you should vote Shrey Gupta to be your IHS ASB President."
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
  // theme = 'dark'
  params += '&fontSize=250px'
  name = encodeURIComponent(name)
  caption = encodeURIComponent(caption)
  return `https://notebook-cards-sandy.vercel.app/${name}.png?caption=${caption}&theme=${theme}${params}`
}
