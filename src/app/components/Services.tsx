interface Service {
  name: string
  path: string
}

const services: Service[] = [
  { name: 'Technology & Development', path: '/tech-development' },
  { name: 'Design & Experience', path: '/design-experience' },
  { name: 'Cloud & Automation', path: '/cloud-automation' },
  { name: 'Marketing & Growth', path: '/marketing-growth' },
]

export default services
