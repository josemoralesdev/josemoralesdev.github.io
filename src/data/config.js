import React from 'react'
// Icons
import Messenger from "../assets/icons/messenger.jsx"
import Email from "../assets/icons/email.jsx"
import Github from "../assets/icons/github.jsx"
import Instagram from "../assets/icons/instagram.jsx"
import LinkedIn from "../assets/icons/linkedin.jsx"
// Images
import CreateImage from '../assets/images/create.png'
// Illustrations
import IdeaSVG from '../assets/illustrations/idea.svg'

export const HeaderData = {
    logo: '../assets/logo/logo.svg',
    navLinks: ['home', 'about', 'services', 'projects', 'contact'],
}
export const HomeData = {
    section: 'home',
    greeting: 'hi, my name is Jose E. Morales',
    role: 'i\'m a software engineer',
    image: '',
    callToAction: 'download cv',
    defaultAction: 'see more',
    socialLinks: {
        email: {
            id: '1',
            name: 'Email',
            icon: <Email />,
            url: 'mailto:eduardomorales.dev@gmail.com?subject=Mail from portfolio site'
        },
        github: {
            id: '2',
            name: 'Github',
            icon: <Github />,
            url: 'https://github.com/EduardoMorales-Dev'
        },
        instagram: {
            id: '3',
            name: 'Instagram',
            icon: <Instagram />,
            url: 'https://instagram.com/josemorales.dev/'
        },
        linkedIn: {
            id: '4',
            name: 'Linkedin',
            icon: <LinkedIn />,
            url: 'https://www.linkedin.com/in/eduardomorales-dev/'
        },
        messenger: {
            id: '5',
            name: 'Messenger',
            icon: <Messenger />,
            url: ''
        },
    }
}
export const AboutData = {
    section: 'about',
    image: `${CreateImage}`,
    textOne: 'Ever since I was a child, I\'ve been passionate about problem solving and the tech world. Today I find myself developing creative solutions in the software industry, keeping in mind the quality of my work and trying to learn a little  bit more every day.',
    textTwo: 'graduated from instituto tecnologico de sonora (itson) on the year 2015-2019.',
    textThree: 'i’ve been working as a freelance since then, some of my projects involves desktop  & web apps development.'
}
export const ServicesData = {
    section: 'services',
    serviceOne: {
        id: '1',
        icon: '../assets/icons/...',
        serviceTitle: {
            title: 'design',
            text: 'i like to keep things clean & simple'
        },
        serviceSubtitle: {
            title: 'thinks i enjoy designing',
            text: ['websites, web apps, mobile apps']
        },
        servicesTools: {
            title: 'design tools',
            text: ['figma', 'pen & paper']
        }
    },
    serviceTwo: {
        id: '2',
        icon: '../assets/icons/...',
        serviceTitle: {
            title: 'development',
            text: 'i love to code ideas & bring them to real life solutions'
        },
        serviceSubtitle: {
            title: 'technologies i\'ve worked with',
            text: [
                'HTML5',
                'CSS3',
                'JS',
                'React',
                'C#',
                'Java',
                'SQL'
            ]
        },
        servicesTools: {
            title: 'dev tools',
            text: ['git', 'github', 'vim', 'vscode', 'terminal']
        },
    }
}
export const ProjectsData = {
    section: 'projects',
    title: 'some of the projects i\'ve developed',
    projectsGrid: {
        categories: ['all', 'web app', 'website', 'android', 'desktop'],
        projects: {
            1: {
                id: '1',
                name: 'El Antojo Hamburguesas',
                description: 'Digital menu for a small hamburguer business',
                image: '',
                imageSrcSet: '',
                imageSizes: '',
                category: 'web app',
                slug: ''
            },
            2: {
                id: '2',
                name: 'Nirvana Sushi',
                description: 'Digital menu & SEO for a sushi business',
                image: '',
                imageSrcSet: '',
                imageSizes: '',
                category: 'web app',
                slug: ''
            }
        }
    }
}
export const ContactData = {
    section: 'contact',
    title: 'have a project in mind ?',
    subtitle: 'you can contact me through my  email, social media, or by filling the next form:',
    illustration: `${IdeaSVG}`,
}
export const FooterData = {
    section: 'footer',
    copyright: `© ${new Date().getFullYear()} José E. Morales`

}