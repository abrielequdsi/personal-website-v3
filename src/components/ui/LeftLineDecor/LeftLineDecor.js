import React from 'react'
import { Side } from '@components/ui'
import styles from './LeftLineDecor.module.css'
import { Github, Instagram, LinkedIn, Twitter, Mail } from '@components/icons'

const navigation = {
  social: [
    {
      name: 'Github',
      href: 'https://github.com/abrielequdsi',
      icon: <Github />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abrielequdsi/',
      icon: <LinkedIn />,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/abrielequdsi',
      icon: <Twitter />,
    },
    {
      name: 'Mail',
      href: 'mailto:web.qudsi@gmail.com',
      icon: <Mail />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/abrielequdsi/',
      icon: <Instagram />,
    },
  ],
}

const LeftLineDecor = () => {
  return (
    <Side orientation="left">
      <ul className={styles.ulDecor}>
        {navigation.social.map((item, i) => (
          <li key={i}>
            <a key={item.name} href={item.href}>
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </Side>
  )
}

export default LeftLineDecor
