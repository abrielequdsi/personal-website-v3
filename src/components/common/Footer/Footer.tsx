import React from 'react'
import { Github, Instagram, LinkedIn, Twitter, Mail } from '@components/icons'

const navigation = {
  social: [
    {
      name: 'Github',
      href: 'https://github.com/abrielequdsi',
      icon: (props: any) => <Github {...props} />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abrielequdsi/',
      icon: (props: any) => <LinkedIn {...props} />,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/abrielequdsi',
      icon: (props: any) => <Twitter {...props} />,
    },
    {
      name: 'Mail',
      href: 'mailto:web.qudsi@gmail.com',
      icon: (props: any) => <Mail {...props} />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/abrielequdsi/',
      icon: (props: any) => <Instagram {...props} />,
    },
  ],
}

const Footer = (): JSX.Element  => {
  return (
    <footer>
      <div className="max-w-7xl mx-auto pb-6 pt-10 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="mt-8 flex justify-center space-x-9">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-x2-grey hover:text-vampire-black"
            >
              <span className="sr-only">{item.name}</span>
              {/* <item.icon className="h-5 w-5" aria-hidden="true" /> */}
              <item.icon className="h-5 w-5" aria-hidden="true" />
              {/* {item.icon} */}
            </a>
          ))}
        </div>
        <p className="mt-6 text-center text-base text-x2-grey">
          &copy; 2019 Abriele Qudsi
        </p>
      </div>
    </footer>
  )
}

export default Footer
