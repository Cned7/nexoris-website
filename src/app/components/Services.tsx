interface Service {
  name: string
  path: string
}

const services: Service[] = [
  {
    name: 'Software Development Services',
    path: '/software-development',
  },
  { name: 'Digital Experience & Design', path: '/digital-experience-design' },
  { name: 'Marketing & Analytics', path: '/marketing-and-analytics' },
  { name: 'Consulting & Innovation', path: '/consulting-and-innovation' },
]

export default services
