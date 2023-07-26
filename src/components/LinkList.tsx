import React from 'react'

interface LinksI {
  name: string;
  href: string
}

export default function LinkList() {
  const list: LinksI[] = [
    {
      name: 'About Us',
      href: '/'
    },
    {
      name: 'Portfolio',
      href: '/portfolio'
    },
    {
      name: 'About Us',
      href: '/about'
    }
  ]
  
  return list
}
